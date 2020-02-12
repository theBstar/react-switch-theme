export function saveThemeInLocalStorage(offlineStorageKey, themeMode) {
  if (localStorage && offlineStorageKey) {
    localStorage.setItem(offlineStorageKey, themeMode);
  }
}

function getSavedThemeFromLocalStorage(defaultTheme, offlineStorageKey) {
  let currentActiveTheme = defaultTheme;
  if (localStorage) {
    const previousMode = localStorage.getItem(offlineStorageKey);
    if (previousMode) {
      currentActiveTheme = previousMode;
    }
  }
  return currentActiveTheme;
}

export function getInitialActiveTheme(defaultTheme, offlineStorageKey) {
  let currentActiveTheme = defaultTheme;
  if (offlineStorageKey) {
    currentActiveTheme = getSavedThemeFromLocalStorage(
      currentActiveTheme,
      offlineStorageKey,
    );
  }
  return currentActiveTheme;
}
