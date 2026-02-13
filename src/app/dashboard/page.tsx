'use client';

import { useQuery } from '@tanstack/react-query';
import Card from '@/components/ui/Card';
import { getStatus } from '@/lib/api/client';

export default function DashboardPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['status'],
    queryFn: getStatus
  });

  return (
    <div className="stack">
      <Card title="Dashboard" badge="Protected">
        <p>Welcome back. This route is protected by middleware and auth session checks.</p>
      </Card>

      <div className="grid">
        <Card title="System Status" badge="API">
          {isLoading && <p>Loading status...</p>}
          {error && <p>Unable to load status. Please retry.</p>}
          {data && (
            <div className="stack" style={{ gap: 8 }}>
              <div>
                <strong>Status:</strong> {data.status}
              </div>
              <div>
                <strong>Time:</strong> {new Date(data.time).toLocaleString()}
              </div>
              <div>
                <strong>Version:</strong> {data.version}
              </div>
            </div>
          )}
        </Card>
        <Card title="Quick Health" badge="Observability">
          <p>Structured logs are emitted from `/api/status` and auth routes.</p>
          <p className="code">LOG_LEVEL=info</p>
        </Card>
      </div>
    </div>
  );
}
