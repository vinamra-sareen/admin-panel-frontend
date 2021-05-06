import * as React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import Welcome from "./module";
import { PrivateRoute } from "../../components/PrivateRoute";
import UserBankDetailsReport from "./admin_compliance/user_bank_details_report";
import { getModules } from "../../_services/admin";
import { authenticationService } from "../../_services/authentication.service";
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
  state = { expanded: true, items: [], error: false };

  handleClick = () => {
    this.setState((e) => ({ expanded: !e.expanded }));
  };

  onSelect = (e) => {
    this.setState({ expanded: true });
    console.log("eee: ", e.itemTarget.props.route, " props: ", this.props);
    this.props.history.push(e.itemTarget.props.route);
  };

  setSelectedItem = (pathName) => {
    let currentPath = items.find(
      (item) => item.route.split("?")[0] === pathName
    );
    console.log(currentPath);
    if (currentPath.text) {
      return currentPath.text;
    }
  };

  componentDidMount() {
    getModules()
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          res.data.modules.map((module) => {
            items.push({
              text: module.navigation_name,
              route: `${module.module_link}?module_id=${module.module_id}`,
            });
          });
          this.setState({ items });
        } 
      })
      .catch((err) => {
        this.setState({ error: true });
      });
  }

  render() {
    console.log('error: ', this.state.error)
    if(this.state.error){
      return <Redirect to="/unauthorized" />;
    }

    // let selected = this.setSelectedItem(this.props.location.pathname);
    const token = authenticationService.getToken();
    const user = authenticationService.currentUser;
    console.log((!token || user === null));
    if ((!token || user === null)) {
      return <Redirect to="/login" />;
    } 
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
              // selected: item.text === selected,
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
              // selected: item.text === selected,
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
