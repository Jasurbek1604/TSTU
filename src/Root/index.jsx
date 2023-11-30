import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/404Page";
import { navbar } from "../utils/navbar";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        {navbar.map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
        <Route path={"/"} element={<Navigate to={"/home"} />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
