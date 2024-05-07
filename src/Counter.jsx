import React, { Component } from "react";
import "./styles.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleInc = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDec = () => {
    if (this.state.count > 0) {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleInc}>Increase</button>
        <button onClick={this.handleDec}>Decrease</button>
      </div>
    );
  }
}

export default Counter;
