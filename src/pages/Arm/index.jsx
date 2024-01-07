import React from "react";
import Header from "../../components/Arm/Header";
import Footer from "../../components/Arm/Footer";
import { Showcase } from "./style";
import { Content } from "./style";

const Arm = () => {
  return (
    <>
      <Header />
      <Showcase>
        <div className="container">
          <div className="wrapper">
            <Content>
              <div>
                <Content.Title>
                  Axborot resurs markazidan foydalanishni boshlang !
                </Content.Title>
                <Content.Btn type="primary">Elektron katalog</Content.Btn>
              </div>
            </Content>
          </div>
        </div>
      </Showcase>
      <Footer />
    </>
  );
};

export default Arm;
