import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <Navbar bg="success" expand="lg">
      <Container>
        <Nav>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Portfolio</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>CV</Nav.Link>
          <Nav.Link>Contact me</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
