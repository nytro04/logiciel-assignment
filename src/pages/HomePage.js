import React, { Component } from "react";
import ParentForm from "../components/forms/ParentForm";
import NewForm from "../components/forms/NewForm";

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <ParentForm /> */}
        <NewForm />
      </React.Fragment>
    );
  }
}

export default Homepage;
