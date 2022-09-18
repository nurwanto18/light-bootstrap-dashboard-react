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
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div className="footer px-0 px-lg-3" style={{backgroundColor: '#4976BA !important', position: 'fixed', bottom: 0, width: '100%'}}>
        <Container fluid>
            <p className="copyright">
              2022 © Axa Financial Indonesia. All rights reserved
            </p>
        </Container>
      </div>
    );
  }
}

export default Footer;
