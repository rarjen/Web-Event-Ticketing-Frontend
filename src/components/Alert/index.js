import React from "react";
import { Alert } from "react-bootstrap";

function PAlert({ message, type }) {
  return <Alert variant={type}>{message}</Alert>;
}

PAlert.defaultProps = {
  message: "Something went wrong",
};

export default PAlert;
