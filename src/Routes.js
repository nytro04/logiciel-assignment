import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";

class Routes extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" Component={Homepage} />
        </Switch>
      </>
    );
  }
}

export default Routes;
