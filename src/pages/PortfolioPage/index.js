import CardGroup from "react-bootstrap/CardGroup";
import CropHeader from "../../components/CropHeader";

import Project from "../../components/Project";

const PortfolioPage = (props) => {
  return (
    <div>
      <CropHeader />
      <CardGroup>
        <Project />
        <Project />
        <Project />
      </CardGroup>
    </div>
  );
};

export default PortfolioPage;
