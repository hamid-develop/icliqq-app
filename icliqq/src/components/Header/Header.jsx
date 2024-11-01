import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "./logo.png";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      style={{ backgroundColor: "#119c85" }}
    >
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} alt="logo" width={130} height={80} />
        </Navbar.Brand>
        <Navbar.Toggle
        
          aria-controls="navbarScroll"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 "
            navbarScroll
          >
            <Link
              to="/home"
              className="nav-link under"
              onClick={() => setExpanded(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Features
            </Link>
            <Link
              to="/downloads"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Downloads
            </Link>
            <Link
              to="/partners"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Business Partners
            </Link>
            <Link
              to="/gallery"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Gallery
            </Link>
            <Link
              to="/about-us"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              About-us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
