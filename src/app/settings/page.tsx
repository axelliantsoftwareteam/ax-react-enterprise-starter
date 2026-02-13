'use client';

import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useSettingsStore } from '@/lib/state/useSettingsStore';
import { useState } from 'react';

export default function SettingsPage() {
  const { notifications, compactMode, toggleNotifications, toggleCompactMode } =
    useSettingsStore();
  const [email, setEmail] = useState('user@axelliant.com');

  return (
    <div className="stack">
      <Card title="Settings" badge="Protected">
        <p>Client preferences are stored in a Zustand store.</p>
      </Card>

      <Card title="Profile">
        <div className="stack" style={{ gap: 12 }}>
          <label>
            Email
            <Input value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <Button variant="secondary">Save changes</Button>
        </div>
      </Card>

      <div className="grid">
        <Card title="Notifications">
          <p>Receive alerts for critical system changes.</p>
          <Button onClick={toggleNotifications}>
            {notifications ? 'Disable' : 'Enable'} notifications
          </Button>
        </Card>
        <Card title="Layout Density">
          <p>Compact mode toggles tighter spacing across the UI.</p>
          <Button onClick={toggleCompactMode}>
            {compactMode ? 'Disable' : 'Enable'} compact mode
          </Button>
        </Card>
      </div>
    </div>
  );
}
