import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const NavBar = (props) => {
  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="header-content col-md-10">
              <h1>
                <i className="fas fa-cog"></i>
                Dashboard
              </h1>
            </div>
            <div className="col-md-2">
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="dropToggle">
                  Add Startups
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
