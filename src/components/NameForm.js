import * as React from "react";
import Greeting from "./Greeting";
import EssayForm from "./EssayForm";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Xiaopei Xu",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.name);
    if (!this.props.isLoggedIn) {
      if (this.state.password === 'xxx' && this.state.name === 'Xiaopei Xu' ){
        this.props.login();
      } else {
        alert('Incorrect name/password');
      }
    } else {
      this.props.logout();
    }

    this.setState({
      password: ""
    });

    event.preventDefault();
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;
    let loginForm = null;
    let greetingMessage = <Greeting isLoggedIn={this.props.isLoggedIn} name={"Xiaopei"}/>;

    if (isLoggedIn) {
      loginForm = (
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Logout" />
        </form>
      )
    } else {
      loginForm = (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
          </label>
          <label>
            Password:
            <input type="text" value={this.state.password} name="password" onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }


    return (
      <div>
        {greetingMessage}
        {loginForm}
      </div>

    )
  }
}

export default NameForm;