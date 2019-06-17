import React, { Component } from 'react'

export default class Result extends Component {
  render() {
    return (
      <div>
        <p>{this.props.answer}</p>
      </div>
    )
  }
}

//this component can be refactored to a functional component. Originally thought I was going to need to store state
//in this component. Will refactor if time allows.


