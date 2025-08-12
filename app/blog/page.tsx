import Link from 'next/link';

const posts = [
  { slug: 'creator-growth-playbook', title: 'The Creator Growth Playbook', excerpt: 'Tactics for growing across social platforms in 2025.' },
  { slug: 'designing-analytics-that-inspire-action', title: 'Designing Analytics that Inspire Action', excerpt: 'Turning charts into decisions.' },
];

export default function BlogIndex() {
  return (
    <div className="container-fluid py-16">
      <h1 className="text-4xl font-extrabold">PulseTrack Blog</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {posts.map(p => (
          <article key={p.slug} className="glass rounded-2xl p-6">
            <h2 className="font-bold text-2xl"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h2>
            <p className="text-muted mt-2">{p.excerpt}</p>
            <Link href={`/blog/${p.slug}`} className="btn btn-secondary mt-4 inline-block">Read</Link>
          </article>
        ))}
      </div>
    </div>
  );
}