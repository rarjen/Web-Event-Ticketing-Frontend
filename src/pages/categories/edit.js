import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import PBreadCrumb from "../../components/BreadCrumb";
import PAlert from "../../components/Alert";
import PForm from "./form";
import { useNavigate, useParams } from "react-router-dom";

export default function PageEditCategory() {
  const navigate = useNavigate();
  const { categoryId } = useParams();
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

  const fetchOneCategories = async () => {};

  useEffect(() => {
    fetchOneCategories();
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
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
    <Container>
      <PBreadCrumb
        textSecond={"Categories"}
        urlSecond={"/categories"}
        textThird="Edit"
      />
      {alert.status && <PAlert type={alert.type} message={alert.message} />}
      <PForm
        form={form}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}
