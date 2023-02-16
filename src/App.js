import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "react-bootstrap";
import PageSignin from "./pages/signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Button>Home</Button>}></Route>
        <Route path="/signin" element={<PageSignin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
