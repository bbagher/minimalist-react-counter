import React, { Component, useState } from "react";
import "./styles.css";

// const Button = () => {
//   const [ counter, setCounter ] = useState(0);

//   return (
// <div class="btn">
//   <p>You have clicked {counter} times!</p>
//   <button onClick={() => setCounter(counter + 1)}>Add</button>
//   <button onClick={() => setCounter(counter - 1)}>Subtract</button>
//   <button onClick={() => setCounter(0)}>Reset</button>
// </div>
//   )
// }

class Button extends Component {
  state = { count: 0 };

  handleIncrease = () => {
    if(this.state.count < 10) 
    this.setState({count: this.state.count + 1}) 
    else
    this.setState({count: this.state.count + 2})
  }

  render() {
    return (
      <div class="btn">
        <p>You have clicked {this.state.count} times!</p>
        <button onClick={this.handleIncrease}>
          Add
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Subtract
        </button>
        <button onClick={() => this.setState({ count: 0 })}>Reset</button>
      </div>
    );
  }
}

const App = () => (
  <>
    <div class="intro">Hello World!</div>
    <Button />
  </>
);

export default App;
