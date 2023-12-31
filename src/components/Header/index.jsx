import React, { Children, useState } from "react";
import logo1 from "../../assets/icons/logo1.png";
import logo2 from "../../assets/icons/logo2.png";
import logo3 from "../../assets/icons/logo3.png";
import logo4 from "../../assets/icons/logo4.png";
import menu from "../../assets/icons/menu1.svg";
import earth from "../../assets/icons/earth.svg";
import search from "../../assets/icons/search.svg";
import eye from "../../assets/icons/eye.svg";
import x from "../../assets/icons/x-solid.svg";
import {
  Div,
  Img,
  Left,
  Container,
  Wrapper,
  Menus,
  Menu,
  Icon,
  Lang,
  Right,
  Link,
  Select,
  Bg,
} from "./style";

const Header = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <div className="container">
        <div className="wrapper">
          <Wrapper>
            <Bg
              $isopen={isOpen.toString()}
              onClick={() => setIsOpen(false)}
            ></Bg>
            <Menus style={{ width: "70px" }}>
              <Menu src={menu} onClick={() => setIsOpen(true)} />
            </Menus>
            <Left>
              <Link to="/">
                <Img src={logo1} />
              </Link>
              <Div>
                <Link to="/">
                  <Img src={logo2} />
                </Link>
                <Link to="https://www.timeshighereducation.com/world-university-rankings/tashkent-state-transport-university">
                  <Img src={logo3} />
                </Link>
                <Link to="https://www.4icu.org/uz/">
                  <Img src={logo4} $last="true" />
                </Link>
              </Div>
            </Left>
            <Right $isopen={isOpen.toString()}>
              <Link to="https://student.tstu.uz/dashboard/login">Talaba</Link>
              <Link to="https://hemis.tstu.uz/dashboard/login">Xodim</Link>
              <Link to="/arm">Elektron kutubxona</Link>
              <Link>Alumni</Link>
              <Link>
                <Icon src={search} width={24} />
                <div>Qidiruv</div>
              </Link>
              <Link>
                <Icon src={eye} width={27} />
              </Link>

              <Icon src={x} x="true" onClick={() => setIsOpen(false)} />
            </Right>
            <Lang>
              <Icon src={earth} />
              <Select name="" id="">
                <option value="O'zb">O'zb</option>
              </Select>
            </Lang>
          </Wrapper>
          {children}
        </div>
      </div>
    </Container>
  );
};

export default Header;
