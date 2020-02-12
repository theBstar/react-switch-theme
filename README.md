![npm](https://img.shields.io/npm/dw/react-switch-theme)
![NPM](https://img.shields.io/npm/l/react-switch-theme)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-switch-theme)
# react-switch-theme
Switch between your themes, (i.e. dark/light or so) with just one click. Uses react hooks.
[react-switch-theme on npm](https://www.npmjs.com/package/react-switch-theme "Go to NPM page")

## Live demo: [codesandbox](https://codesandbox.io/embed/vigorous-wave-4kvk6?fontsize=14&hidenavigation=1&theme=dark "Go to code sand box example")

# Install:
  ```javascript
    npm i react-switch-theme
  ``` 

## Updated usage:
  This does not break anything, old usage is still valid.

  1. Import ThemeProvider and Theme. Theme is the Context which will be used with useContext to get theme and setTheme.
      ```Javascript
      import { ThemeProvider, Theme } from "react-switch-theme";
      ```
  2. Wrap your app with ThemeProvider. This takes just one children, It accepts three props.
  ```Javascript
    const colors = {
      light: {
        background: "#fff",
        color: "#000"
      },
      dark: {
        background: "#000",
        color: "#fff"
      }
    };
    const activeMode = "light";
    const offlineStorageKey = "react-random-key";

    // wrap your app
      <ThemeProvider
        colors={colors}
        activeMode={activeMode}
        offlineStorageKey={offlineStorageKey}
      >
        <App />
      </ThemeProvider>
  ```
3. Now in app you can access theme by using:

  ```Javascript
    const [theme, toogleTheme] = useContext(Theme);
  ```
    theme is current theme: string, toogleTheme is a function which changes your current theme.

4. Access your css var from css-in-js or css:
  ```css
    // You did the hardwork now just use your vars.
    background: var(--background);
    color: var(--color);
  ```

### Old Usage:
   #### Demo: [CodeSandbox](https://codesandbox.io/embed/elastic-noether-c048l)

  1. Import ( default import ):

      ```javascript
      import useReactSwitchTheme from 'react-switch-theme'; 
      ```

  2. Pass one option to the hook

      ```javascript
      const options = {
        colors: {
        
          // Object of two color objects. light and dark or whatever you call them.
          light: {

          // These properties will be converted to css vars
          // These can be named anything
          // You can access them in css, css-in-js or in other way by using 'var(--propName)'
          background: '#fff',
          color: '#000',
          },
          dark: {

          // Property name must be same for both objects

          background: '#000',
          color: '#fff',
          },
        },
        
        // This is the current active theme
        // It must be one of the key of colors object
        activeMode: 'light',
        
        // An unique key for your app to store themeMode in localStorage
        // It should be same for every load.
        // So, choosen theme stays even after a refresh
        offlineStorageKey: 'replace it with you app name or some hash'
        
      }
      ```
    
  3. Use it in your app:
  
      ```javascript
        const [currentMode, setDiffMode] = useReactSwitchTheme(options)
        
        // currentMode is a string with the currentTheme as value
        // light or dark here.
        
        // setDiffMode is function which will toggle between two themes on call.
      ```
      
  4. Your css:
    
      ```css
        // You did the hardwork now just use your vars.
        background: var(--background);
        color: var(--color);
      ```
  
  
  
