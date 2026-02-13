import type { HTMLAttributes } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  badge?: string;
};

export default function Card({ title, badge, children, className = '', ...props }: CardProps) {
  return (
    <section className={`card ${className}`.trim()} {...props}>
      {(title || badge) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {title ? <h3 style={{ margin: 0 }}>{title}</h3> : <span />}
          {badge ? <span className="badge">{badge}</span> : null}
        </div>
      )}
      <div style={{ marginTop: title || badge ? 12 : 0 }}>{children}</div>
    </section>
  );
}
