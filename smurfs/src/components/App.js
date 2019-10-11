import React, { Component } from "react";
import "./App.css";
import Form from './Form'
import Smurfs from "./Smurfs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Smurfs />
      </div>
    );
  }
}

export default App;
