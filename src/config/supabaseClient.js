import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log("caca",supabaseUrl, supabaseAnonKey)


if (!supabaseUrl || !supabaseUrl) {
    throw new Error('Supabase URL and Anon Key must be provided');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;