import React, { Component } from "react";
import Galeri from "../pages/Galeri";
import Beranda from "../pages/Beranda";
import Agenda from "../pages/Agenda";
import { Switch, Route } from "react-router-dom";
// import {Switch, Route} from "./RelativeRoute"
import FAQ from "../pages/FAQ";

class Routes extends Component {
  render() {
    console.log(this.props);
    return (
      <Switch basename="/2021">
        <Route exact path="/" component={Beranda} />
        <Route path="/beranda" component={Beranda} />
        {/* <Route exact path="/faq" component={FAQ} /> */}
        <Route path="/galeri" component={Galeri} />
        {/* <Route relative path="/agenda" component={Agenda} /> */}
      </Switch>
    );
  }
}

export default Routes;
