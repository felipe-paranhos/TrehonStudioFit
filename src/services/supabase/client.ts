import { createClient } from '@supabase/supabase-js'
import type { SupabaseClient } from '@supabase/supabase-js'

const supabaseCredentials =
  import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY
    ? {
        url: import.meta.env.VITE_SUPABASE_URL,
        anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
      }
    : null

export const isSupabaseConfigured = supabaseCredentials !== null

export const supabase: SupabaseClient | null = supabaseCredentials
  ? createClient(supabaseCredentials.url, supabaseCredentials.anonKey)
  : null
