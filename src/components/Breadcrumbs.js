import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Breadcrumbs(props) {
  /// What need to passed:
  /// 1. List of navigation in 'navigations' props. This should match the level of depth in navigation
  /// eg. the url is ppsmb.ugm.ac.id/agenda/hari1
  /// then the navigations props are ["Beranda", "Agenda", "Hari 1"]
  /// this will be rendered as "Beranda / Agenda / Hari 1"
  /// 2. Color of Navigation Text in 'color' props
  /// 3. Color of Slash in 'slashColor' props

  // Get the current URL
  const history = useHistory();
  console.log(history);
  const location = history.location;

  // Function to generate each Link for navigation
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

  // Get the current link
  const crumbsLinks = crumbsLinkGenerator(location);
  console.log(crumbsLinks);
  console.log(crumbsLinks[crumbsLinks.length - 2]);

  // Creating the Link Component for each navigation
  const breadCrumbs = [];
  for (let i = 0; i < crumbsLinks.length; i++) {
    i !== crumbsLinks.length - 1
      ? breadCrumbs.push(
          <>
            <Link key={i} to={crumbsLinks[i]}>
              {props.navigations[i]}
            </Link>
            <span> / </span>
          </>
        )
      : breadCrumbs.push(
          <>
            <Link key={i} to={crumbsLinks[i]}>
              {props.navigations[i]}
            </Link>
          </>
        );
  }

  return (
    <BreadCrumbsContainer key={location.pathname} color={props.color}>
      <div className="back-button">
        <Link style={{ textDecoration: 'none' }} to={crumbsLinks[crumbsLinks.length - 2]}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </div>
      {breadCrumbs}
    </BreadCrumbsContainer>
  );
}

export default Breadcrumbs;

const BreadCrumbsContainer = styled.div`
  font-size: calc(0.5rem + 1.6vmin);

  * {
    display: inline;
  }

  p {
    color: ${(props) =>
      props.slashColor ? props.slashColor : "var(--color-darkblue)"};
  }

  a {
    text-decoration: none;
    color: ${(props) => (props.color ? props.color : "var(--color-darkblue)")};
  }

  .back-button {
    cursor: pointer;
    margin-right: 5px;
  }
`;
