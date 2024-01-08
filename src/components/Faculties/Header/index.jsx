import React from "react";
import logo1 from "../../../assets/Faculties/LOGO.svg";
import { useNavigate } from "react-router-dom";
import { Container, Content } from "./style";

const Header = () => {
  const width = window.innerWidth;
  return (
    <Container>
      <div className="container">
        <div className="wrapper">
          <Content type={"header"}>
            {width <= 1000 && <Content.Menu />}
            <Content.Logo src={logo1} />
            {width > 1000 && (
              <Content.Right>
                <Content.Link to="/">Fakultet haqida</Content.Link>
                <Content.Link to="/">Ta’lim</Content.Link>
                <Content.Link to="/">Kafedralar</Content.Link>
                <Content.Link to="/">Tadqiqot</Content.Link>
                <Content.Link>
                  Qidirish <Content.Search />
                </Content.Link>
              </Content.Right>
            )}
            {width <= 1000 && <Content.Search />}
          </Content>
        </div>
      </div>
    </Container>
  );
};

export default Header;
