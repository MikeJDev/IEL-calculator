import React, { Component } from 'react'

export default class Keypad extends Component {
  //this component can certainly be refactored to have less code. If time at end will start refactoring
  //the this.props.onClick coresponds to a function passed down from the app component. This component uses the name of the button to work
  //this seems more efficent to me than writing a different function for every button. 

  //did not have time to style

  //this component could also be refactored to a functional component given more time.

  render() {
    return (
      <div className='buttons'>
        <div>
          <button name='C' onClick={e => this.props.onClick(e.target.name)}>C</button>
          <button name='%' onClick={e => this.props.onClick(e.target.name)}>%</button>
          <button name='/' onClick={e => this.props.onClick(e.target.name)}>/</button>
          <button name='.' onClick={e => this.props.onClick(e.target.name)}>.</button>
        </div>

        <br />

        <div>
          <button name='7' onClick={e => this.props.onClick(e.target.name)}>7</button>
          <button name='8' onClick={e => this.props.onClick(e.target.name)}>8</button>
          <button name='9' onClick={e => this.props.onClick(e.target.name)}>9</button>
          <button name='x' onClick={e => this.props.onClick(e.target.name)}>x</button>
        </div>

        <br />

        <div>
          <button name='4' onClick={e => this.props.onClick(e.target.name)}>4</button>
          <button name='5' onClick={e => this.props.onClick(e.target.name)}>6</button>
          <button name='6' onClick={e => this.props.onClick(e.target.name)}>6</button>
          <button name='-' onClick={e => this.props.onClick(e.target.name)}>-</button>
        </div>

        <br />

        <div>
          <button name='1' onClick={e => this.props.onClick(e.target.name)}>1</button>
          <button name='2' onClick={e => this.props.onClick(e.target.name)}>2</button>
          <button name='3' onClick={e => this.props.onClick(e.target.name)}>3</button>
          <button name='+' onClick={e => this.props.onClick(e.target.name)}>+</button>
        </div>

        <br />

        <div>
          <button name='0' onClick={e => this.props.onClick(e.target.name)}>0</button>
          <button name='=' onClick={e => this.props.onClick(e.target.name)}>=</button>
        </div>

      </div >
    )
  }
}
