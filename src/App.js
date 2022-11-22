import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News pageSize={8} />
      </div>
    );
  }
}
