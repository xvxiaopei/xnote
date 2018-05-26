import * as React from "react";
import NameForm from "./NameForm";
import EssayForm from "./EssayForm";
import TemperatureForm from "./TemperatureForm";
import * as ProductManager from "./ProductManager";
import FancyBorder from "./FancyBorder";

class Xnote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  }

  handleLogin() {
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false
    });
  }

  render() {
    return (
      <div>
        <div>
          <NameForm isLoggedIn={this.state.isLoggedIn} login={this.handleLogin} logout={this.handleLogout}/>
          {this.state.isLoggedIn? <EssayForm/> : null}
          {this.state.isLoggedIn? <TemperatureForm/> : null}
        </div>
        <div>
          {this.state.isLoggedIn? <ProductManager.ProductManager  products={ProductManager.PRODUCTS}/> : null}
        </div>
      </div>
    );
  }

}
export default Xnote;