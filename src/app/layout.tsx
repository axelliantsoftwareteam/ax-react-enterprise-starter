import type { Metadata } from 'next';
import Providers from '@/app/providers';
import TopNav from '@/components/layout/TopNav';
import { initOpenTelemetry } from '@/lib/observability/otel';
import './globals.css';

export const metadata: Metadata = {
  title: 'Axelliant Enterprise Starter',
  description: 'Enterprise-grade Next.js starter by Axelliant Software Engineering'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  initOpenTelemetry();

  return (
    <html lang="en">
      <body>
        <Providers>
          <TopNav />
          <main>
            <div className="container">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
