import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import logo1 from "../../assets/icons/logo1.png";
import logo2 from "../../assets/icons/logo2.png";
import logo3 from "../../assets/icons/logo3.png";
import logo4 from "../../assets/icons/logo4.png";
import search from "../../assets/icons/search.svg";
import eye from "../../assets/icons/eye.svg";
import menu from "../../assets/icons/menu1.svg";
import {
  Container,
  Wrapper,
  Left,
  Right,
  Logo,
  Link,
  Logos,
  Menu,
  Img,
  Wrap,
} from "./style";
import { navbar } from "../../utils/navbar";
import Subbar from "../Subbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onMenuCLick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen.toString());
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <Menu onClick={onMenuCLick}>
            <Img src={menu} />
          </Menu>
          <Left>
            <Logos none={"true"} to="/home">
              <Logo h={"true"} src={logo1} />
            </Logos>
            <Wrap>
              <Logos to="/endowment">
                <Logo src={logo2} />
              </Logos>
              <Logos
                to="https://www.timeshighereducation.com/world-university-rankings/tashkent-state-transport-university"
                target="blank"
              >
                <Logo src={logo3} />
              </Logos>
              <Logos
                white={"true"}
                to="https://www.4icu.org/uz/"
                target="blank"
              >
                <Logo src={logo4} />
              </Logos>
            </Wrap>
          </Left>
          <Right isopen={isOpen.toString()}>
            {navbar.map(
              ({ id, title, path, hidden }) =>
                hidden && (
                  <Link key={id} to={path}>
                    {title}
                  </Link>
                )
            )}
            <Link>
              <Logo search={"true"} src={search} alt="search" />
              Qidiruv
            </Link>
            <Link to="/">
              <Logo src={eye} />
            </Link>
          </Right>
        </Wrapper>
      </Container>
      <Subbar />
      {/* <div style={{ transform: "translateY(60px)" }}> */}
      <Outlet />
      {/* </div> */}
    </div>
  );
};

export default Navbar;
