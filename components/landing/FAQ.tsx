"use client";
import * as Accordion from '@radix-ui/react-accordion';

const items = [
  { q: 'Which platforms are supported?', a: 'TikTok, Instagram, YouTube, and X, with more on the way.' },
  { q: 'Can I cancel anytime?', a: 'Yes, subscriptions can be cancelled anytime in settings.' },
  { q: 'Do you offer student pricing?', a: 'Yes, we offer 30% off for students. Contact support.' },
];

export function FAQ() {
  return (
    <section className="container-fluid py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">Frequently Asked Questions</h2>
      <Accordion.Root type="single" collapsible className="max-w-3xl mx-auto">
        {items.map((it, idx) => (
          <Accordion.Item key={idx} value={`item-${idx}`} className="border-b border-border/60">
            <Accordion.Header>
              <Accordion.Trigger className="w-full text-left py-4 font-semibold hover:text-primary transition-colors">
                {it.q}
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="pb-4 text-muted">
              {it.a}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}