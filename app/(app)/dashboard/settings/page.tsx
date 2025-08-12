"use client";
import { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';

export default function SettingsPage() {
  const [reports, setReports] = useState(true);
  const [alerts, setAlerts] = useState(true);
  return (
    <div className="space-y-6">
      <div className="glass rounded-2xl p-6">
        <h2 className="font-bold text-xl mb-4">Profile</h2>
        <form className="grid md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm">Display name</span>
            <input className="mt-1 w-full bg-transparent border border-border rounded-xl px-3 py-2" defaultValue="Creator"/>
          </label>
          <label className="block">
            <span className="text-sm">Email</span>
            <input type="email" className="mt-1 w-full bg-transparent border border-border rounded-xl px-3 py-2" defaultValue="you@example.com"/>
          </label>
        </form>
      </div>
      <div className="glass rounded-2xl p-6">
        <h2 className="font-bold text-xl mb-4">Preferences</h2>
        <div className="flex items-center justify-between py-2">
          <div>
            <div className="font-medium">Weekly reports</div>
            <div className="text-muted text-sm">Receive a weekly performance summary</div>
          </div>
          <Switch.Root checked={reports} onCheckedChange={setReports} className="w-12 h-6 rounded-full bg-border data-[state=checked]:bg-primary relative">
            <Switch.Thumb className="block w-5 h-5 bg-foreground rounded-full translate-x-1 data-[state=checked]:translate-x-6 transition-transform" />
          </Switch.Root>
        </div>
        <div className="flex items-center justify-between py-2">
          <div>
            <div className="font-medium">Trend alerts</div>
            <div className="text-muted text-sm">Get notified when a post is trending</div>
          </div>
          <Switch.Root checked={alerts} onCheckedChange={setAlerts} className="w-12 h-6 rounded-full bg-border data-[state=checked]:bg-primary relative">
            <Switch.Thumb className="block w-5 h-5 bg-foreground rounded-full translate-x-1 data-[state=checked]:translate-x-6 transition-transform" />
          </Switch.Root>
        </div>
      </div>
    </div>
  );
}