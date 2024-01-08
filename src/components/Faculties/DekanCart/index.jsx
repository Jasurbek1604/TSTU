import React from "react";
import { NavLink } from "react-router-dom";
import { Content } from "./style";

const DekanCart = ({ name, position, links, img }) => {
  return (
    <Content>
      <Content.Img src={img} />
      <Content.Name>{name}</Content.Name>
      <Content.Position>{position}</Content.Position>
      <Content.Media>
        <NavLink to={`/${links[0]}`}>
          <Content.Facebook />
        </NavLink>
        <NavLink to={`/${links[0]}`}>
          <Content.Whatsup />
        </NavLink>
        <NavLink to={`/${links[0]}`}>
          <Content.Instagram />
        </NavLink>
      </Content.Media>
    </Content>
  );
};

export default DekanCart;
