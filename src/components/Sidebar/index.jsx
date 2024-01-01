import React, { useState } from "react";
import { sidebar, hoverContent } from "../../utils/sidebar";
import {
  Container,
  Wrapper,
  Content,
  Left,
  Right,
  Item,
  Icons,
  Hover,
} from "./style";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [hover, setHover] = useState(null);
  const navigate = useNavigate();
  return (
    <Container>
      <div className="container">
        <div className="wrapper">
          <Wrapper>
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
            {hoverContent.map(
              (item) =>
                item?.id === hover && (
                  <Hover
                    key={item?.id}
                    onMouseEnter={() => setHover(item.id)}
                    onMouseLeave={() => setHover(null)}
                  >
                    <Hover.Item>
                      <Hover.Title>
                        {item?.icon} {item?.title}
                      </Hover.Title>
                      <Hover.Sub $top="true">{item?.desc}</Hover.Sub>
                    </Hover.Item>
                    {item?.items?.map(({ id, title, links }) => (
                      <Hover.Item key={id}>
                        <Hover.Sub>{title}</Hover.Sub>
                        {links.map(({ id, path, link }) => (
                          <Hover.Link key={id} to={path}>
                            {link}
                          </Hover.Link>
                        ))}
                      </Hover.Item>
                    ))}
                  </Hover>
                )
            )}
          </Wrapper>
        </div>
      </div>
    </Container>
  );
};

export const UniversalSidebr = () => {
  const [hover, setHover] = useState(null);
  const navigate = useNavigate();
  return (
    <Wrapper>
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
      {hoverContent.map(
        (item) =>
          item?.id === hover && (
            <Hover
              key={item?.id}
              onMouseEnter={() => setHover(item.id)}
              onMouseLeave={() => setHover(null)}
            >
              <Hover.Item>
                <Hover.Title>
                  {item?.icon} {item?.title}
                </Hover.Title>
                <Hover.Sub $top="true">{item?.desc}</Hover.Sub>
              </Hover.Item>
              {item?.items?.map(({ id, title, links }) => (
                <Hover.Item key={id}>
                  <Hover.Sub>{title}</Hover.Sub>
                  {links.map(({ id, path, link }) => (
                    <Hover.Link key={id} to={path}>
                      {link}
                    </Hover.Link>
                  ))}
                </Hover.Item>
              ))}
            </Hover>
          )
      )}
    </Wrapper>
  );
};

export default Sidebar;
