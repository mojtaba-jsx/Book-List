import React, { Component } from 'react'
import './AddForm.css'
class AddForm extends Component {
  render() {
    return (
      <div className='addform'>
        <form className='form'>
          <label>عنوان کتاب</label>
          <input type="text" />
          <label>نویسنده</label>
          <input type="text" />
          <label>سال انتشار</label>
          <input type="text" />
          <button>اضافه کردن کتاب</button>
        </form>
      </div>
    )
  }
}

export default  AddForm
