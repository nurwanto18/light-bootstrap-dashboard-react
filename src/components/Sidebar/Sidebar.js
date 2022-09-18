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
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

import logo from "assets/img/reactlogo.png";

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" style={{backgroundColor:'#4976BA !important'}}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")"
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start" style={{backgroundColor: 'white'}}>
          <a
            // href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini" style={{justifyContent:'center', width: '100%'}}
          >
            <div className="logo-img" style={{display: 'inline-flex'}}>
              <img src={require("assets/img/Logo.png")} alt="..." />
              <a className="simple-text" style={{color: '#4976BA', fontWeight: '600', float: 'right', marginLeft: '5px'}}>
                CMS
              </a>
            </div>
          </a>
          
        </div>
        <Nav>
          <li className={
                    false
                      ? "active active-pro"
                      : activeRoute('/admin/dashboard')
                  }>
            <NavLink
              to={'/admin/dashboard'}
              className="nav-link"
              activeClassName="active"
            >
              <i className={'nc-icon nc-app'} />
              <p>Home</p>
            </NavLink>
          </li>
          <li className={
                    false
                      ? "active active-pro"
                      : activeRoute('/admin/master')
                  }>
            <NavLink
              to={'/admin/master'}
              className="nav-link"
              activeClassName="active"
            >
              <i className={'nc-icon nc-settings-gear-64'} />
              <p>Master Management</p>
            </NavLink>
          </li>
          <li className={
                    false
                      ? "active active-pro"
                      : activeRoute('/admin/kandidat')
                  }>
            <NavLink
              to={'/admin/kandidat'}
              className="nav-link"
              activeClassName="active"
            >
              <i className={'nc-icon nc-single-02'} />
              <p>Kandidat Management</p>
            </NavLink>
          </li>
          <li className={
                    false
                      ? "active active-pro"
                      : activeRoute('/admin/modul')
                  }>
            <NavLink
              to={'/admin/modul'}
              className="nav-link"
              activeClassName="active"
            >
              <i className={'nc-icon nc-ruler-pencil'} />
              <p>Modul Management</p>
            </NavLink>
          </li>
          <li className={
                    false
                      ? "active active-pro"
                      : activeRoute('/admin/icons')
                  }>
            <NavLink
              to={'/admin/icons'}
              className="nav-link"
              activeClassName="active"
            >
              <i className={'nc-icon nc-circle-09'} />
              <p>Icon</p>
            </NavLink>
          </li>
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
