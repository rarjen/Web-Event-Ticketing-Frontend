import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import PAlert from "../../components/Alert";
import PForm from "./form";
import { postData } from "../../utils/fetch";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/auth/actions";

function PageSignin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // States
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // Functions
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // setAlert({ status: false });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const res = await postData(`/cms/auth/signin`, form);

    // Dispatch
    if (res?.data?.data) {
      const token = res.data.data.token;
      const role = res.data.data.role;
      dispatch(userLogin(token, role));

      setIsLoading(false);
      navigate("/");
    } else {
      setIsLoading(false);
      setAlert({
        status: true,
        message: res?.response?.data?.message ?? "Internal Server Error!",
        type: "danger",
      });
    }
  };

  return (
    <Container md={12} className="my-5">
      <div className="m-auto" style={{ width: "50%" }}>
        {/* Jika alert true akan menampilkan alert component*/}
        {alert.status && <PAlert type={alert.type} message={alert.message} />}
      </div>
      <Card style={{ width: "50%" }} className="m-auto mt-5 p-2">
        <Card.Title className="text-center">Form Sign In</Card.Title>
        <PForm
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
