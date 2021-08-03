import Card from "react-bootstrap/Card";

import "./Project.css";

const Project = () => {
  return (
    <Card className="card-container">
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Project Name</Card.Title>
        <Card.Text>Project Description</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Project;
