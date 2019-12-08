import React from "react";
import Dashboard from "./Dashboard";
import "../styleSheets/NavigationBar.css";
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
                <nav className="nav_bar">
                    <h3>
                        <img
                            className="App-logo"
                            src="logoImg2.png"
                            alt="logo here"
                        />
                    </h3>
                    <ul className="nav_links">
                        <li>
                            <Link to="/store" className="link_text">
                                Store
                            </Link>
                        </li>
                        <li>
                            <Link to="/protected" className="link_text">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <AuthButton className="link_text" />
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/store">
                        <PublicPage />
                    </Route>
                    <Route path="/login">
                        {/* <LoginWindow /> */}
                        <LoginPage />
                    </Route>
                    <PrivateRoute path="/protected">
                        <Dashboard />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

function AuthButton() {
    let history = useHistory();

    return fakeAuth.isAuthenticated ? (
        <div>
            Welcome!
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/"));
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
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

function LoginPage() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };

    return (
        <div>
            <p>You must log in to view the dashboard.</p>
            <button onClick={login}>Log in</button>
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

function PublicPage() {
    return <h3>Store Page</h3>;
}

export default NavigationBar;
