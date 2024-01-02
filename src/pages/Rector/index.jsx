import React from "react";
import callCenter from "../../assets/images/callRector.png";
import { Content } from "./style";

const Rector = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <Content>
          <div className="content">
            <div className="content__left">
              <div className="content__left__title">
                Toshkent davlat Transport universiteti rektori{" "}
                <span className="content__left__title__span">
                  Abduraxmonov Odil Kalandarovich
                </span>{" "}
                virtual qabulxonasi
              </div>
              <div className="content__left__img">
                <img src={callCenter} alt="" />
              </div>
            </div>
          </div>
        </Content>
      </div>
    </div>
  );
};

export default Rector;
