import React from "react";
import { Route, Redirect } from "react-router-dom";
import {authenticationService} from "../_services/authentication.service";

const token = authenticationService.getToken();
const user = authenticationService.currentUser

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !user ? (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);
