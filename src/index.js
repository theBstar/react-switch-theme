import { useState, useEffect } from 'react';

/* eslint-disable no-console */

function addOfflineThemeWithCB(offlineStorageKey, callback) {
  if (!offlineStorageKey) {
    let warnMessage = '[react-switch-theme]: offlineStorageKey should be ';
    warnMessage += 'provided to support offline theme storage';
    console.debug(warnMessage);
    return;
  }
  if (localStorage) {
    callback(offlineStorageKey);
  }
}

function useReactSwitchTheme({
  colors,
  activeMode,
  offlineStorageKey,
}) {
  // eslint-disable-next-line no-restricted-syntax
  const colorsKeys = Object.keys(colors);

  if (colorsKeys.indexOf(activeMode) === -1) {
    const errorMessage = '[react-switch-theme]: activeMode should be one of the key of colors';
    console.error(errorMessage);
    throw Error(errorMessage);
  }

  let actualActiveMode = activeMode;
  if (offlineStorageKey) {
    if (localStorage) {
      const previousMode = localStorage.getItem(offlineStorageKey);
      if (previousMode) {
        actualActiveMode = previousMode;
      }
    }
  }
  const [currentMode, setCurrentMode] = useState(actualActiveMode);

  function setDiffMode() {
    const currentModeIndex = colorsKeys.indexOf(currentMode);
    const nextModeIndex = (currentModeIndex === 0 ? 1 : 0);
    const nextColorMode = colorsKeys[nextModeIndex];

    addOfflineThemeWithCB(offlineStorageKey, (key) => {
      localStorage.setItem(key, nextColorMode);
    });
    setCurrentMode(nextColorMode);
  }

  useEffect(() => {
    const nextColors = colors[currentMode];

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, val] of Object.entries(nextColors)) {
      document.documentElement.style.setProperty(`--${key}`, `${val}`);
    }
  }, [currentMode]);

  return [
    currentMode,
    setDiffMode,
  ];
}

export default useReactSwitchTheme;
