import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../../../images/logo.png";
import "./Navigation.css";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <nav className="Navigation">
            //     <Link to="/" className="logo">
            //         <img src={logo} alt="alt"/>
            //         <p>EVENTbucket</p>
            //     </Link>
            //     <ul className="rightul">
            //         {!this.props.isLoggedIn && <Nav.Link href="/register" className="links">Register</Nav.Link>}
            //         {!this.props.isLoggedIn && <Nav.Link href="/login" className="links">Login</Nav.Link>}
            //         {this.props.isLoggedIn &&  <Nav.Link href="/create" className="links">Create</Nav.Link>}
            //         {this.props.isLoggedIn && <Nav.Link href="/profile" className="links">Profile</Nav.Link>}
            //         {this.props.isLoggedIn && <Nav.Link href="/logout" className="links">Logout</Nav.Link>}
            //     </ul>
            // </nav>
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="/" className="ls d-flex align-items-end">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top logo mr-3"
            alt="Logo"
          />
          <p>EVENTBucket</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle"/>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto justify-content-end">
                   {!this.props.isLoggedIn && <Nav.Link href="/register" className="links mr-3">Register</Nav.Link>}
                   {!this.props.isLoggedIn && <Nav.Link href="/login" className="links mr-3">Login</Nav.Link>}
                   {this.props.isLoggedIn &&  <Nav.Link href="/create" className="links mr-3">Create</Nav.Link>}
                   {this.props.isLoggedIn && <Nav.Link href="/profile" className="links mr-3">Profile</Nav.Link>}
                   {this.props.isLoggedIn && <Nav.Link href="/logout" className="links mr-3">Logout</Nav.Link>}
          </Nav>
          
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

    }

export default Navigation;