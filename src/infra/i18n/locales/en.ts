export type TranslationMap = { [key: string]: string | TranslationMap };

export const en: TranslationMap = {
  cli: {
    start: "Starting OpenClaw gateway...",
    ready: "Gateway is ready on port {port}.",
    error: "Gateway error: {message}",
    restarting: "Gateway restarting",
    stopping: "Gateway stopping",
    shutdownTimeout: "Shutdown timed out; exiting without full cleanup.",
  },
  errors: {
    authRequired: "Authentication required.",
    invalidToken: "Invalid token.",
    portInUse: "Port {port} is already in use.",
    portFree: "Port {port} is free.",
    authTooManyAttempts: "Too many failed authentication attempts. Please try again later.",
    authTooManyAttemptsWs: "unauthorized: too many failed authentication attempts (retry later)",
  },
  security: {
    nonLoopbackWarning:
      "⚠️ Gateway is binding to a non-loopback address. Ensure authentication is configured before exposing to public networks.",
  },
};
