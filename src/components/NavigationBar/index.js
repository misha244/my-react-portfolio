import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <Navbar className="navbar">
      <Container>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About me</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link>CV</Nav.Link>
          <Nav.Link href="/contact">Contact me</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
