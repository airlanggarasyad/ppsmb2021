import React, { Component } from "react";
import Galeri from "./pages/Galeri";
import GlobalStyle from "./globalStyle";
import Footer from "./components/Footer";
import test1 from "./pages/test1";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Galeri} />
          <Route exact path="/test1" component={test1}></Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
