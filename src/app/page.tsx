import Card from '@/components/ui/Card';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="stack">
      <Card title="Axelliant Enterprise Starter" badge="MVP">
        <p>
          A premium Next.js foundation with auth, state management, observability, and
          enterprise-grade conventions.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
          <Link href="/login" className="btn btn-primary">
            Sign in
          </Link>
          <Link href="/dashboard" className="btn btn-secondary">
            Go to dashboard
          </Link>
        </div>
      </Card>

      <div className="grid">
        <Card title="State Management">
          <p>React Query handles server state, while Zustand powers client settings.</p>
          <p className="code">src/lib/state</p>
        </Card>
        <Card title="Auth & RBAC">
          <p>Mock auth with role-based protection for admin routes.</p>
          <p className="code">src/lib/auth</p>
        </Card>
        <Card title="Observability">
          <p>Structured JSON logging and optional OpenTelemetry stub.</p>
          <p className="code">src/lib/observability</p>
        </Card>
      </div>
    </div>
  );
}
