import React from "react";
import Keypad from './components/Keypad'
import Result from './components/Result'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: ""
    }
  }


  //currently there are no functions for the '/' and % buttons and the multiply button does not work at the moment. 

  onClick = (button) => {
    //testing if the buttons show up
    console.log(button)

    if (button === "=") {
      //run a calculate function
      this.computeAnswer()
    }

    else if (button === "C") {
      //run a function to clear the answer
      this.clear()
    }

    else {
      this.setState({
        answer: this.state.answer + button
      })
    }
  };

  computeAnswer = () => {
    //need to add error handling, example: the multiply button does not work and no way to handle that.
    this.setState({
      answer: (eval(this.state.answer) || "") + ""
    })
  }

  clear = () => {
    this.setState({
      answer: ""
    })
  };

  render() {
    return (
      <div>
        <h1>Mike Janes IEL Calculator</h1>
        <Result answer={this.state.answer} />
        <Keypad onClick={this.onClick} />
      </div>
    );
  }
}


export default App;
