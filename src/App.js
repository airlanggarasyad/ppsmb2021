import React, { Component } from "react";
import GlobalStyle from "./globalStyle";
import Routes from "./Routes/Routes";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./Routes/ScrollToTop";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Router>
          <Navbar />
          <ScrollToTop />
          <Routes />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
