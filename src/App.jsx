import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";
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

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/create-fundraiser" component={CreateFundraiser} />
          <Route path="/dashboard">
            <Dashboard>
              <Switch>
                <Route path="/dashboard/profile" component={Profile} />
                <Route path="/dashboard/events" component={Events} />
                <Route path="/dashboard/settings" component={Settings} />
              </Switch>
            </Dashboard>
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
