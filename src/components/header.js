import logo from "../assets/logo.png";
import charity from "../assets/charity-box.png";
import React from "react";
import { Ripple } from "@progress/kendo-react-ripple";

import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-react-layout";

let kendokaAvatar =
  "https://www.telerik.com/kendo-react-ui-develop/images/kendoka-react.png";

const Header = () => {
  return (
    <React.Fragment>
      <AppBar>
        {/* <AppBarSection>
          <button className="k-button k-button-clear">
            <span className="k-icon k-i-menu" />
          </button>
        </AppBarSection> */}

        <AppBarSpacer style={{ width: 4 }} />

        <AppBarSection>
          <img src={logo} width="150" height="70" alt="logo" />
        </AppBarSection>

        <AppBarSpacer style={{ width: 32 }} />

        <AppBarSection>
          <ul>
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>Donations</span>
            </li>
            <li>
              <span>Contact Us</span>
            </li>
          </ul>
        </AppBarSection>

        <AppBarSpacer />

        <AppBarSection className="actions">
          <Ripple>
            <button className="k-button">
              <img src={charity} width="24" height="24" alt="fundraiser" />
              Start a fundraiser
            </button>
          </Ripple>
        </AppBarSection>

        <AppBarSection>
          <span className="k-appbar-separator" />
        </AppBarSection>

        <AppBarSection>
          <Avatar shape="circle" type="image">
            <img src={kendokaAvatar} />
          </Avatar>
        </AppBarSection>
      </AppBar>
      <style>{`
                body {
                    background: #fafafa;
                }
                ul {
                    font-size: 14px;
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                }
                li {
                    margin: 0 10px;
                }
                li:hover {
                    cursor: pointer;
                    color: #ff545a;
                }
                .k-button {
                    padding: 10px 25px;
                    background-color: #ff545a;
                    color: white;
                    border-radius: 20px;
                }
                .k-button:hover {
                  background: #ff545a;
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
