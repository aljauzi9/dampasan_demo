import React, { Suspense, useEffect } from 'react';
import Router from './router/Routes';
// import { GlobalDebug } from './utility/console';
// import './App.css';

const App = () => {

  useEffect(() => {
    // (process.env.REACT_APP_NODE_ENV === "development" || process.env.REACT_APP_NODE_ENV === "production" || process.env.REACT_APP_NODE_ENV === "staging") ? GlobalDebug(false) : GlobalDebug(true)
    if (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production') {
      console.log = function () { }
    }

    // console.log = function () { }
    // const script = document.createElement('script');

    // script.src = "https://smartarget.online/loader.js?u=cad83f3d5405f1ebba87c1cfed102e605da78eb5";
    // script.async = true;

    // document.body.appendChild(script);

    // return () => {
    //   document.body.removeChild(script);
    // }
  }, []);

  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  );
}

export default App;