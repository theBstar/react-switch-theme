import { useState, useEffect } from 'react';
import { getInitialActiveTheme, saveThemeInLocalStorage } from './helper';

function useReactSwitchTheme({
  colors,
  activeMode,
  offlineStorageKey,
}) {
  // eslint-disable-next-line no-restricted-syntax
  const colorsKeys = Object.keys(colors);

  if (colorsKeys.indexOf(activeMode) === -1) {
    const errorMessage = '[react-switch-theme]: activeMode should be one of the key of colors';
    throw Error(errorMessage);
  }

  const initialActiveMode = getInitialActiveTheme(activeMode, offlineStorageKey);
  const [currentMode, setCurrentMode] = useState(initialActiveMode);

  function setDiffMode() {
    const currentModeIndex = colorsKeys.indexOf(currentMode);
    const nextModeIndex = (currentModeIndex === 0 ? 1 : 0);
    const nextColorMode = colorsKeys[nextModeIndex];

    saveThemeInLocalStorage(offlineStorageKey, nextColorMode);
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
