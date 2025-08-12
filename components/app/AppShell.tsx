"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const items = [
  { href: '/dashboard', label: 'Overview' },
  { href: '/dashboard/content', label: 'Content' },
  { href: '/dashboard/settings', label: 'Settings' },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const authed = typeof window !== 'undefined' && localStorage.getItem('pt_authed') === 'true';
    if (!authed) router.replace('/login');
  }, [router]);
  return (
    <div className="container-fluid py-8 grid lg:grid-cols-[240px_1fr] gap-6">
      <aside className="glass rounded-2xl p-4 h-fit sticky top-24">
        <nav className="space-y-1">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className={`block px-3 py-2 rounded-xl hover:bg-primary/10 transition-colors ${pathname===it.href ? 'bg-primary/10 text-primary' : ''}`}>{it.label}</Link>
          ))}
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
}