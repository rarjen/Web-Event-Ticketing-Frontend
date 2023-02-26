import React from "react";
import { Navigate } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import PButton from "../../components/Button";
import PBreadCrumb from "../../components/BreadCrumb";
import PNavbar from "../../components/Navbar";

export default function Dashboard() {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/signin" replace={true} />;

  return (
    <>
      <PNavbar />
      <Container className="mt-3">
        <PBreadCrumb />
        <PButton>Tambah</PButton>
        <Table striped bordered hover variant="dark" className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
