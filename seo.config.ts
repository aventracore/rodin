import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  titleTemplate: '%s — PulseTrack',
  defaultTitle: 'PulseTrack — Social Media Analytics for Creators',
  description: 'Analytics SaaS for creators & small businesses: growth insights, audience analytics, posting performance.',
  openGraph: {
    type: 'website',
    url: 'https://pulsetrack.app',
    siteName: 'PulseTrack',
    images: [
      { url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop', width: 1200, height: 630, alt: 'PulseTrack analytics dashboard' }
    ],
  },
  twitter: {
    handle: '@pulsetrack',
    site: '@pulsetrack',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    { name: 'application-name', content: 'PulseTrack' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
  ],
};

export default config;