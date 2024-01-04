import IlmiyMarkazCart from "../../components/IlmiyMarkazCart";
import { Content } from "./style";
import React from "react";

const Scientific = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="container">
      <div className="wrapper">
        <Content>
          {arr.map((e) => (
            <IlmiyMarkazCart
              key={e}
              border={`var(--borderCart)`}
              borderHover={`var(--bgHover)`}
            />
          ))}
        </Content>
      </div>
    </div>
  );
};

export default Scientific;
