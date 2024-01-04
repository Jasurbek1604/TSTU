import { useNavigate } from "react-router-dom";
import IlmiyMarkazCart from "../../components/IlmiyMarkazCart";
import { Content } from "./style";
import React from "react";

const Scientific = () => {
  const navigate = useNavigate();
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
              onClick={() => navigate(`${e}`)}
            />
          ))}
        </Content>
      </div>
    </div>
  );
};

export default Scientific;
