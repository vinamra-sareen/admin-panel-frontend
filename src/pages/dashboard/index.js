import * as React from "react";
import { withRouter, Redirect } from "react-router-dom";
import {
  Drawer,
  DrawerContent,
  DrawerItem,
} from "@progress/kendo-react-layout";
import { getModules } from "../../_services/admin";
import { authenticationService } from "../../_services/authentication.service";

let items = [
  // {
  //   text: "Welcome",
  //   icon: "k-i-home",
  //   route: "/admin",
  //   id: 0,
  // },
  // {
  //   text: "Food",
  //   icon: "k-i-heart",
  //   id: 1,
  //   ["data-expanded"]: true,
  //   route: "/admin/food",
  // },
  // {
  //   text: "Japanese Food",
  //   icon: "k-i-minus",
  //   id: 2,
  //   parentId: 1,
  //   route: "/admin/food/japanese",
  // },
  // {
  //   text: "Italian Food",
  //   icon: "k-i-minus",
  //   id: 3,
  //   parentId: 1,
  //   route: "/admin/food/italian",
  // },
  // {
  //   text: "Admin Compliance",
  //   route: "/admin/admin_compliance",
  // },
];

const CustomItem = (props) => {
  const { visible, ...others } = props;
  const arrowDir = props["data-expanded"]
    ? "k-i-arrow-chevron-down"
    : "k-i-arrow-chevron-right";

  return (
    <React.Fragment>
      {props.visible === false ? null : (
        <DrawerItem {...others}>
          <span className={"k-item-text"}>{props.text}</span>
          {props["data-expanded"] !== undefined && (
            <span
              className={"k-icon " + arrowDir}
              style={{ position: "absolute", right: 10 }}
            />
          )}
        </DrawerItem>
      )}
    </React.Fragment>
  );
};

class DrawerRouterContainer extends React.Component {
  state = { expanded: true, items: [], error: false };

  handleClick = () => {
    this.setState((e) => ({ expanded: !e.expanded }));
  };

  onSelect = (e) => {
    const currentItem = e.itemTarget.props;
    const isParent = currentItem["data-expanded"] !== undefined;
    const nextExpanded = !currentItem["data-expanded"];

    const newData = this.state.items.map((item) => {
      const {
        selected,
        ["data-expanded"]: currentExpanded,
        id,
        ...others
      } = item;
      const isCurrentItem = currentItem.id === id;
      return {
        selected: isCurrentItem,
        ["data-expanded"]:
          isCurrentItem && isParent ? nextExpanded : currentExpanded,
        id,
        ...others,
      };
    });

    this.setState({ expanded: true, items: newData });
    // console.log("eee: ", e.itemTarget.props.route, " props: ", this.props);
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
          res.data.modules.map((module, i) => {
            items.push({
              text: module.navigation_name,
              route: `${module.module_link}?module_id=${module.module_id}`,
              id: i + 1,
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
    const data = this.state.items.map((item) => {
      const { parentId, ...others } = item;
      if (parentId !== undefined) {
        const parent = this.state.items.find(
          (parent) => parent.id === parentId
        );
        return {
          ...others,
          visible: parent["data-expanded"],
        };
      }
      return item;
    });

    console.log("error: ", this.state.error);
    if (this.state.error) {
      return <Redirect to="/unauthorized" />;
    }

    const token = authenticationService.getToken();
    const user = authenticationService.currentUser;
    console.log(!token || user === null);
    if (!token || user === null) {
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
            items={data}
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
            items={data}
            item={CustomItem}
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
