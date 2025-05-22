globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createClient } from './index_BHZdZHjm.mjs';

const supabase = createClient(
  "https://bptoazwrceuxregitayz.supabase.co",
  undefined                                 
);

export { supabase as s };
