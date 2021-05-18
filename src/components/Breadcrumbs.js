import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function Breadcrumbs(props) {
  const location = useLocation();

  const crumbsLinkGenerator = (location) => {
    let split = location.pathname.split("/");
    let paths = [split.map((path) => "")];

    for (let i = 0; i < split.length; i++) {
      if (i === 0) {
        paths[i] = "";
      } else {
        let path = paths[i - 1].concat("/", split[i]);
        paths[i] = path;
      }
    }
    paths[0] = "/";

    return paths;
  };

  const crumbsLinks = crumbsLinkGenerator(location);

  const breadCrumbs = [];
  for (let i = 0; i < props.navigations.length; i++) {
    i !== props.navigations.length - 1
      ? breadCrumbs.push(
          <>
            <Link to={crumbsLinks[i]}>{props.navigations[i]}</Link>
            <span> / </span>
          </>
        )
      : breadCrumbs.push(
          <>
            <Link to={crumbsLinks[i]}>{props.navigations[i]}</Link>
          </>
        );
  }

  return <BreadCrumbsContainer color={props.color}>{breadCrumbs}</BreadCrumbsContainer>;
}

export default Breadcrumbs;

const BreadCrumbsContainer = styled.div`  
  * {
    display: inline;
  }

  a {
    text-decoration: none;
    color: ${props => props.color ? props.color : "var(--color-darkblue)"};
  }
`;
