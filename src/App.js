import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from "./pages/signin";
import DashboardPage from "./pages/dashboard";
import CategoriesPage from "./pages/categories";
import PageCreateCategory from "./pages/categories/create";
import CategoriesPageEdit from "./pages/categories/edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="/categories" element={<CategoriesPage />}></Route>
        <Route
          path="/categories/create"
          element={<PageCreateCategory />}
        ></Route>
        <Route
          path="/categories/edit/:id"
          element={<CategoriesPageEdit />}
        ></Route>
        <Route path="/signin" element={<SigninPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
