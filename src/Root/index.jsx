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
        {navbar.map((item) => (
          <Route key={item.id} element={<Universal data={item} />}>
            <Route path={item.path} element={item.element} />
          </Route>
        ))}
        <Route path={"/"} element={<Home />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
