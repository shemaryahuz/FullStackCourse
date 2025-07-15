import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_PUBLIC_SECRET;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;