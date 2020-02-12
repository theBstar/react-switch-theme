import React, { createContext } from 'react';
import useReactSwitchTheme from './useSwitchTheme';

export const Theme = createContext(['light', () => { }]);
export function ThemeProvider(props) {
  const {
    colors,
    activeMode,
    offlineStorageKey,
  } = props;
  const [currentMode, setDiffMode] = useReactSwitchTheme({ colors, activeMode, offlineStorageKey });

  return (
    <Theme.Provider value={[currentMode, setDiffMode]}>
      {React.Children.only(props.children)}
    </Theme.Provider>
  );
}