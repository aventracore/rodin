"use client";
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';

const AudienceChart = dynamic(() => import('@/components/charts/AudienceChart'), { ssr: false });
const PostsBarChart = dynamic(() => import('@/components/charts/PostsBarChart'), { ssr: false });

function generateData(seed = 50) {
  const arr = [] as { name: string; value: number }[];
  for (let i = 0; i < 24; i++) {
    arr.push({ name: `${i}:00`, value: Math.max(0, Math.round(seed + (Math.random()-0.5)*10)) });
  }
  return arr;
}

export default function DashboardPage() {
  const [data, setData] = useState(generateData());
  const [bars, setBars] = useState(
    new Array(7).fill(0).map((_, i) => ({ day: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][i], posts: Math.round(3+Math.random()*6) }))
  );

  useEffect(() => {
    const id = setInterval(() => {
      setData((prev) => {
        const next = prev.slice(1);
        next.push({ name: `${(next.length+1)%24}:00`, value: Math.max(0, Math.round(prev[prev.length-1].value + (Math.random()-0.5)*8)) });
        return next;
      });
      setBars((prev) => prev.map(b => ({ ...b, posts: Math.max(0, b.posts + Math.round((Math.random()-0.5)*2)) })));
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const topPosts = useMemo(() => (
    new Array(10).fill(0).map((_, i) => ({ id: i+1, title: `Post #${i+1}`, platform: ['TikTok','Instagram','YouTube','X'][i%4], likes: Math.round(1200+Math.random()*400), comments: Math.round(40+Math.random()*60) }))
  ), []);

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="glass rounded-2xl p-4 col-span-2">
          <h2 className="font-bold mb-3">Audience growth</h2>
          <div className="h-64">
            <AudienceChart data={data} />
          </div>
        </div>
        <div className="glass rounded-2xl p-4">
          <h2 className="font-bold mb-3">Posts this week</h2>
          <div className="h-64">
            <PostsBarChart data={bars} />
          </div>
        </div>
      </div>

      <div className="glass rounded-2xl p-4">
        <h2 className="font-bold mb-3">Top posts</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-muted">
                <th className="py-2">Title</th>
                <th>Platform</th>
                <th>Likes</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {topPosts.map((p) => (
                <tr key={p.id} className="border-t border-border/60 hover:bg-primary/5">
                  <td className="py-2">{p.title}</td>
                  <td>{p.platform}</td>
                  <td>{p.likes}</td>
                  <td>{p.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}