import React, { Component } from "react";
import "./AddForm.css";
import Book from "../Book/Book";
class AddForm extends Component {
  constructor() {
    super();
    this.state = {
      books: [1,2],
      title: "",
      author: "",
      year: "",
    };

    this.titleHandler = this.titleHandler.bind(this);
    this.authorHandler = this.authorHandler.bind(this);
    this.yearHandler = this.yearHandler.bind(this);
    this.submitHandler=this.submitHandler.bind(this)
  }



  titleHandler(event){
    this.setState({
      title:event.target.value
    })
  }


  authorHandler(event){
    this.setState({
      author:event.target.value
    })
  }


  yearHandler(event){
    this.setState({
      year:event.target.value
    })
  }

  submitHandler(event){
    event.preventDefault()
  }

  render() {
    return (
      <div className="addform">
        <form className="form" onSubmit={this.submitHandler}>
          <label>عنوان کتاب</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.titleHandler}
          />
          <label>نویسنده</label>
          <input
            type="text"
            value={this.state.author}
            onChange={this.authorHandler}
          />
          <label>سال انتشار</label>
          <input
            type="text"
            value={this.state.year}
            onChange={this.yearHandler}
          />
          <button >اضافه کردن کتاب</button>
        </form>
        <div className="book-list">
          {
            this.state.books.map((book)=>(
              <Book title={book.title} author={book.author} year={book.year} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default AddForm;
