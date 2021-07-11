import React from "react";
import Galeri from "../pages/Galeri";
import Beranda from "../pages/Beranda";
import Agenda from "../pages/Agenda";
import { Switch, Route } from "react-router-dom";
import FAQ from "../pages/FAQ";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Beranda} />
      <Route exact path="/beranda" component={Beranda} />
      <Route exact path="/faq" component={FAQ} />
      <Route exact path="/galeri" component={Galeri} />
      <Route exact path="/agenda" component={Agenda} />
    </Switch>
  );
}

export default Routes;
