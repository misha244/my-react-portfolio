import Card from "react-bootstrap/Card";

import "./Project.css";

const Project = (props) => {
  return (
    <Card className="card-container">
      <Card.Img
        variant="top"
        src={props.data.image}
        alt={props.data.imageAlt}
      />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>{props.data.description}</Card.Text>
        <Card.Link>
          <a href={props.data.githubLink} target="_blank" rel="noreferrer">
            See the project's repo
          </a>
        </Card.Link>
        <Card.Link>
          <a href={props.data.deployedLink} target="_blank" rel="noreferrer">
            See the project in action
          </a>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Project;
