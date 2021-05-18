import React, { Component } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";

export default class Galeri extends Component {
  render() {
    return (
      <div>
        <Breadcrumbs navigations={["Beranda"]}/>
        <Link to="./agenda/test1">Hari 1</Link>
      </div>
    );
  }
}
