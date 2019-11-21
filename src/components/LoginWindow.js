import React from "react";
import validator from 'validator';

class LoginWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      isValidPw: false,
      isValidName: false,
      sessionToken: ""
    };
  }

  handleNameChange = event => {
    this.setState({ userName: event.target.value }, this.checkName());
  };

  checkName() {
    const setBool = validator.isEmail(this.state.userName);
    if (setBool === true) {
       this.setState({ isValidName: setBool });
    }
  }

  handlePwChange = event => {
    this.setState({ password: event.target.value }, ()=> {this.checkPassword()});
  };

  checkPassword() {
      const setBool = validator.matches(this.state.password, /1234/)
    if (setBool === true) {
      this.setState({ isValidPw: setBool });
    }
  }

  handleSubmit = (props) => {
    if (this.state.isValidName === true) {
      if (this.state.isValidPw === true) {
        alert("valid");
        this.props.handleShowDash();
        //request session id
      } else {
        alert("pw invalid");
      }
    } else {
      alert("login invalid");
    }
  };

  render() {
    return (
      <div>
        <form name="LoginForm" onSubmit={this.handleSubmit}>
          <div>Login name:</div>
          <input
            type="email"
            onChange={this.handleNameChange}
            autoFocus={true}
          />
          <br />
          <div>Password:</div>
          <input type="password" onChange={this.handlePwChange} />
          <br />
          <input type="submit" value="Submit" />
          {/* <input type="range" min=  "0" max="10" step="1"/> */}
        </form>
      </div>
    );
  }
}

export default LoginWindow;
