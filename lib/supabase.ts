import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cbkkixcshfojhhrtlkoh.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNia2tpeGNzaGZvamhocnRsa29oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4NDAyMDQsImV4cCI6MjAyNTQxNjIwNH0.GIC5a4EYjnt8Qh1z6CE5VrkTi4cvYw3ldtftOjSm-wY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
