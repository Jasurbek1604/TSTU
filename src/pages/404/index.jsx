import React from "react";
import none from "../../assets/images/404.png";
import { Container, Img, Wrapper, Status, Desc, Wrap, Btn } from "./style";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container data-aos="zoom-in">
      <Wrapper>
        <Img src={none} />
        <Wrap>
          <Status>404</Status>
          <Desc>sahifa topilmadi</Desc>
          <Btn
            type={"primary"}
            onClick={() => navigate("/home")}
            $padding={"16px 32px"}
            fontSize={"14px"}
          >
            Asosiyga qaytish
          </Btn>
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
