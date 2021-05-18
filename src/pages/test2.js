import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function Test2() {
  return (
    <div>
      <Breadcrumbs />
      <h1>test2</h1>
      <Link to={`${useLocation().pathname}/test3`}>Dalemnya-dalemnya hari 1</Link>
    </div>
  );
}

export default Test2;
