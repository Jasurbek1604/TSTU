import React from "react";
import { Container, Content, Left, Right } from "./style";

const Sidebar = () => {
  return (
    <Container>
      <div className="container">
        <div className="wrapper">
          <Content>
            <Left>left</Left>
            <Right>right</Right>
          </Content>
        </div>
      </div>
    </Container>
  );
};

export default Sidebar;
