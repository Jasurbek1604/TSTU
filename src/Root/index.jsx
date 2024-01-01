import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/404";
import Home from "../pages/HomePage";
import { navbar } from "../utils/navbar";
import Universal from "../components/Universal";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Universal />}>
          {navbar.map(({ id, path, element }) => (
            <Route key={id} path={path} element={element} />
          ))}
        </Route>
        <Route path={"/"} element={<Home />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
