import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Home from "./pages/home";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { PrivateRoute } from "./components/PrivateRoute";
import NotFound from "./components/base/NotFound";
import { authenticationService } from "./_services/authentication.service";
import { routes } from "./routes";

class App extends Component {
  
  state = { 
    currentUser: null, 
    items: [] 
  };

  componentDidMount() {
    authenticationService.currentUser.subscribe((x) =>
      this.setState({ currentUser: x })
    );
  }

  render() {
    const { currentUser, items } = this.state;
    return (
      <>
        <Router>
          <Header currentUser={currentUser} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/admin">
              <Dashboard>
                <Switch>
                  {routes &&
                    routes.map((module, idx) => (
                      <PrivateRoute
                        key={idx}
                        path={module.path}
                        component={module.component}
                        exact={module.exact}
                      />
                    ))}
                </Switch>
              </Dashboard>
            </PrivateRoute>
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
