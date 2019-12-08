import React from "react";
import LoginWindow from "./LoginWindow";
import RenderWindow from "./RenderWindow";
import Nav from "../components/NavigationBar";
import UploadWindow from "../components/UploadWindow";
import "../styleSheets/App.css";
import ImageUpload from "../components/ImageUpload";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Dashboard from "./Dashboard";

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
        this.setState(
            { isLoggedIn: event }
            // , () => {
            // // return <Route to='/renderWindow' />;
            // return <RenderWindow />;
            // }
        );
    };

    handleWhichMessage = () => {
        this.setState({ whichMessage: false });
    };

    requireAuth = (nextState, replace) => {
        if (!this.state.isLoggedIn) {
            replace({
                pathname: "/login"
            });
            console.log("replaced");
        }
    };

    whichToReturn = props => {
        if (this.state.isLoggedIn) {
            return <RenderWindow />;
        } else {
            return <LoginWindow handleLoggedIn={this.state.handleLoggedIn} />;
        }
    };

    render() {
        return (
            <div>
                {/* <Nav className='nav_bar' handleAllNav={this.handleAllNav} /> */}
                {this.whichToReturn()}
                {/* <Router>
                    <div className='home_link'>
                        <Link
                            className='link_text'
                            to='/login'
                            onClick={this.handleWhichMessage}>
                            {this.state.whichMessage
                                ? "Welcome: click here to login"
                                : "Please enter your credentials below"}
                        </Link>
                    </div>
                    <Switch>
                        <Route path='/login'>
                            <LoginWindow handleLoggedIn={this.handleLoggedIn} />

                            <Route
                                path='dashboard'
                                component={Dashboard}
                                onEnter={this.requireAuth}
                            />

                            <Route exact path='/imageUpload'>
                                <ImageUpload />
                            </Route>
                        </Route>
                    </Switch>
                </Router> */}
                {/*/////below is for func at bottom////*/}
                {/* <WhichToRender
                    props={this.state.isLoggedIn}
                    handleLoggedIn={this.handleLoggedIn}
                /> */}
            </div>
        );
    }
}

// function whichToReturn(props) {
//     if (props) {
//         return <RenderWindow />;
//     } else {
//         return <LoginWindow handleLoggedIn={this.state.handleLoggedIn} />;
//     }
// }

export default App;
