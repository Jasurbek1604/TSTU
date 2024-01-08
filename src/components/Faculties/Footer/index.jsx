import React from "react";
import { Container } from "./style";
import { NavLink } from "react-router-dom";
import { Content } from "./style";

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <div className="wrapper">
          <Content>
            <Content.Item>
              <Content.P>
                Cursus risus at ultrices mi tempus. Varius vel pharetra vel
                turpis nunc eget lorem dolor sed. Porttitor lacus luctus
                accumsan tortor posuere ac ut consequat
              </Content.P>
              <Content.Media>
                <NavLink>
                  <Content.Facebook />
                </NavLink>
                <NavLink>
                  <Content.Whatsapp />
                </NavLink>
                <NavLink>
                  <Content.Twitter />
                </NavLink>
                <NavLink>
                  <Content.Instagram />
                </NavLink>
              </Content.Media>
            </Content.Item>
            <Content.Item>
              <Content.Title>Popular Links</Content.Title>
              <Content.Link>About</Content.Link>
              <Content.Link>Features</Content.Link>
              <Content.Link>Team</Content.Link>
              <Content.Link>Blog</Content.Link>
              <Content.Link>Blog</Content.Link>
            </Content.Item>
            <Content.Item>
              <Content.Title>Popular Links</Content.Title>
              <Content.Link>About</Content.Link>
              <Content.Link>Features</Content.Link>
              <Content.Link>Team</Content.Link>
              <Content.Link>Blog</Content.Link>
              <Content.Link>Blog</Content.Link>
            </Content.Item>
            <Content.Item>
              <Content.Title>Contacts</Content.Title>
              <Content.P>
                Feugiat nisl pretium fusce id velit ut tortor pretium viverra.
                Nunc pulvinar sapien et ligula ullamcorper proin
              </Content.P>
              <Content.Contact>
                <Content.Phone />
                <div>
                  <div>(101) 222 123 456</div>
                  <div>(101) 222 123 456</div>
                </div>
              </Content.Contact>
              <Content.Contact>
                <Content.Email />
                <div>
                  <div>company@saas.com</div>
                  <div>support@saas-stakk.com</div>
                </div>
              </Content.Contact>
            </Content.Item>
            <Content.Item>
              <Content.Title>Our Lcation</Content.Title>
            </Content.Item>
          </Content>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
