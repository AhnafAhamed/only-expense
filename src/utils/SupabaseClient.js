import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
console.log(import.meta.env.VITE_SUPABASE_URL);
const supabase = createClient(supabaseURL, supabaseKey);

supabase
  .channel("any")
  .on("postgres_changes", { event: "*", schema: "*" }, (payload) => {
    console.log("Change received!", payload);
  })
  .subscribe();

export default supabase;
