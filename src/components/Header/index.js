import Image from "react-bootstrap/Image";
import collage from "./collage.png";

const Header = () => {
  return (
    <header>
      <h1>*record scratch* You're probably wondering how I got here..</h1>

      <Image src={collage}></Image>
    </header>
  );
};

export default Header;
