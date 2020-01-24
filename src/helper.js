export function executeCallBackIfLocalStorageAndOfflineKeyAvailable(offlineStorageKey, callback) {
  if (localStorage && offlineStorageKey) {
    callback(offlineStorageKey);
  }
}

function getPreviouslySavedModeFromLocalStorage(defaultTheme, offlineStorageKey) {
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
    currentActiveTheme = getPreviouslySavedModeFromLocalStorage(
      currentActiveTheme,
      offlineStorageKey,
    );
  }
  return currentActiveTheme;
}
