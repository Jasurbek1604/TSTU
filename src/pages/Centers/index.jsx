import React from "react";
import { Content } from "./style";
import center from "../../assets/images/center.jpg";
import { useNavigate } from "react-router-dom";

const Centers = () => {
  const naviagte = useNavigate();
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="container">
      <div className="wrapper">
        <Content>
          {arr.map((e) => (
            <Content.Item key={e} onClick={() => naviagte(`${e}`)}>
              <Content.Img src={center} />
              <Content.Title>
                Raqamli ta’lim va texnologiyalar markazi
              </Content.Title>
            </Content.Item>
          ))}
        </Content>
      </div>
    </div>
  );
};

export default Centers;
