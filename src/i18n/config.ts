export const SUPPORTED_LOCALES = ["zh", "en"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "zh";

export const LOCALE_META: Record<
  Locale,
  {
    htmlLang: string;
    ogLocale: string;
    label: string;
  }
> = {
  zh: {
    htmlLang: "zh-CN",
    ogLocale: "zh_CN",
    label: "中文",
  },
  en: {
    htmlLang: "en-US",
    ogLocale: "en_US",
    label: "English",
  },
};

export function isLocale(value: string | undefined): value is Locale {
  if (!value) return false;
  return SUPPORTED_LOCALES.includes(value as Locale);
}
