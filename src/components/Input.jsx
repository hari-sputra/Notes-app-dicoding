import React, { Component } from "react";

class FormInput extends Component {
  render() {
    return (
      <div className="form-control w-full mb-4">
        <input
          placeholder={this.props.placeholder}
          className="input input-bordered input-primary w-full"
          onChange={this.props.onChange}
          value={this.props.value}
        />
        <span>{this.props.character}</span>
      </div>
    );
  }
}

export default FormInput;
