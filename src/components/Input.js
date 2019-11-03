import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    return (
      <div class="input">
        <label for={this.props.name}>{this.props.label}</label>
        <input
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default Input;
