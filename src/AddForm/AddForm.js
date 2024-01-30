import React, { Component } from "react";
import "./AddForm.css";
import Book from "../Book/Book";
class AddForm extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
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

    let{title,author,year} = {...this.state}
    if(title && author && year){
      let newBook ={
        id:this.state.books.length+1,
        title,
        author,
        year,
      }
      this.setState({
        books:[...this.state.books,newBook]
      })
      
      this.setState({
        title:'',
        author:'',
        year:''
      })
    }
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
              <Book {...book} key={book.id}/>
            ))
          }
        </div>
      </div>
    );
  }
}

export default AddForm;
