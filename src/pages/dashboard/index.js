import * as React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import Welcome from "./welcome";
import { PrivateRoute } from "../../components/PrivateRoute";
import UserBankDetailsReport from "./admin_compliance/user_bank_details_report";
import { getModules } from "../../_services/admin";
// import { Button } from "@progress/kendo-react-buttons";

let items = [
  {
    text: "Welcome",
    icon: "k-i-home",
    route: "/admin",
  },
  // {
  //   text: "Admin Compliance",
  //   route: "/admin/admin_compliance",
  // },
];

class DrawerRouterContainer extends React.Component {
  state = { expanded: true, items: [] };

  handleClick = () => {
    this.setState((e) => ({ expanded: !e.expanded }));
  };

  onSelect = (e) => {
    this.setState({ expanded: true });
    console.log("eee: ", e.itemTarget.props.route, " props: ", this.props);
    this.props.history.push(e.itemTarget.props.route);
  };

  setSelectedItem = (pathName) => {
    let currentPath = items.find((item) => item.route.split("?")[0] === pathName);
    console.log(currentPath);
    if (currentPath.text) {
      return currentPath.text;
    }
  };

  componentDidMount() {
    getModules()
      .then((res) => {
        if (res.status === 200) {
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
    let selected = this.setSelectedItem(this.props.location.pathname);
    <Switch>
      {items.map((item) => (
        <PrivateRoute
          path={`${this.props.match.url}/${item.route}`}
          component={Welcome}
        />
      ))}
    </Switch>;

    return (
      <>
        <div className="container mt-1 w-full hidden sm:block">
          <Drawer
            expanded={this.state.expanded}
            position={"start"}
            mode={"push"}
            mini={true}
            items={items.map((item) => ({
              ...item,
              selected: item.text === selected,
            }))}
            onSelect={this.onSelect}
          >
            <DrawerContent>{this.props.children}</DrawerContent>
          </Drawer>
        </div>
        <div className="container mt-1 w-full block sm:hidden">
          <Drawer
            expanded={false}
            position={"start"}
            mode={"push"}
            mini={true}
            items={items.map((item) => ({
              ...item,
              selected: item.text === selected,
            }))}
            onSelect={this.onSelect}
          >
            <DrawerContent>{this.props.children}</DrawerContent>
          </Drawer>
        </div>
      </>
    );
  }
}

export default withRouter(DrawerRouterContainer);
