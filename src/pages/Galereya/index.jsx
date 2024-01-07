import React from "react";
import { Absolute, Grid, Header, Showcase } from "./style";
import { NavLink } from "react-router-dom";
import img1 from "../../assets/Galereya/1.png";
import img2 from "../../assets/Galereya/2.png";
import img3 from "../../assets/Galereya/3.png";
import img4 from "../../assets/Galereya/4.png";
import img5 from "../../assets/Galereya/5.png";
import img6 from "../../assets/Galereya/6.png";
import img7 from "../../assets/Galereya/7.png";
import img8 from "../../assets/Galereya/2.png";
import icon from "../../assets/Galereya/btn.png";

const Galereya = () => {
  return (
    <div
      className="container"
      style={{ background: "var(--white)", padding: "50px 0" }}
    >
      <div className="wrapper">
        <Header data-aos="fade-down">
          <NavLink to="/">
            <Header.Logo />
          </NavLink>
          <Header.Right>
            <Header.Link>Kategoriya</Header.Link>
            <Header.Link>3D galereya</Header.Link>
            <Header.Link>Tadbirlardan</Header.Link>
            <Header.Link>Umumiy</Header.Link>
            <Header.Link>
              <Header.Earth />
              <Header.Select>
                <option value="O'zb">O'zb</option>
              </Header.Select>
            </Header.Link>
          </Header.Right>
        </Header>
        <Showcase data-aos="fade-up">
          <Absolute>
            <Absolute.Title>
              Transport Universiteti hayoti rasmlarda
            </Absolute.Title>
            <Absolute.Desc>
              Lorem ipsum dolor sit amet consectetur. Non diam turpis adipiscing
              velit suspendisse. Sed mauris erat ornare mattis donec. Arcu
              consequat tincidunt felis faucibus et aliquam.
            </Absolute.Desc>
            <Absolute.Btn type="primary">
              <img src={icon} alt="" />
              universitetga <br /> 3d sayohat
            </Absolute.Btn>
          </Absolute>
          <Grid>
            <Grid.Item src={img1} $col={"4/5"} $row={"1/2"} />
            <Grid.Item src={img2} $col={"4/5"} $row={"2/3"} />
            <Grid.Item src={img3} $col={"4/5"} $row={"3/4"} />
            <Grid.Item src={img4} $col={"3/4"} $row={"2/4"} />
            <Grid.Item src={img5} $col={"2/3"} $row={"3/4"} />
            <Grid.Item src={img8} $col={"1/2"} $row={"4/5"} />
            <Grid.Item src={img7} $col={"2/3"} $row={"4/5"} />
            <Grid.Item src={img6} $col={"3/5"} $row={"4/5"} />
          </Grid>
        </Showcase>
      </div>
    </div>
  );
};

export default Galereya;
