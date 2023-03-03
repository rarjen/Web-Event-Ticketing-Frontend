import { Route, Routes } from "react-router-dom";

import Talents from "../pages/talents";

export function CategoriesRoute() {
  return (
    <Routes>
      <Route path="/" element={<Talents />} />
    </Routes>
  );
}
