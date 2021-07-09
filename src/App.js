import React, { Component } from "react";
import GlobalStyle from "./globalStyle";
import Routes from "./Routes/Routes";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Navbar />
        <Router>
          <Routes />
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
