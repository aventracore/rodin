"use client";
import { useMemo } from 'react';

function simpleMarkdownToHtml(md: string) {
  return md
    .replace(/^###\s(.+)$/gm, '<h3>$1</h3>')
    .replace(/^##\s(.+)$/gm, '<h2>$1</h2>')
    .replace(/^#\s(.+)$/gm, '<h1>$1</h1>')
    .replace(/^>\s(.+)$/gm, '<blockquote>$1</blockquote>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, (m) => (m.startsWith('<') ? m : `<p>${m}</p>`));
}

export function ClientPost({ markdown }: { markdown: string }) {
  const html = useMemo(() => simpleMarkdownToHtml(markdown), [markdown]);
  return (
    <article className="prose prose-invert max-w-3xl" dangerouslySetInnerHTML={{ __html: html }} />
  );
}