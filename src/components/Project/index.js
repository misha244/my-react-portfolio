import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./Project.css";

const Project = (props) => {
  return (
    <Card className="card-container">
      <Card.Img
        className="image"
        variant="top"
        src={props.data.image}
        alt={props.data.imageAlt}
      />
      <Card.Body>
        <Card.Title className="title">{props.data.title}</Card.Title>
        <Card.Text className="description">{props.data.description}</Card.Text>
        <div className="button-container">
          <a href={props.data.githubLink}>
            <Button className="links">PROJECT REPO</Button>
          </a>

          <a href={props.data.deployedLink}>
            <Button className="links">PROJECT IN ACTION </Button>
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Project;
