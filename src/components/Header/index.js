import Image from "react-bootstrap/Image";
import mishabnw from "./mishabnw.png";

import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="image-container">
        <Image src={mishabnw} fluid></Image>
      </div>
    </header>
  );
};

export default Header;
