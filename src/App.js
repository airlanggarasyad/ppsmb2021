import React, { Component, useState, useEffect } from "react";
import GlobalStyle from "./globalStyle";
import Routes from "./Routes/Routes";
import Footer from "./components/Footer";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./Routes/ScrollToTop";
import ScrollTop from "./components/ScrollTop";
import Announce from "./components/Announce";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Router>
          <ComponentHandler />
        </Router>
      </div>
    );
  }
}

export default App;

function ComponentHandler() {
  const location = useLocation();
  const [pathname, setPathname] = useState();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  return (
    <>
      {pathname !== "/kembaraloka" ? (
        <div>
          <Navbar />
          <ScrollToTop />
          <Routes />
          <Announce />
          <ScrollTop />
          <Footer />
        </div>
      ) : (
        <div>
          <Routes />
        </div>
      )}
    </>
  );
}
