![npm](https://img.shields.io/npm/dw/react-switch-theme)
![NPM](https://img.shields.io/npm/l/react-switch-theme)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-switch-theme)
# react-switch-theme
Switch between your themes, (i.e. dark/light or so) with just one click. Uses react hooks.
[react-switch-theme on npm](https://www.npmjs.com/package/react-switch-theme "Go to NPM page")

## Live demo: [codesandbox](https://codesandbox.io/embed/elastic-noether-c048l "Go to code sand box example")

## Usage:

  1. Install:

      ```javascript
      npm i react-switch-theme
      ``` 

  2. Import ( default import ):

      ```javascript
      import useReactSwitchTheme from 'react-switch-theme'; 
      ```

  3. Pass one option to the hook

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
    
  4. Use it in your app:
  
      ```javascript
        const [currentMode, setDiffMode] = useReactSwitchTheme(options)
        
        // currentMode is a string with the currentTheme as value
        // light or dark here.
        
        // setDiffMode is function which will toggle between two themes on call.
      ```
      
  5. Your css:
    
      ```css
        // You did the hardwork now just use your vars.
        background: var(--background);
        color: var(--color);
      ```
  
  
  
