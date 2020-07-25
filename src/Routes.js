import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

// import "./scss/main.scss";
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default Routes;
