import Image from "react-bootstrap/Image";
import mishabnwcrop from "./mishabnwcrop.png";
import extrasbnwcrop from "./extrasbnwcrop.png";

import "./Header.css";

function changeImage(e) {
  e.target.src = extrasbnwcrop;
}
function changeBack(e) {
  e.target.src = mishabnwcrop;
}

const CropHeader = () => {
  return (
    <header className="header-container">
      <div className="image-container">
        <Image
          src={mishabnwcrop}
          fluid
          onMouseOver={changeImage}
          onMouseLeave={changeBack}
        ></Image>
      </div>
    </header>
  );
};

export default CropHeader;
