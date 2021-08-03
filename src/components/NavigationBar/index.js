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
            <Link to="/">HOME</Link>
            <Link to="/portfolio">PROJECTS</Link>
            <Link to="/contact">CONTACT</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
