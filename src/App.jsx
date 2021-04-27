import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Register from "./pages/register";
import CreateFundraiser from "./pages/fundraiser";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/dashboard/profile";
import Settings from "./pages/dashboard/settings";
import Events from "./pages/dashboard/events";
import { history } from "./_helpers/history";
import { PrivateRoute } from "./components/PrivateRoute";
import { authenticationService } from "./_services/authentication.service";

const App = () => {
  const [currentUser, setCurrentUser] = React.useState(null);
  React.useEffect(() => {
    // authenticationService.currentUser.subscribe((x) =>
    //   setCurrentUser({ currentUser: x })
    // );
  });

  return (
    <>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute
            path="/create-fundraiser"
            component={CreateFundraiser}
          />
          <PrivateRoute path="/dashboard">
            <Dashboard>
              <Switch>
                <PrivateRoute path="/dashboard/profile" component={Profile} />
                <PrivateRoute path="/dashboard/events" component={Events} />
                <PrivateRoute path="/dashboard/settings" component={Settings} />
              </Switch>
            </Dashboard>
          </PrivateRoute>
        </Switch>

        <div className="text-xs sm:text-sm bg-gray-200 text-semibold p-5">
          @ 2021 - Charitable Crowdfunding. All rights reserved
        </div>
      </Router>
    </>
  );
};

export default App;
