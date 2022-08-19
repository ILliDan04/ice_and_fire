import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Characters } from "./pages/Characters";
import House from "./pages/House";
import { APP_ROUTES } from "./config/appRoutes";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={APP_ROUTES.CHARACTERS} element={<Characters />} />
      <Route path={APP_ROUTES.HOUSE} element={<House />} />
      <Route path="*" element={<Navigate to={APP_ROUTES.CHARACTERS} />} />
    </Routes>
  );
};

export default App;
