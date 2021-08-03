import Navbar from "react-bootstrap/Navbar";

import "./Footer.css";

const Footer = () => {
  return (
    <Navbar className="footer">
      written and directed by <text className="text">Quentin Tarantino. </text>{" "}
      Mihaela Shtebunaeva
    </Navbar>
  );
};

export default Footer;
