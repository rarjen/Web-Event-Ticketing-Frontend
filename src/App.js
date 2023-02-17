import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "react-bootstrap";
import SigninPage from "./pages/signin";
import DashboardPage from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Button>Home</Button>}></Route>
        <Route path="/signin" element={<SigninPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
