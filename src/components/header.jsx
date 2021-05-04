import logo from "../assets/adda52-logo.png";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  // Avatar,
  Drawer,
  DrawerContent,
} from "@progress/kendo-react-layout";

import { authenticationService } from "../_services/authentication.service";
import { useHistory } from "react-router-dom";

// let kendokaAvatar =
//   "https://www.telerik.com/kendo-react-ui-develop/images/kendoka-react.png";

const items = [
  { text: "Home", icon: "k-i-home", selected: true },
  { separator: true },
  { text: "Donate", icon: "k-i-heart-outline" },
  { text: "About Us", icon: "k-i-globe" },
  { separator: true },
  { text: "Login", icon: "k-i-lock" },
  { text: "Register", icon: "k-i-user" },
];

const Header = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(
    items.findIndex((x) => x.selected === true)
  );
  let history = useHistory();

  const handleClick = () => {
    setExpanded((prevState) => !prevState);
  };

  const handleSelect = (ev) => {
    setSelectedId(ev.itemIndex);
    setExpanded(false);
  };

  const logout = () => {
    authenticationService.logout();

    history.push("/login");
  };

  const { currentUser } = props;

  return (
    <React.Fragment>
      <AppBar>
        <AppBarSpacer style={{ width: 4 }} />
        <Drawer
          expanded={expanded}
          position={"start"}
          mode="overlay"
          animation={{ duration: 400 }}
          items={items.map((item, index) => ({
            ...item,
            selected: index === selectedId,
          }))}
          onOverlayClick={handleClick}
          onSelect={handleSelect}
        >
          <DrawerContent>
            <div className="flex sm:hidden">
              <AppBarSection>
                <button className="k-button" onClick={handleClick}>
                  <span className="k-icon k-i-menu" />
                </button>
              </AppBarSection>
            </div>
          </DrawerContent>
        </Drawer>

        <AppBarSection>
          <img src={logo} width="150" height="70" alt="charitable-logo" />
        </AppBarSection>

        <AppBarSpacer />

        <div className="hidden sm:flex">
          <AppBarSection>
            <ul className="adda52-ul">
              {!currentUser && (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
              {currentUser && (
                <>
                  <li>
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li>
                    <Link onClick={logout}>Logout</Link>
                  </li>
                </>
              )}
            </ul>
          </AppBarSection>
        </div>


      </AppBar>
      <style>{`
                body {
                    background: #fafafa;
                }
                .adda52-ul {
                    font-size: 14px;
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                }
                .adda52-ul > li {
                    margin: 0 10px;
                }
                .adda52-ul > li:hover {
                    cursor: pointer;
                    color: #ff545a;
                }
                .k-badge-container {
                    margin-right: 8px;
                }
                .k-appbar {
                  background: #fff;
                }
            `}</style>
    </React.Fragment>
  );
};

export default Header;
