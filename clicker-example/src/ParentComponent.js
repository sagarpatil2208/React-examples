import React, { Component } from "react";
import ButtonComponent from "./Component/Button/ButtonComponent";
import DisplayComponent from "./Component/Display/DisplayComponent";
class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  // change code below this line

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <div>
        <div>
          <DisplayComponent count={this.state.count} />
        </div>
        <div className="arrangebutton">
          <ButtonComponent
            color="green"
            onclick={this.increment}
            icon="./plus.png"
          />
          <ButtonComponent
            color="orange"
            onclick={this.reset}
            icon="./reset.png"
          />
          <ButtonComponent
            color="red"
            onclick={this.decrement}
            icon="./minus.png"
          />
        </div>
      </div>
    );
  }
}

export default ParentComponent;
