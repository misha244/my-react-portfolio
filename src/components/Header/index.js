import Image from "react-bootstrap/Image";
import mishabnw from "./mishabnw.png";
import extrasbnw from "./extrasbnw.png";

import "./Header.css";

function changeImage(e) {
  e.target.src = extrasbnw;
}
function changeBack(e) {
  e.target.src = mishabnw;
}

const Header = () => {
  return (
    <header className="header-container">
      <div className="image-container">
        <Image
          src={mishabnw}
          fluid
          onMouseOver={changeImage}
          onMouseLeave={changeBack}
        ></Image>
      </div>
    </header>
  );
};

export default Header;
