"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ThemeToggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
  { href: '/dashboard', label: 'Dashboard' },
];

export function NavBar() {
  const pathname = usePathname();
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 backdrop-blur-xl border-b border-border/50 bg-background/60"
    >
      <div className="container-fluid h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-lg tracking-tight">
          <span className="text-primary">Pulse</span>Track
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`relative px-2 py-1 hover:text-primary transition-colors ${pathname === l.href ? 'text-primary' : ''}`}>
              {l.label}
              {pathname === l.href && (
                <motion.span layoutId="nav-underline" className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary" />
              )}
            </Link>
          ))}
          <ThemeToggle />
          <Link href="/login" className="btn btn-secondary hidden lg:inline-flex">Login</Link>
          <Link href="/dashboard" className="btn btn-primary hidden lg:inline-flex">Open App</Link>
        </nav>
      </div>
    </motion.header>
  );
}