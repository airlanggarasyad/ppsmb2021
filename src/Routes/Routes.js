import React, { Component } from "react";
import Galeri from "../pages/Galeri";
import Beranda from "../pages/Beranda";
import Agenda from "../pages/Agenda";
import { Switch, Route } from "react-router-dom";
import gaTracker from './gaTracker'
// import {Switch, Route} from "./RelativeRoute"
import FAQ from "../pages/FAQ";

export default function Routes() {
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

