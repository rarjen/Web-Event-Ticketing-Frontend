import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import PButton from "../../components/Button";
import PBreadCrumb from "../../components/BreadCrumb";
import PNavbar from "../../components/Navbar";
import axios from "axios";
import { config } from "../../configs";

export default function PageCategories() {
  const token = localStorage.getItem("token");

  const [data, setData] = useState([]); //dibuat array untuk menyimpan data categories
  const [counter, setCounter] = useState(0);
  const [bilanganGanjil, setBilanganGanjil] = useState(false);

  console.log("data");
  console.log(data);

  useEffect(() => {
    console.log("useEffect");
    const getCategoriesAPI = async () => {
      try {
        const res = await axios.get(`${config.api_host_dev}/cms/categories`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);

        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategoriesAPI();
  }, []);

  useEffect(() => {
    setBilanganGanjil(counter % 2 !== 0 ? true : false);
  }, [counter]);

  if (!token) return <Navigate to="/signin" replace={true} />;

  return (
    <>
      {console.log("render")}
      <PNavbar />
      <Container className="mt-3">
        <PBreadCrumb textSecond="Categories" />
        <h1>
          {bilanganGanjil
            ? `${counter} adalah bilangan ganjil`
            : `${counter} adalah bilangan genap`}
        </h1>
        <PButton action={() => setCounter(counter + 1)}>Tambah</PButton>
        <Table striped bordered hover variant="dark" className="mt-3">
          <thead>
            <tr>
              <th>Cat</th>
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
