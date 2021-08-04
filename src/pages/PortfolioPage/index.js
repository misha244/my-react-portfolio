import { v4 as uuidv4 } from "uuid";

import Container from "react-bootstrap/Container";

import Header from "../../components/Header";
import Project from "../../components/Project";
import projects from "../../assets/projects";

import "./PortfolioPage.css";

const PortfolioPage = (props) => {
  const renderProjects = () => {
    return projects.map((project) => {
      return <Project data={project} key={uuidv4()} />;
    });
  };
  return (
    <div>
      <Header />
      <Container className="cards-container">{renderProjects()}</Container>
    </div>
  );
};

export default PortfolioPage;
