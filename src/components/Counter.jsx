import React, { Component } from "react";
import Button from "./Button";

export default class Counter extends Component {
  state = { count: 0 }

  increase = () => {
    this.setState({ count: ++this.state.count });
  }

decrease = () => {
    this.setState({ count: --this.state.count });
  }

  render() {

    return (
      <div className="card">
        <h1>{this.state.count}</h1>
        <Button buton={this.increase}  buton1={this.decrease} />
        
      </div>
    );
  }
}
