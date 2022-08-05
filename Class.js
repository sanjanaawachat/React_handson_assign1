
import React, { Component } from 'react'
import './Functional';

export default class Class extends Component {
  render() {
    return (
      <div>
      <div className='Class'>
      <p className='Second_card'> This is created using functional component</p>
      <p>This is done using external css</p>
       <p style={{color:'blue'}}>This is done using internal css</p>
      </div>
      </div>
    )
  }
}
