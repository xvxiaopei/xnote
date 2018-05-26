import * as React from "react";

class FancyBorder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'FancyBorder FancyBorder-' + this.props.color}>
        {this.props.children}
      </div>
    );
  }
}
export default FancyBorder