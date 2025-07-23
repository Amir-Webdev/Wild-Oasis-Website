import { createClient } from "@supabase/supabase-js";
import type { Database } from "../types/supabase";

export const supabaseUrl = process.env.SUPABASE_URL;

const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseKey || !supabaseUrl) {
  throw new Error("کلید یا لینک Supabase تعریف نشده است.");
}

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
