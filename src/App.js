import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import AddForm from "./AddForm/AddForm";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddForm />
        <div className="container">

        </div>
      </div>
    );
  }
}

export default App;
