import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { NavDropdown } from "react-bootstrap";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;
  // const loginLogoutControls = <LoggedIn />;

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        Telephone Webshop
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Products" />
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
      {loginLogoutControls}
      </Navbar.Collapse>
    </Navbar>

    // <Navbar bg="light" expand="lg">
    //   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#home">Home</Nav.Link>
    //       <Nav.Link href="#link">Link</Nav.Link>
          // <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          //   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          //   <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          //   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          //   <NavDropdown.Divider />
          //   <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          // </NavDropdown>
    //     </Nav>
    //     <Form inline>
    //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //       <Button variant="outline-success">Search</Button>
    //     </Form>
    //   </Navbar.Collapse>
    // </Navbar>
  );
}
