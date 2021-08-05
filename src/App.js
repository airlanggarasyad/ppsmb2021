import React, { Component, useState, useEffect } from "react";
import GlobalStyle from "./globalStyle";
import Routes from "./Routes/Routes";
import Footer from "./components/Footer";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./Routes/ScrollToTop";
import ScrollTop from "./components/ScrollTop";
import TawkTo from "./components/TawkTo"
import Announce from "./components/Announce";

const tawkToPropertyId = "60f0f124d6e7610a49ab832e";  
const tawkToKey = "5fda6c5c0ca68dbfb7b8881c9de9369f47e9a61d";

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

function ComponentHandler(){
  const location = useLocation();
  const [pathname, setPathname] = useState();

  useEffect(() => {
    setPathname(location.pathname)
  }, [location.pathname])

  return (
    <>
      {pathname !== "/2021/kembaraloka" ?
        <div>
          <Navbar />
          <ScrollToTop />
          <Routes />
          <Announce/>
          <ScrollTop />
          <Footer />
        </div>
        :
        <div>
          <Routes />
        </div>
      }
    </>
  )
}
