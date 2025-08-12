import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import dynamic from 'next/dynamic';

const NavBar = dynamic(() => import('@/components/NavBar').then(m => m.NavBar), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer').then(m => m.Footer), { ssr: false });
const ClientProviders = dynamic(() => import('@/components/ClientProviders').then(m => m.ClientProviders), { ssr: false });

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://pulsetrack.app'),
  title: {
    default: 'PulseTrack — Social Media Analytics for Creators',
    template: '%s — PulseTrack',
  },
  description: 'PulseTrack helps creators and small businesses track growth across social platforms with beautiful, actionable insights.',
  manifest: '/manifest.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0b0f19' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ClientProviders>
          <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}