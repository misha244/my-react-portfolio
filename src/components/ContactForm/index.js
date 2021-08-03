import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import phoneme from "./phoneme.png";

import "./ContactForm.css";

const ContactForm = () => {
  return (
    <Container className="contact-form-container">
      <Image src={phoneme} className="phoneimg"></Image>
      <Form className="contact-form">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>YOUR NAME</Form.Label>
          <Form.Control type="input" placeholder="ENTER NAME" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>EMAIL ADDRESS</Form.Label>
          <Form.Control type="email" placeholder="ENTER EMAIL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>ENTER YOUR MESSAGE HERE..</Form.Label>
          <Form.Control type="input" />
        </Form.Group>
        <Button variant="warning">SUBMIT</Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
