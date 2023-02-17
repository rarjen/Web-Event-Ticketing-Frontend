import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import axios from "axios";
import PAlert from "../../components/Alert";
import { config } from "../../configs";
import FormSignin from "./form";

function PageSignin() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // States
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "danger",
  });

  const [isLoading, setIsLoading] = useState(false);

  // Functions
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setAlert({ status: false });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${config.api_host_dev}/cms/auth/signin`,
        form
      );

      console.log(res.data.data.token);
      localStorage.setItem("token", res.data.data.token);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      setAlert({
        status: true,
        message: error?.response?.data?.message ?? "Internal Server Error!",
        type: "danger",
      });
    }
  };

  if (token) return <Navigate to="/" replace={true} />;
  return (
    <Container md={12} className="my-5">
      <div className="m-auto" style={{ width: "50%" }}>
        {/* Jika alert true akan menampilkan alert component*/}
        {alert.status && <PAlert type={alert.type} message={alert.message} />}
      </div>
      <Card style={{ width: "50%" }} className="m-auto mt-5 p-2">
        <Card.Title className="text-center">Form Sign In</Card.Title>
        <FormSignin
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
        <Card.Body></Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
