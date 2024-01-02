import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { UniversalSidebr } from "../Sidebar";
import { Outlet } from "react-router-dom";
import { Line } from "./style";
import UniShowcase from "../UniShowcase";
import Breadcrumb from "../Breadcrumb";

const Universal = ({ data }) => {
  return (
    <div>
      <Header>
        <Line />
        <UniversalSidebr />
        <Breadcrumb type={data?.type} />
      </Header>
      {data?.title && <UniShowcase data={data} />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Universal;
