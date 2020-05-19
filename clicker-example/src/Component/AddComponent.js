import React, { Component } from "react";

class AddComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementC() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <div> Counter- {this.state.count}</div>
      </div>
    );
  }
}

export default AddComponent;
