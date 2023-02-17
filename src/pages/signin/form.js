import React from "react";
import { Form } from "react-bootstrap";
import PButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";

export default function FormSignin({
  form,
  handleChange,
  handleSubmit,
  isLoading,
}) {
  return (
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
      <PButton
        loading={isLoading}
        disabled={isLoading}
        action={handleSubmit}
        variant="primary"
      >
        Submit
      </PButton>
    </Form>
  );
}
