"use client";
import * as Switch from '@radix-ui/react-switch';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const isDark = (theme ?? resolvedTheme) === 'dark';
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted">Light</span>
      <Switch.Root
        aria-label="Toggle dark mode"
        checked={isDark}
        onCheckedChange={(v) => setTheme(v ? 'dark' : 'light')}
        className="w-12 h-6 rounded-full bg-border relative data-[state=checked]:bg-primary transition-colors"
      >
        <Switch.Thumb className="block w-5 h-5 bg-foreground rounded-full translate-x-1 data-[state=checked]:translate-x-6 transition-transform" />
      </Switch.Root>
      <span className="text-xs text-muted">Dark</span>
    </div>
  );
}