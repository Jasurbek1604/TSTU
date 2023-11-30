import React from "react";
import bg from "../../assets/images/image.png";
import title from "../../assets/images/title.png";
import mobiletitle from "../../assets/images/mobiletitle.png";
import { Container, Img, Wrapper, Title } from "./style";
import Sidebar from "../Sidebar";

const Showcase = () => {
  const a = window.innerWidth;
  return (
    <Container>
      <Sidebar />
      <Img src={bg} />
      <Wrapper>
        <Title src={a > 600 ? title : mobiletitle} />
      </Wrapper>
    </Container>
  );
};

export default Showcase;
