import { en, type TranslationMap } from "./locales/en.js";
import { zhCN } from "./locales/zh-CN.js";

type Locale = "en" | "zh-CN";

class I18nManager {
  private locale: Locale = "en";
  private translations: Record<Locale, TranslationMap> = {
    en,
    "zh-CN": zhCN,
  };

  public setLocale(locale: Locale) {
    if (this.translations[locale]) {
      this.locale = locale;
    }
  }

  public getLocale(): Locale {
    return this.locale;
  }

  public t(key: string, params?: Record<string, string | number>): string {
    const keys = key.split(".");
    let value: unknown = this.translations[this.locale];

    for (const k of keys) {
      if (value && typeof value === "object") {
        value = (value as Record<string, unknown>)[k];
      } else {
        value = undefined;
        break;
      }
    }

    if (value === undefined && this.locale !== "en") {
      value = this.translations["en"];
      for (const k of keys) {
        if (value && typeof value === "object") {
          value = (value as Record<string, unknown>)[k];
        } else {
          value = undefined;
          break;
        }
      }
    }

    if (typeof value !== "string") {
      return key;
    }

    if (params) {
      return value.replace(/\{(\w+)\}/g, (_, k) => String(params[k] ?? `{${k}}`));
    }

    return value;
  }
}

export const i18n = new I18nManager();

/**
 * Shorthand for translating a key with optional parameters.
 * Automatically uses the currently configured backend locale.
 */
export const t = (key: string, params?: Record<string, string | number>): string => {
  return i18n.t(key, params);
};

export class OpenClawError extends Error {
  public code: string;
  public params?: Record<string, string | number>;

  constructor(code: string, params?: Record<string, string | number>) {
    super(t(`errors.${code}`, params));
    this.name = "OpenClawError";
    this.code = code;
    this.params = params;
  }
}
