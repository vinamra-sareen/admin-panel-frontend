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
import { getModules } from "./_services/admin";
import Module from "./pages/dashboard/module";
import UserBankDetailsReport from "./pages/dashboard/admin_compliance/user_bank_details_report";

class App extends Component {
  state = { currentUser: null, items: [] };

  componentDidMount() {
    authenticationService.currentUser.subscribe((x) =>
      this.setState({ currentUser: x })
    );

    getModules()
      .then((res) => {
        if (res.status === 200) {
          let items = [];
          res.data.modules.map((module) => {
            items.push({
              text: module.navigation_name,
              route: `${module.module_link}?module_id=${module.module_id}`,
            });
          });
          this.setState({ items });
        } else {
          console.error("Oops ... Something went wrong");
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { currentUser, items } = this.state;
    return (
      <>
        <Router>
          <Header currentUser={currentUser} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/admin">
              <Dashboard>
                <Switch>
                  <PrivateRoute
                    path={"/admin/business_report"}
                    component={Module}
                  />
                  <PrivateRoute path={"/admin/user"} component={Module} />
                  <PrivateRoute
                    path={"/admin/admin_compliance/getBankDetailReport"}
                    component={UserBankDetailsReport}
                  />
                  <PrivateRoute
                    path={"/admin/admin_compliance"}
                    component={Module}
                  />
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
