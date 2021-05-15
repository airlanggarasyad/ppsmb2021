import React, { Component } from "react";
import Galeri from './pages/Galeri'
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/" component={Galeri} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
