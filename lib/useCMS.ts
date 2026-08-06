import { useEffect, useState } from 'react';
import { getSupabase } from './supabase';
import { useLang } from './LangContext';
import { DEFAULT_LOCALE } from './locales';

// CMS content in Supabase is stored as one value per key (no per-language rows),
// so it only reflects the default-locale copy. Applying it on other locales would
// permanently override those languages' translations with the admin's English text.
export function useCMS(keys: string[]) {
  const { lang } = useLang();
  const [data, setData] = useState<Record<string, string>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (lang !== DEFAULT_LOCALE) { setData({}); setReady(true); return; }
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
  }, [lang]);

  return { data, ready };
}
