import Card from "react-bootstrap/Card";

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
        <div>
          <a
            className="links"
            href={props.data.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            PROJECT REPO
          </a>
          <a
            className="links"
            href={props.data.deployedLink}
            target="_blank"
            rel="noreferrer"
          >
            PROJECT IN ACTION
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Project;
