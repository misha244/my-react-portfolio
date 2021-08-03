import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Nav className="navbar">
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              HOME
            </Link>
            <Link
              to="/portfolio"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              PROJECTS
            </Link>
            <Link
              to="/contact"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              CONTACT
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
