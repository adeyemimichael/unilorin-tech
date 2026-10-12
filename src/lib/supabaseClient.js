import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();

const createEmptyQueryBuilder = () => {
  const builder = {
    select: () => builder,
    order: () => builder,
    eq: () => builder,
    insert: () => builder,
    update: () => builder,
    delete: () => builder,
    then: (resolve) => resolve({ data: [], error: null }),
  };

  return builder;
};

const safeSupabaseClient = {
  from: () => createEmptyQueryBuilder(),
  storage: {
    from: () => ({
      upload: async () => ({ error: null, data: null }),
      getPublicUrl: () => ({ data: { publicUrl: '' }, error: null }),
    }),
  },
};

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : safeSupabaseClient;