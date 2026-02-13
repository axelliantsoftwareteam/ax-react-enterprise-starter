export type ApiError = {
  message: string;
  code: string;
};

export type StatusResponse = {
  status: 'ok';
  time: string;
  version: string;
};

const DEFAULT_BASE_URL = '';

export function buildApiUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || DEFAULT_BASE_URL;
  if (!baseUrl) return path;
  return `${baseUrl.replace(/\/$/, '')}${path}`;
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(buildApiUrl(path), {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {})
    }
  });

  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as { error?: ApiError } | null;
    const message = body?.error?.message || 'Request failed';
    const code = body?.error?.code || String(response.status);
    throw new Error(`${code}:${message}`);
  }

  return (await response.json()) as T;
}

export async function getStatus(): Promise<StatusResponse> {
  return request<StatusResponse>('/api/status');
}
