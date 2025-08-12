"use client";
import { useMemo, useState } from 'react';

interface Row { id: number; title: string; platform: string; date: string; likes: number; comments: number; }

const rowsBase: Row[] = new Array(30).fill(0).map((_, i) => ({
  id: i+1,
  title: `Content ${i+1}`,
  platform: ['TikTok','Instagram','YouTube','X'][i%4],
  date: new Date(Date.now() - i*86400000).toISOString().slice(0,10),
  likes: Math.round(200 + Math.random()*1000),
  comments: Math.round(20 + Math.random()*120)
}));

export default function ContentPage() {
  const [query, setQuery] = useState('');
  const [sortKey, setSortKey] = useState<keyof Row>('likes');
  const [sortDir, setSortDir] = useState<'asc'|'desc'>('desc');

  const rows = useMemo(() => {
    const filtered = rowsBase.filter(r => (r.title + r.platform).toLowerCase().includes(query.toLowerCase()));
    const sorted = filtered.sort((a,b) => (a[sortKey] as number > (b[sortKey] as number) ? 1 : -1) * (sortDir==='asc'?1:-1));
    return sorted;
  }, [query, sortKey, sortDir]);

  function toggleSort(key: keyof Row) {
    if (sortKey === key) setSortDir(d => d==='asc'?'desc':'asc'); else { setSortKey(key); setSortDir('desc'); }
  }

  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex gap-3 items-center mb-4">
        <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Filter content..." className="bg-transparent border border-border rounded-xl px-3 py-2 flex-1" />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-muted">
            <tr>
              <th className="py-2">Title</th>
              <th><button onClick={()=>toggleSort('platform')}>Platform</button></th>
              <th><button onClick={()=>toggleSort('date')}>Date</button></th>
              <th><button onClick={()=>toggleSort('likes')}>Likes</button></th>
              <th><button onClick={()=>toggleSort('comments')}>Comments</button></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-border/60 hover:bg-primary/5">
                <td className="py-2">{r.title}</td>
                <td>{r.platform}</td>
                <td>{r.date}</td>
                <td>{r.likes}</td>
                <td>{r.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}