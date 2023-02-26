import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavLink from "../NavLink";
// import { userLogout } from "";

export default function PNavbar() {
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  //   let user = useSelector((state) => state.auth);

  //   const handleLogout = () => {
  //     dispatch(userLogout());
  //     navigate("/logout");
  //   };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink action={() => navigate("/")}>Home</NavLink>
          <NavLink action={() => navigate("/categories")}>Categories</NavLink>
          <NavLink action={() => navigate("/talents")}>Talents</NavLink>
          <NavLink action={() => navigate("/events")}>Events</NavLink>
          <NavLink action={() => navigate("/participant")}>Participant</NavLink>
          <NavLink action={() => navigate("/transactions")}>
            Transactions
          </NavLink>
        </Nav>
        {/* <Nav>
          {!user.token && (
            <NavLink action={() => navigate("login")}>Login</NavLink>
          )}
        </Nav> */}
      </Container>
    </Navbar>
  );
}
