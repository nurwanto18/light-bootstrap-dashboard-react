/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

import routes from "routes.js";

function Header() {
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
        </div>
        
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="ml-auto" navbar>
            
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                aria-expanded={true}
                aria-haspopup={false}
                as={Nav.Link}
                data-toggle="dropdown"
                id="dropdown-menu-end"
                variant="default"
                className="m-0"
                size="lg"
                // align="end"
                alignLeft
              >
                <AccountCircleOutlinedIcon sx={{color: '#4976BA', "&:hover": {
                  color: "#4976EE",
                  cursor: "pointer"
                  }}} fontSize="large" 
                />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end" style={{fontSize: '12px', width: '40px !important'}}>
                <Dropdown.Item
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Edit Profil
                </Dropdown.Item>
                <div className="divider"></div>
                <Dropdown.Item
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <ExitToAppOutlinedIcon /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
