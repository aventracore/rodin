import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ClientPost = dynamic(() => import('./post.client').then(m => m.ClientPost), { ssr: false });

const POSTS: Record<string, { title: string; description: string; content: string }> = {
  'creator-growth-playbook': {
    title: 'The Creator Growth Playbook',
    description: 'Tactics for growing across social platforms in 2025',
    content: `# The Creator Growth Playbook\n\nCreators who win in 2025 embrace three pillars: consistency, storytelling, and feedback loops.\n\n## Consistency beats intensity\nDaily small improvements compound. Create a cadence that you can sustain.\n\n## Storytelling > information\nInformation is everywhere. Stories are remembered. Anchor your message in narrative.\n\n## Feedback loops\nUse analytics weekly. Identify what resonates, double down, and sunset what does not.\n\n> PulseTrack helps by turning noisy metrics into clear focus.`
  },
  'designing-analytics-that-inspire-action': {
    title: 'Designing Analytics that Inspire Action',
    description: 'Turning charts into decisions',
    content: `# Designing Analytics that Inspire Action\n\nPretty charts are not enough. Analytics should trigger confident action.\n\n## Start with decisions\nAsk: what decisions will this chart inform? Remove anything that does not help answer that.\n\n## Reduce cognitive load\nUse consistent scales, concise labels, and strong contrast. Meet WCAG standards.\n\n## Highlight the signal\nDe-emphasize noise. Annotate key inflections, and explain why they matter.\n\nPulseTrack is built to elevate decision-making, not vanity metrics.`
  }
};

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = POSTS[params.slug];
  if (!post) return { title: 'Post — PulseTrack' };
  return { title: post.title, description: post.description };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug];
  if (!post) return <div className="container-fluid py-16">Post not found.</div>;
  return (
    <div className="container-fluid py-16">
      <ClientPost markdown={post.content} />
    </div>
  );
}