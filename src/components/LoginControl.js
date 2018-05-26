import * as React from "react";
import ToggleButton from "./ToggleButton";
import Greeting from "./Greeting";

class LoginControl extends React.Component{
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {

    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} name={"Xiaopei"}/>
        <ToggleButton onClickHandler={this.state.isLoggedIn ? this.handleLogoutClick : this.handleLoginClick} label={this.state.isLoggedIn ? "Logout": "login"} />
      </div>
    );
  }

}
export default LoginControl;