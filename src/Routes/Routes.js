import React, { Component, useEffect } from "react";
import Galeri from "../pages/Galeri";
import Beranda from "../pages/Beranda";
import Agenda from "../pages/Agenda";
import { Switch, Route } from "react-router-dom";
import gaTracker from './gaTracker'
// import {Switch, Route} from "./RelativeRoute"
import tawkTo from "tawkto-react";
import TawkTo from "../components/TawkTo"

export default function Routes() {
  // const tawkToPropertyId = "60f0f124d6e7610a49ab832e"
  // useEffect(() => {
  //   if (email) {
  //       tawkTo(tawkToPropertyId, email, fullName)
  //   }
  // }, [email, firstName, lastName]);

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://embed.tawk.to/60f433d2649e0a0a5cccc803/1fasuksoa";
    script.async = true;
    script.charset='UTF-8';
    script.setAttribute('crossorigin','*');
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  gaTracker();

  return (
    <Switch>
      <Route exact path="/2021" component={Beranda} />
      {/* <Route exact path="/2021/faq" component={FAQ} /> */}
      <Route path="/2021/galeri" component={Galeri} />
      {/* <Route relative path="/2021/agenda" component={Agenda} /> */}
    </Switch>
  );
}

