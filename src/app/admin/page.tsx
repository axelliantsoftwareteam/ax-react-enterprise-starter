import Card from '@/components/ui/Card';
import { canAccess } from '@/lib/auth/rbac';
import { getSessionFromCookies } from '@/lib/auth/session';
import { redirect } from 'next/navigation';

export default function AdminPage() {
  const session = getSessionFromCookies();

  if (!session || !canAccess(session.role, 'view:admin')) {
    redirect('/dashboard?error=forbidden');
  }

  return (
    <div className="stack">
      <Card title="Admin Console" badge="Role: admin">
        <p>This page is restricted to admin users via middleware and RBAC guard.</p>
      </Card>
      <div className="grid">
        <Card title="Access Policies">
          <p>RBAC policies are defined in `src/lib/auth/rbac.ts`.</p>
        </Card>
        <Card title="Audit Snapshot">
          <p className="code">Last review: {new Date().toLocaleDateString()}</p>
          <p>Mock data shown for demo purposes.</p>
        </Card>
      </div>
    </div>
  );
}
