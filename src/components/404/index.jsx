import React from "react";
import none from "../../assets/images/404.png";
import { Button } from "../Generics";
import { Container, Img, Wrapper, Status, Desc } from "./style";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Img src={none} />
        <Status>404</Status>
        <Desc>sahifa topilmadi</Desc>
        <Button
          type={"primary"}
          onClick={() => navigate("/home")}
          padding={"16px 32px"}
          fontSize={"14px"}
        >
          Asosiyga qaytish
        </Button>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
