import Link from 'next/link';
import LogoutButton from '@/components/layout/LogoutButton';
import { getSessionFromCookies } from '@/lib/auth/session';

export default function TopNav() {
  const session = getSessionFromCookies();

  return (
    <nav className="nav">
      <div>
        <strong>Axelliant Enterprise Starter</strong>
      </div>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/settings">Settings</Link>
        <Link href="/admin">Admin</Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {session ? (
          <span className="code">{session.email} · {session.role}</span>
        ) : (
          <span className="code">guest</span>
        )}
        {session ? <LogoutButton /> : <Link href="/login">Sign in</Link>}
      </div>
    </nav>
  );
}
