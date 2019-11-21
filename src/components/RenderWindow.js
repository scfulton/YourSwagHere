import React from "react";
import LoginWindow from "./LoginWindow";
import ListWindow from "./ListWindow";
import Dashboard from "./Dashboard";
import Nav from "./NavigationBar";
import "../styleSheets/NavigationBar.css";
import "../styleSheets/App.css";
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

    render() {
        return (
            <Router>
                <div>
                    <Nav className='nav_bar' />
                    <Route path='/listwindow' exact Component={ListWindow} />
                    <Route path='/dashboard' exact Component={Dashboard} />
                </div>

                <switch>
                    <Route path='/Dashboard'>
                        <Dashboard />
                    </Route>
                </switch>
            </Router>
        );
    }
}

export default RenderWindow;
