import React, { Component } from "react";
import GlobalStyle from "./globalStyle";
import Routes from "./Routes/Routes";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./Routes/ScrollToTop"

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <Navbar />
          <ScrollToTop />
          <Routes />
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
