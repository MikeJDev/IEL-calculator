import React, { Component } from 'react'

export default class Keypad extends Component {
  //this component can certainly be refactored to have less code. If time at end will start refactoring
  //the this.props.onClick coresponds to a function passed down from the app component. This component uses the name of the button to work
  //this seems more efficent to me than writing a different function for every button. 

  //did not have time to style

  //this component could also be refactored to a functional component given more time.

  render() {
    const names = ['C', '%', '/', '.', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '=']
    const buttons = names.map((i, x) =>
      <span>
        <button key={x} name={i} onClick={e => this.props.onClick(e.target.name)}>{i}</button>
      </span>
    )
    const formatted = buttons.map((j, k) => {
      //puts a break at every 4th key
      (((k + 1) % 5 === 0) ? buttons.splice(k, 0, <br />) : null);
      //puts a break at the last 2 keys
      ((k === 16) ? buttons.splice(19, 0, <br />) : null)
    })

    return (
      <div> {buttons}</div >
    )
  }
}
