import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Home from "./pages/home";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/dashboard/profile";
import Settings from "./pages/dashboard/settings";
import Events from "./pages/dashboard/events";
import { PrivateRoute } from "./components/PrivateRoute";
import NotFound from "./components/NotFound";
import { authenticationService } from "./_services/authentication.service";

class App extends Component {
  state = { currentUser: null };

  componentDidMount() {
    authenticationService.currentUser.subscribe((x) =>
      this.setState({ currentUser: x })
    );
  }

  render() {
    const { currentUser } = this.state;
    return (
      <>
        <Router>
          <Header currentUser={currentUser} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/admin" component={Dashboard}>
              <Dashboard>
                <Switch>
                  {/* <PrivateRoute path="/dashboard/profile" component={Profile} />
                  <PrivateRoute path="/dashboard/events" component={Events} />
                  <PrivateRoute
                    path="/dashboard/settings"
                    component={Settings}
                  /> */}
                  <PrivateRoute path="/admin/*" component={Profile} />
                </Switch>
              </Dashboard>
            </PrivateRoute>
            <Route path="*" component={NotFound} />
          </Switch>

          {/* <div className="text-xs sm:text-sm bg-gray-200 text-semibold p-5">
            @ 2021 - Charitable Crowdfunding. All rights reserved
          </div> */}
        </Router>
      </>
    );
  }
}

export default App;
