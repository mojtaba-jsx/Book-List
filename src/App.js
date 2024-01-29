import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import AddForm from "./AddForm/AddForm";
import Book from "./Book/Book";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddForm />
        <div className="container">
          <div className="book-list">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
