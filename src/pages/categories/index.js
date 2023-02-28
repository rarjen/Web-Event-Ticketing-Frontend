import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Container, Table, Spinner } from "react-bootstrap";
import PButton from "../../components/Button";
import PBreadCrumb from "../../components/BreadCrumb";
import PNavbar from "../../components/Navbar";
import axios from "axios";
import { config } from "../../configs";

export default function PageCategories() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [data, setData] = useState([]); //dibuat array untuk menyimpan data categories
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCategoriesAPI = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${config.api_host_dev}/cms/categories`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setIsLoading(false);
        setData(res.data.data);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    getCategoriesAPI();
  }, []);

  if (!token) return <Navigate to="/signin" replace={true} />;

  return (
    <>
      <PNavbar />
      <Container className="mt-3">
        <PBreadCrumb textSecond="Categories" />

        <PButton action={() => navigate("/categories/create")}>Tambah</PButton>

        <Table striped bordered hover variant="dark" className="mt-3">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={3} style={{ textAlign: "center" }}>
                  <div className="flex items-center justify-center">
                    <Spinner animation="border" variant="light" />
                  </div>
                </td>
              </tr>
            ) : (
              data.map((data, index) => (
                <tr key={index}>
                  <td>{(index += 1)}</td>
                  <td>{data.name}</td>
                  <td>@twitter</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
