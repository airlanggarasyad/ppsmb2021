import React, { Component } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useRouteMatch,
} from "react-router-dom";
import test1 from './test1'

export default class Galeri extends Component {
  render() {
    return (
      <div>
        <Breadcrumbs />
        <Link to="/test1">Hari 1</Link>
        <Switch>
        </Switch>
      </div>
    );
  }
}
