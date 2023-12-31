import React, { useState } from "react";
import { sidebar } from "../../utils/sidebar";
import { Container, Content, Left, Right, Item, Icons } from "./style";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [hover, setHover] = useState(null);
  const navigate = useNavigate();
  return (
    <Container>
      <div className="container">
        <div className="wrapper">
          <Content>
            <Left>
              {sidebar.map(({ id, content, isSelect, path }) => (
                <Item
                  onMouseEnter={() => setHover(id)}
                  onMouseLeave={() => setHover(null)}
                  $select={isSelect ? "true" : "false"}
                  key={id}
                  onClick={() => isSelect === false && navigate(path)}
                >
                  {content}
                  {isSelect && (id === hover ? <Icons.Up /> : <Icons.Down />)}
                </Item>
              ))}
            </Left>
            <Right>
              <Item>
                <Icons.Earth /> O'zb <Icons.Down />
              </Item>
              <Item>
                <Icons.Menu />
              </Item>
            </Right>
          </Content>
        </div>
      </div>
    </Container>
  );
};

export default Sidebar;
