import React from 'react';

/* eslint-disable no-console */

function useReactSwitchTheme({
  colors,
  activeMode,
  offlineSupport,
  offlineStorageKey,
} = { offlineSupport: true }) {
  if (colors.indexOf(activeMode) === -1) {
    const errorMessage = '[react-switch-theme]: activeMode should be one of the key of colors';
    console.error(errorMessage);
    throw Error(errorMessage);
  }

  function addOfflineThemeWithCB(callback) {
    if (!offlineSupport) return;

    if (!offlineStorageKey) {
      const errorMessage = '[react-switch-theme]: offlineStorgeKey should be provided';
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    if (localStorage) {
      callback();
    } else {
      console.warn('[react-switch-theme]: Could not support offline theming');
    }
  }

  const [currentMode, setCurrentMode] = React.useState(activeMode);
  const colorsKeys = Object.keys(colors);

  addOfflineThemeWithCB(() => {
    const previousMode = localStorage.getItem(offlineStorageKey);
    setCurrentMode(previousMode);
  });


  function setDiffMode() {
    const currentModeIndex = colors.indexOf(currentMode);
    const nextModeIndex = (currentModeIndex === 0 ? 1 : 0);
    const nextColorMode = colorsKeys[nextModeIndex];

    addOfflineThemeWithCB(() => {
      localStorage.setItem(offlineStorageKey, nextColorMode);
      setCurrentMode(nextColorMode);
    });
  }

  React.useEffect(() => {
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
