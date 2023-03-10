import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PBreadCrumb from "../../components/BreadCrumb";
import PAlert from "../../components/Alert";
import PForm from "./form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { config } from "../../configs";
import PNavbar from "../../components/Navbar";

export default function PageCreateCategory() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "" });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await axios.post(`${config.api_host_dev}/cms/categories`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/categories");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: error.response.data.message,
      });
    }
  };

  return (
    <>
      <PNavbar />
      <Container className="mt-3">
        <PBreadCrumb
          textSecond={"Categories"}
          urlSecond={"/categories"}
          textThird="Create"
        />
        {alert.status && <PAlert type={alert.type} message={alert.message} />}
        <PForm
          form={form}
          isLoading={isLoading}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Container>
    </>
  );
}
