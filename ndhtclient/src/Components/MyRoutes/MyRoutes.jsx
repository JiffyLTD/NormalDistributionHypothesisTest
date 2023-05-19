import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./../../Router/Routes";
import Error from "./../../Pages/Error";

const MyRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.component}
          exact={route.exact}
        />
      ))}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default MyRoutes;
