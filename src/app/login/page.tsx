'use client';

import { useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function LoginPage() {
  const [email, setEmail] = useState('user@axelliant.com');
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get('next') || '/dashboard';

  const signIn = (role: 'user' | 'admin') => {
    startTransition(async () => {
      await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role, email })
      });
      router.push(nextPath);
      router.refresh();
    });
  };

  return (
    <div className="stack">
      <Card title="Sign in" badge="Mock Auth">
        <p>This mock provider issues a secure cookie for local development.</p>
      </Card>
      <Card title="Access">
        <div className="stack" style={{ gap: 12 }}>
          <label>
            Email
            <Input value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button onClick={() => signIn('user')} disabled={isPending}>
              {isPending ? 'Signing in...' : 'Sign in as user'}
            </Button>
            <Button variant="secondary" onClick={() => signIn('admin')} disabled={isPending}>
              {isPending ? 'Signing in...' : 'Sign in as admin'}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
