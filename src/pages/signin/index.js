import React from "react";
import { Container, Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import PButton from "../../components/Button";

function PageSignin() {
  return (
    <Container md={12}>
      <Card style={{ width: "50%" }} className="m-auto mt-5 p-2">
        <Card.Title className="text-center">Form Sign In</Card.Title>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <PButton variant="primary">Submit</PButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
