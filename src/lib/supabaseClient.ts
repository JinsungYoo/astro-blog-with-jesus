import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("❌ supabaseUrl and supabaseAnonKey are required! Check environment variables in your deploy settings.");
  }
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
