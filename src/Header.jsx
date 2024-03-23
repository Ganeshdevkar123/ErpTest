import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <header>
      <Navbar.Brand href="/">
        <h4 className="m-0">ErpMechSoft</h4>
      </Navbar.Brand>
      <Navbar expand="md" className="nav ">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" aria-current="page" to={`/`}>
              Home
            </Link>
            <Link className="nav-link" aria-current="page" to={`/General`}>
              General
            </Link>
            <Link className="nav-link" to={`/Entertainment`}>
              Entertainment
            </Link>
            <Link className="nav-link" to={`/Technology`}>
              Technology
            </Link>
            <Link className="nav-link" to={`/Sports`}>
              Sports
            </Link>
            <Link className="nav-link" to={`/Business`}>
              Business
            </Link>
            <Link className="nav-link" to={`/Health`}>
              Health
            </Link>
            <Link className="nav-link" to={`/Science`}>
              Science
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/Contact">
              Contact
            </Link>
            <div className="">
              <button className="btn btn-danger mx-2">Subscribe</button>
              <button className="btn btn-primary">Sign In</button>
            </div>
          </Nav>
          {/* <select className="mx-2" id="languages" name="languages">
            <option value="en-US">English</option>
            <option value="mr">Marathi - मराठी</option>
            <option value="hi">Hindi - हिन्दी</option>
          </select> */}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
