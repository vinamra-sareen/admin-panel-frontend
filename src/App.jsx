import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>

        <div className="text-xs sm:text-sm bg-gray-200 text-semibold p-5">
          @ 2021 - Charitable Crowdfunding. All rights reserved
        </div>
      </Router>
    </>
  );
};

export default App;
