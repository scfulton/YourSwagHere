import React from "react";
import Dashboard from "./Dashboard";
import StorePage from "./StorePage";
import "../styleSheets/NavigationBar.css";
import KLoggins from "./Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
function NavigationBar(props) {
    return (
        <Router>
            <div>
                {/* <div className=""> */}
                <h1 className="header">
                    <div className="logo_box">
                        <img
                            className="App-logo"
                            src="logoImg2.png"
                            alt="logo here"
                        />
                    </div>
                    <div className="headerTitle">Your SWAG Here</div>
                </h1>
                {/* </div> */}
                <nav className="nav_bar">
                    <ul className="nav_links">
                        <li className="ListChild">
                            <Link to="/store" className="link_text">
                                Store
                            </Link>
                        </li>
                        <li className="ListChild">
                            <Link to="/loadImage" className="link_text">
                                LoadImage
                            </Link>
                        </li>
                        <li className="loggedIn">
                            <AuthButton
                                className="login_text"
                                afterIsAuthed={props.afterIsAuthed}
                                // afterSignOut={props.afterSignOut}
                            />
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/store">
                        <StorePage
                            isAuthed={props.isAuthed}
                            logo={props.logo}
                            isRectangleUploaded={props.isRectangleUploaded}
                            isRectrangle={props.isRectrangle}
                        />
                        {/* <PublicPage /> */}
                    </Route>
                    <Route path="/login">
                        {/* <LoginWindow /> */}
                        <LoginPage afterIsAuthed={props.afterIsAuthed} />
                    </Route>
                    <PrivateRoute path="/loadImage">
                        <Dashboard
                            isRectangleUploaded={props.isRectangleUploaded}
                            isRectangle={props.isRectangle}
                            afterImgUpload={props.afterImgUpload}
                        />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

function AuthButton(props) {
    let history = useHistory();

    return fakeAuth.isAuthenticated ? (
        <div className="welcomeBox">
            <div>Welcome!</div>
            <button
                className="button"
                onClick={() => {
                    fakeAuth.signout(props, () => history.push("/"));
                }}>
                Sign out
            </button>
        </div>
    ) : (
        <div>You are not logged in.</div>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(props, cb) {
        fakeAuth.isAuthenticated = true;
        props.afterIsAuthed(true);
        setTimeout(cb, 100); // fake async
    },
    signout(props, cb) {
        fakeAuth.isAuthenticated = false;
        props.afterIsAuthed(false);
        // props.afterSignOut(true);
        setTimeout(cb, 100);
    }
};

function LoginPage(props) {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(props, () => {
            history.replace(from);
        });
    };

    return (
        <div className="LoginButtonThings">
            <br />
            <p>You must log in to view the dashboard.</p>
            <button className="button" onClick={login}>
                Log in
            </button>
        </div>
    );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default NavigationBar;
