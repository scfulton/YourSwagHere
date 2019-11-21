import React from "react";
import LoginWindow from "./components/LoginWindow";
import RenderWindow from "./components/RenderWindow";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    handleLoggedIn = event => {
        this.setState({ isLoggedIn: event }, () => {
            return <RenderWindow />;
        });
    };

    render() {
        return (
            <Router>
                <div className="home_link">
                    <Link to="/login">Welcome, please log in</Link>
                </div>

                <Switch>
                    <Route path="/login">
                        <LoginWindow handleLoggedIn={this.handleLoggedIn} />
                    </Route>
                    <Route path="/renderWindow">
                        <RenderWindow />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
