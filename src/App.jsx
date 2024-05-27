import React, { Component } from 'react';

export class App extends Component {

  constructor(props) {
    super(props); // Call the constructor of the parent class

    // set the initial state
    this.state = {
      counter: 0
    }
  }

  handleIncrement = () => {
    
    this.setState({
      counter: this.state.counter + 1
    });
  }
  handleDecrement = () => {
    if(this.state.counter !=0){
    this.setState({
      counter: this.state.counter - 1
    });}
  }
  render() {

    console.log(this.state);

    return (
      <div>
        <p>Count: {this.state.counter}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    )
  }
}

export default App;