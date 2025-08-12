"use client";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function AudienceChart({ data }: { data: { name: string; value: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ left: -20, right: 10, top: 10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="name" stroke="#888" />
        <YAxis stroke="#888" />
        <Tooltip contentStyle={{ background: 'rgba(17,20,29,0.9)', border: '1px solid rgba(100,100,120,0.3)' }} />
        <Line type="monotone" dataKey="value" stroke="#5b7cfa" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}