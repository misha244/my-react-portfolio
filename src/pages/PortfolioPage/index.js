import CardGroup from "react-bootstrap/CardGroup";
import Header from "../../components/Header";

import Project from "../../components/Project";

const PortfolioPage = (props) => {
  return (
    <div>
      <Header />
      <CardGroup>
        <Project />
        <Project />
        <Project />
      </CardGroup>
    </div>
  );
};

export default PortfolioPage;
