import React, { Component } from "react";
import Galeri from "./pages/Galeri";
import GlobalStyle from "./globalStyle";
import Footer from "./components/Footer";
import Test1 from "./pages/test1";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Navbar/>
          <Test1/>
        <Footer />
      </Router>
    );
  }
}

export default App;
