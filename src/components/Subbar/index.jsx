import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Left,
  Right,
  Link,
  Select,
  Menu,
  Img,
  Arrow,
} from "./style";
import menu from "../../assets/icons/menu.svg";
import down from "../../assets/icons/down.svg";
import earth from "../../assets/icons/earth.svg";

const Subbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link>Yangiliklar</Link>
          <Link>E’lonlar</Link>
          <Link>Universitet</Link>
          <Link>Tal’im</Link>
          <Select>
            Universitet
            <Arrow src={down} />
          </Select>
          <Select>
            Tal’im
            <Arrow src={down} />
          </Select>
          <Select>
            Ilm-fan
            <Arrow src={down} />
          </Select>
          <Select>
            Xalqaro aloqalar
            <Arrow src={down} />
          </Select>
          <Select>
            Ma'naviyat
            <Arrow src={down} />
          </Select>
          <Select>
            Bitiruvchi
            <Arrow src={down} />
          </Select>
        </Left>
        <Right>
          <Select>
            <Arrow src={earth} />
            O'zb
            <Arrow lang="true" src={down} />
          </Select>
          <Menu>
            <Img src={menu} />
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Subbar;
