import React, { Component } from "react";
import Routes from "./Routes";

import "./assets/scss/main.scss";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
