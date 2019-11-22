import React from "react";
import LoginWindow from "./LoginWindow";
import RenderWindow from "./RenderWindow";
import Nav from "../components/NavigationBar";
import "../styleSheets/App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            showLink: true,
            whichMessage: true,
            showAllNav: false
        };
    }

    handleAllNav = event => {
        this.setState({ showAllNav: event });
    };
    handleLoggedIn = event => {
        this.setState({ isLoggedIn: event }, () => {
            return <Route to='/renderWindow' />;
            // return <RenderWindow />;
        });
    };

    handleWhichMessage = () => {
        this.setState({ whichMessage: false });
    };

    render() {
        if (this.state.isLoggedIn) {
            return <Redirect to='/renderWindow' />;
        }

        return (
            <div>
                <Nav className='nav_bar' handleAllNav={this.handleAllNav} />
                <Router>
                    <div className='home_link'>
                        <Link
                            className='link_text'
                            to='/login'
                            onClick={this.handleWhichMessage}>
                            {this.state.whichMessage
                                ? "Welcome, click to login"
                                : "Please enter your credentials below"}
                        </Link>
                    </div>

                    <Switch>
                        <Route path='/login'>
                            <LoginWindow handleLoggedIn={this.handleLoggedIn} />
                        </Route>
                        <Route path='/renderWindow'>
                            <RenderWindow />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
