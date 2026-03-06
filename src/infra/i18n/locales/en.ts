export type TranslationMap = { [key: string]: string | TranslationMap };

export const en: TranslationMap = {
  cli: {
    start: "Starting OpenClaw gateway...",
    ready: "Gateway is ready on port {port}.",
    error: "Gateway error: {message}",
  },
  errors: {
    authRequired: "Authentication required.",
    invalidToken: "Invalid token.",
    portInUse: "Port {port} is already in use.",
    portFree: "Port {port} is free.",
  },
};
