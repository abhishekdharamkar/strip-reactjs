import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "./ContachNavbar.css";
import React from "react";

const ContactNavbar = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" className="py-1 navbar-style">
        <Container className="text-margin-style">
          <Navbar.Brand className="navbar-text-size fw-bold">
            <Navbar.Text>Mon-Thu: </Navbar.Text>
            9:00 AM - 5:30 PM
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end navbar-text-size">
            <Navbar.Text className="text-white fw-bold">
              Call Us: (00) 1234 5678
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </React.Fragment>
  );
};

export default ContactNavbar;