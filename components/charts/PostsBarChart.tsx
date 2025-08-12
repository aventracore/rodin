"use client";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function PostsBarChart({ data }: { data: { day: string; posts: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="day" stroke="#888" />
        <YAxis stroke="#888" />
        <Tooltip contentStyle={{ background: 'rgba(17,20,29,0.9)', border: '1px solid rgba(100,100,120,0.3)' }} />
        <Bar dataKey="posts" fill="#9b5bfa" radius={[6,6,0,0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}