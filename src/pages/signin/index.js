import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import PButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import axios from "axios";
import PAlert from "../../components/Alert";

function PageSignin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:9000/api/v1/auth/signin", {
        email: form.email,
        password: form.password,
      });

      console.log(res);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <Container md={12}>
      <PAlert message="Test" type="danger" />
      <Card style={{ width: "50%" }} className="m-auto mt-5 p-2">
        <Card.Title className="text-center">Form Sign In</Card.Title>
        <Card.Body>
          <Form>
            <TextInputWithLabel
              label="Email address"
              name="email"
              value={form.email}
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
            <TextInputWithLabel
              label="Password"
              name="password"
              value={form.password}
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <PButton action={handleSubmit} variant="primary">
              Submit
            </PButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
