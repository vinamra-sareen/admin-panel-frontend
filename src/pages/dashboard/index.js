import * as React from "react";
import { withRouter } from "react-router-dom";

import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import Welcome from "./welcome";
import { getModules } from "../../_services/admin";
// import { Button } from "@progress/kendo-react-buttons";

const items = [
  {
    text: "Welcome",
    icon: "k-i-home",
    route: "/admin",
  },
  {
    text: "Profile",
    icon: "k-i-user",
    route: "/admin/admin_compliance",
  },
  { text: "Events", icon: "k-i-calendar", route: "/affiliate_panel/partnerList" },
  { separator: true },
  { text: "Settings", icon: "k-i-cog", route: "/dashboard/settings" },
];

class DrawerRouterContainer extends React.Component {
  state = { expanded: true, items: [] };

  handleClick = () => {
    this.setState((e) => ({ expanded: !e.expanded }));
  };

  onSelect = (e) => {
    this.setState({ expanded: true });
    this.props.history.push(e.itemTarget.props.route);
  };

  setSelectedItem = (pathName) => {
    console.log(pathName);
    let currentPath = items.find((item) => item.route === pathName);
    if (currentPath.text) {
      return currentPath.text;
    }
  };

  componentDidMount(){
    getModules().then(res => {
      if(res.status === 200) {
        let items = []; 
        res.data.modules.map(module => {
          items.push({ text: module.navigation_name, route: `${module.module_link}?module_id=${module.module_id}` })
        })
        this.setState({ items });
        
      } else {
        console.error('Oops ... Something went wrong');
      }
    }).catch(err => console.log(err));
  }

  render() {
    let selected = this.setSelectedItem(this.props.location.pathname);
    return (
      <>
        <div className="container mt-1 w-full hidden sm:block">
          {/* <div className="w-14 bg-white text-center">
          <Button icon="menu" look="flat" onClick={this.handleClick} />
        </div> */}
          <Drawer
            expanded={this.state.expanded}
            position={"start"}
            mode={"push"}
            mini={true}
            items={this.state.items.map((item) => ({
              ...item,
              selected: item.text === selected,
            }))}
            onSelect={this.onSelect}
          >
            <DrawerContent>{this.props.children}</DrawerContent>
          </Drawer>
        </div>
        <div className="container mt-1 w-full block sm:hidden">
          {/* <div className="w-14 bg-white text-center">
          <Button icon="menu" look="flat" onClick={this.handleClick} />
        </div> */}
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
