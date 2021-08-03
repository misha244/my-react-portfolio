import { v4 as uuidv4 } from "uuid";

import CardGroup from "react-bootstrap/CardGroup";
import Header from "../../components/Header";

import Project from "../../components/Project";
import projects from "../../assets/projects";

const PortfolioPage = (props) => {
  const renderProjects = () => {
    return projects.map((project) => {
      return <Project data={project} key={uuidv4()} />;
    });
  };
  return (
    <div>
      <Header />
      <CardGroup>{renderProjects()}</CardGroup>
    </div>
  );
};

export default PortfolioPage;
