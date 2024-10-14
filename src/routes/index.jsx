import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundRoute from "./not_found";
import { Details, Home, Wishlist } from "../pages";

const AppRoutes = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:id",
      element: <Details />,
    },
    {
      path: "/wishlist",
      element: <Wishlist />,
    },

    // Not found routes
    { path: "*", element: <NotFoundRoute /> },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
