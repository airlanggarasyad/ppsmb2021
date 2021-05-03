import React, { Component } from "react";
import ComingSoon from "./pages/ComingSoon";
import Informasi from "./pages/Informasi";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/" component={ComingSoon} />
            <Route path="/informasi" component={Informasi} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
