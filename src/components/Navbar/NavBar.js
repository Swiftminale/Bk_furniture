import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import logoimg from "./img/Logo.png";

function NavBar() {
  return (
    <div className="container-sticky">
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container className="Container">
          <Navbar.Brand href="#home">
            <img src={logoimg} alt="logo" className="logo" />
            BK Furniture
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="../Card/Cards.js">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
