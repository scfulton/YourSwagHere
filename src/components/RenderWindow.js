import React from "react";
import LoginWindow from "./LoginWindow";
import ListWindow from "./ListWindow";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class RenderWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      showDash: false,
      validSession: false
    };
  }

  handleShowDash = () => {
    this.setState({ showDash: true }, () => this.renderDash);
  };

  handleLogIn = () => {
      this.setState({validSession : true}, ()=> this.handleShowDash)
  }

  renderDash = () => {
    const isLoggedIn = this.state.validSession;
    if (isLoggedIn) {
      return <Dashboard />;
    }
  };
  render() {
    return (
      <Router>
        <div>
          <LoginWindow handleLogIn = {this.handleLogIn}/>

          <switch>
            <Route path="/Dashboard">
              <Dashboard />
            </Route>
          </switch>
        </div>
      </Router>
    );
  }
}

export default RenderWindow;
