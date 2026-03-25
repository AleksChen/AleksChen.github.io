const SUPPORTED_LOCALES = ["zh", "en"];
const DEFAULT_LOCALE = "zh";
const LOCALE_META = {
  zh: {
    htmlLang: "zh-CN",
    ogLocale: "zh_CN",
    label: "中文"
  },
  en: {
    htmlLang: "en-US",
    ogLocale: "en_US",
    label: "English"
  }
};
function isLocale(value) {
  if (!value) return false;
  return SUPPORTED_LOCALES.includes(value);
}

function ensureLeadingSlash(path) {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
}
function normalizePath(path) {
  const withSlash = ensureLeadingSlash(path);
  if (withSlash === "/") return withSlash;
  return withSlash.replace(/\/+$/, "");
}
function getLocaleFromPathname(pathname) {
  const normalized = normalizePath(pathname);
  const firstSegment = normalized.split("/").filter(Boolean)[0];
  return isLocale(firstSegment) ? firstSegment : DEFAULT_LOCALE;
}
function removeLocalePrefix(path) {
  const normalized = normalizePath(path);
  const locale = getLocaleFromPathname(normalized);
  if (locale === DEFAULT_LOCALE) {
    return normalized;
  }
  const prefix = `/${locale}`;
  const withoutPrefix = normalized.slice(prefix.length);
  return withoutPrefix ? ensureLeadingSlash(withoutPrefix) : "/";
}
function localizePath(path, locale) {
  const basePath = removeLocalePrefix(path);
  if (locale === DEFAULT_LOCALE) {
    return basePath;
  }
  return basePath === "/" ? `/${locale}` : `/${locale}${basePath}`;
}
function switchLocalePath(pathname, targetLocale) {
  return localizePath(pathname, targetLocale);
}

export { DEFAULT_LOCALE as D, LOCALE_META as L, getLocaleFromPathname as g, localizePath as l, switchLocalePath as s };
