import CardGroup from "react-bootstrap/CardGroup";

import Project from "../../components/Project";

const PortfolioPage = (props) => {
  return (
    <CardGroup>
      <Project />
      <Project />
      <Project />
    </CardGroup>
  );
};

export default PortfolioPage;
