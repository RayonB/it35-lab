import { useState, useEffect } from 'react';
import {
  IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButton, IonInput, IonLabel, IonModal, IonFooter, IonCard,
  IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonAlert, IonText
} from '@ionic/react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../../utils/supabaseClient';

interface Post {
  post_id: string;
  user_id: number;
  username: string;
  post_content: string;
  post_created_at: string;
  post_updated_at: string;
}

const FeedContainer: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postContent, setPostContent] = useState('');
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  useEffect(() => {
    const fetchUserAndPosts = async () => {
      const { data: authData } = await supabase.auth.getUser();
      const email = authData?.user?.email;

      // Allow users with Gmail or nbsc.edu.ph domains
      if (email && /@(gmail\.com|nbsc\.edu\.ph)$/.test(email)) {
        const { data: userData, error } = await supabase
          .from('users')
          .select('user_id, username')
          .eq('user_email', email)
          .single();

        if (!error && userData && authData?.user) {
          setUser({ ...authData.user, id: userData.user_id } as User);
          setUsername(userData.username);
        }
      }

      const { data: postData, error: postError } = await supabase
        .from('posts')
        .select('*')
        .order('post_created_at', { ascending: false });

      if (!postError && postData) setPosts(postData as Post[]);
    };

    fetchUserAndPosts();
  }, []);

  const createPost = async () => {
    if (!postContent || !user || !username) return;

    const { data, error } = await supabase
      .from('posts')
      .insert([{ post_content: postContent, user_id: (user as any).id, username }])
      .select('*');

    if (!error && data) {
      setPosts([data[0] as Post, ...posts]);
      setPostContent('');
    }
  };

  const deletePost = async (post_id: string) => {
    await supabase.from('posts').delete().match({ post_id });
    setPosts(posts.filter(post => post.post_id !== post_id));
  };

  const startEditingPost = (post: Post) => {
    setEditingPost(post);
    setPostContent(post.post_content);
    setIsModalOpen(true);
  };

  const savePost = async () => {
    if (!postContent || !editingPost) return;

    const { data, error } = await supabase
      .from('posts')
      .update({ post_content: postContent })
      .match({ post_id: editingPost.post_id })
      .select('*');

    if (!error && data) {
      const updated = data[0] as Post;
      setPosts(posts.map(p => (p.post_id === updated.post_id ? updated : p)));
      setPostContent('');
      setEditingPost(null);
      setIsModalOpen(false);
      setIsAlertOpen(true);
    }
  };

  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Posts</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {user ? (
            <>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Create Post</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonInput
                    value={postContent}
                    onIonChange={e => setPostContent(e.detail.value!)}
                    placeholder="Write a post..."
                  />
                  <IonButton onClick={createPost}>Post</IonButton>
                </IonCardContent>
              </IonCard>

              {posts.map(post => (
                <IonCard key={post.post_id}>
                  <IonCardHeader>
                    <IonCardTitle>{post.username}</IonCardTitle>
                    <IonCardSubtitle>
                      {new Date(post.post_created_at).toLocaleString()}
                    </IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonText color="secondary">
                      <h1>{post.post_content}</h1>
                    </IonText>
                  </IonCardContent>
                  <IonFooter>
                    <IonButton fill="clear" onClick={() => startEditingPost(post)}>Edit</IonButton>
                    <IonButton fill="clear" color="danger" onClick={() => deletePost(post.post_id)}>Delete</IonButton>
                  </IonFooter>
                </IonCard>
              ))}
            </>
          ) : (
            <IonLabel>Loading...</IonLabel>
          )}
        </IonContent>

        <IonModal isOpen={isModalOpen} onDidDismiss={() => setIsModalOpen(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Edit Post</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonInput
              value={postContent}
              onIonChange={e => setPostContent(e.detail.value!)}
              placeholder="Edit your post..."
            />
          </IonContent>
          <IonFooter>
            <IonButton onClick={savePost}>Save</IonButton>
            <IonButton onClick={() => setIsModalOpen(false)}>Cancel</IonButton>
          </IonFooter>
        </IonModal>

        <IonAlert
          isOpen={isAlertOpen}
          onDidDismiss={() => setIsAlertOpen(false)}
          header="Success"
          message="Post updated successfully!"
          buttons={['OK']}
        />
      </IonPage>
    </IonApp>
  );
};

export default FeedContainer;
