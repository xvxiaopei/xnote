import React, { Component } from 'react';

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
          date: new Date()
        };
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
    }

    render() {
        const isLoggedIn = this.props.isLoggedIn;
        let greetingMessage = null;
        if (isLoggedIn) {
          greetingMessage = <p>Welcome back {this.props.name}</p>;
        } else {
          greetingMessage = <p>Hello, please login.</p>;
        }

        return (
          <div>
            {greetingMessage}
            <p>It's {this.state.date.toLocaleTimeString()}.</p>
          </div>
        );
    }
}

export default Greeting;