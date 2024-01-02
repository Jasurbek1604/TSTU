import React from "react";
import { Container, Ul, Li, Link } from "./style";

const Breadcrumb = ({ type }) => {
  return (
    <Container>
      <Ul $type={type}>
        <Li>
          <Link>Asosiy</Link>
        </Li>
        <Li>
          <Link>Asosiy</Link>
        </Li>
        <Li>
          <Link>Asosiy</Link>
        </Li>
      </Ul>
    </Container>
  );
};

export default Breadcrumb;
