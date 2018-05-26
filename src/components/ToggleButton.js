import React, { Component } from 'react';

class ToggleButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClickHandler}>
        {this.props.label}
      </button>
    );
  }
}

export default ToggleButton;