export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

type LogPayload = {
  level: LogLevel;
  message: string;
  context?: Record<string, unknown>;
  requestId?: string;
};

const levels: LogLevel[] = ['debug', 'info', 'warn', 'error'];

function shouldLog(level: LogLevel) {
  const configured = (process.env.LOG_LEVEL as LogLevel) || 'info';
  return levels.indexOf(level) >= levels.indexOf(configured);
}

export function log({ level, message, context, requestId }: LogPayload) {
  if (!shouldLog(level)) return;

  const entry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    requestId,
    context
  };

  const output = JSON.stringify(entry);
  if (level === 'error') {
    console.error(output);
  } else if (level === 'warn') {
    console.warn(output);
  } else {
    console.log(output);
  }
}
