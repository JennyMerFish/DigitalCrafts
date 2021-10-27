import { createClient } from '@supabase/supabase-js'

 const supabaseUrl = process.env.supabaseURL
 const supabaseAnonKey = process.env.supabaseAPIkey

export const supabase = createClient(supabaseUrl, supabaseAnonKey)