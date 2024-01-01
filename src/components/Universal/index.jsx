import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { UniversalSidebr } from "../Sidebar";
import { Outlet } from "react-router-dom";
import { Line } from "./style";

const Universal = () => {
  return (
    <div>
      <Header>
        <Line />
        <UniversalSidebr />
      </Header>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Universal;
