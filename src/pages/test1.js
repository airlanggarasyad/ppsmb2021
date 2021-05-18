import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function Test1() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Breadcrumbs navigations={["Beranda", "Agenda", "Test 1"]}  color="var(--color-yellow)"/>
      <Link to={`${location.pathname}/test2`}>Dalemnya hari 1</Link>
      <h2>Test 1</h2>
    </div>
  );
}

export default Test1;
