import Card from "react-bootstrap/Card";

import "./Project.css";

const Project = () => {
  return (
    <Card className="card-container">
      <Card.Link></Card.Link>
      <Card.Body>
        <Card.Title>Project Name</Card.Title>
        <Card.Text>Project Description</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Project;
