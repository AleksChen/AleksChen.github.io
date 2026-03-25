import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/config";

function ensureLeadingSlash(path: string): string {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

function normalizePath(path: string): string {
  const withSlash = ensureLeadingSlash(path);
  if (withSlash === "/") return withSlash;
  return withSlash.replace(/\/+$/, "");
}

export function getLocaleFromPathname(pathname: string): Locale {
  const normalized = normalizePath(pathname);
  const firstSegment = normalized.split("/").filter(Boolean)[0];
  return isLocale(firstSegment) ? firstSegment : DEFAULT_LOCALE;
}

export function removeLocalePrefix(path: string): string {
  const normalized = normalizePath(path);
  const locale = getLocaleFromPathname(normalized);

  if (locale === DEFAULT_LOCALE) {
    return normalized;
  }

  const prefix = `/${locale}`;
  const withoutPrefix = normalized.slice(prefix.length);
  return withoutPrefix ? ensureLeadingSlash(withoutPrefix) : "/";
}

export function localizePath(path: string, locale: Locale): string {
  const basePath = removeLocalePrefix(path);
  if (locale === DEFAULT_LOCALE) {
    return basePath;
  }
  return basePath === "/" ? `/${locale}` : `/${locale}${basePath}`;
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  return localizePath(pathname, targetLocale);
}
