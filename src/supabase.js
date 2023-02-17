import { createClient } from "@supabase/supabase-js";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54aWJlbmR5cGVzdHFpeHl2cG1xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NjUzMDUxOCwiZXhwIjoxOTkyMTA2NTE4fQ.UnSc_cahd-XJdduAYGgFfedPjWgL3OXz8ywUMold4sU";
const supabaseUrl = "https://nxibendypestqixyvpmq.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
