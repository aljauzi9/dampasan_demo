export const GlobalDebug = (function () {
   const savedConsole = console
   return function (debugOn, suppressAll) {
      const suppress = suppressAll || false
      if (debugOn === false) {
         // supress the default console functionality
         console = {}
         console.log = function () { }
         // supress all type of consoles
         if (suppress) {
            console.info = function () { }
            console.warn = function () { }
            console.error = function () { }
            console.groupCollapsed = function () { }
            console.groupEnd = function () { }
         } else {
            console.info = savedConsole.info
            console.warn = savedConsole.warn
            console.error = savedConsole.error
            console.groupCollapsed = savedConsole.error
            console.groupEnd = savedConsole.error
         }
      } else {
         console = savedConsole
      }
   }
})()