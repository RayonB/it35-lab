import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(' https://wrzucuejbzitdpzsweev.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyenVjdWVqYnppdGRwenN3ZWV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2MzYxMDQsImV4cCI6MjA1OTIxMjEwNH0.f9J0HPd2BW_kpa67L0kYVH1pdEZLRSaWU728xRDuLXs');