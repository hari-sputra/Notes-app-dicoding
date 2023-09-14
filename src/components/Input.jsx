import React, { Component } from "react";

class FormInput extends Component {
  render() {
    return (
      <div className="form-control w-full mb-4">
        <label className="label">
          <span className="label-text">{this.props.label}</span>
        </label>
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          className="input input-bordered input-primary w-full"
        />
        <span>{this.props.character}</span>
      </div>
    );
  }
}

export default FormInput;
