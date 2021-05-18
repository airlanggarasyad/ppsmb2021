import React, { Component } from "react";
import GlobalStyle from "./globalStyle";
import Routes from './Routes/Routes'
import Footer from "./components/Footer";
import { BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Routes/>
        <Footer />
      </Router>
    );
  }
}

export default App;
