import React from "react";
import { Container, Ul, Li, Link } from "./style";

const Breadcrumb = ({ breadcrumb }) => {
  return (
    <Container>
      <Ul $breadcrumb={breadcrumb}>
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
