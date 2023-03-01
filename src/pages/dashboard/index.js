import React from "react";
import { Container } from "react-bootstrap";
import PBreadCrumb from "../../components/BreadCrumb";

export default function PageDashboard() {
  return (
    <Container className="mt-3">
      <PBreadCrumb />
      <h1>Dashboard</h1>
    </Container>
  );
}
