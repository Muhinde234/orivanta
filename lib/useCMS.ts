import { useEffect, useState } from 'react';
import { getSupabase } from './supabase';

export function useCMS(keys: string[]) {
  const [data, setData] = useState<Record<string, string>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const client = getSupabase();
    if (!client) { setReady(true); return; }
    client
      .from('cms_content')
      .select('key, value')
      .in('key', keys)
      .then(({ data: rows }) => {
        if (rows) {
          const map: Record<string, string> = {};
          rows.forEach((r: { key: string; value: string }) => { map[r.key] = r.value; });
          setData(map);
        }
        setReady(true);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, ready };
}
