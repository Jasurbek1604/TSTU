import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Showcase from "../../components/Showcase";
import icon1 from "../../assets/icons/university-03.svg";
import icon2 from "../../assets/icons/university-20.svg";
import icon3 from "../../assets/icons/university-26.svg";
import icon4 from "../../assets/icons/university-07.svg";
import icon5 from "../../assets/icons/university-18.svg";
import icon6 from "../../assets/icons/university-09.svg";
import bg from "../../assets/images/gridBg.jpg";
import vr from "../../assets/images/vr.png";
import { Button } from "../../components/Generics/";
import {
  About,
  Box,
  Boxes,
  Count,
  Description,
  Fart,
  Grid,
  Icon,
  Img,
  Item,
  Layout,
  Min,
  Title,
  Top,
  TopButton,
  TopTitle,
  Bg,
  News,
  NewsItem,
} from "./style";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <About className="container">
        <div className="wrapper">
          <Title>Transport universiteti haqida</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur. Ultricies sit et lacinia
            lorem at. A donec suspendisse tortor scelerisque sagittis nunc
            maecenas risus. Aliquam magna aliquam tincidunt hendrerit. Viverra
            sit non sagittis vivamus at molestie donec urna. Nisi placerat
            vivamus consequat tincidunt ac purus vel. Ultrices quis adipiscing
            quam pellentesque quam nullam nunc. Nulla ultricies ultrices
            faucibus nunc at vitae id cursus sit. Lacinia netus lorem eu vel
            enim ultrices semper lacus laoreet. Amet pellentesque leo netus
            tincidunt volutpat phasellus ut.
          </Description>
          <Boxes>
            <Box>
              <Icon src={icon1} />
              <Count>18.700+</Count>
              <Min>talabalar soni</Min>
            </Box>
            <Box>
              <Icon src={icon2} />
              <Count>18.700+</Count>
              <Min>talabalar soni</Min>
            </Box>
            <Box>
              <Icon src={icon3} />
              <Count>18.700+</Count>
              <Min>talabalar soni</Min>
            </Box>
            <Box>
              <Icon src={icon4} />
              <Count>18.700+</Count>
              <Min>talabalar soni</Min>
            </Box>
            <Box>
              <Icon src={icon5} />
              <Count>18.700+</Count>
              <Min>talabalar soni</Min>
            </Box>
            <Box>
              <Icon src={icon6} />
              <Count>18.700+</Count>
              <Min>talabalar soni</Min>
            </Box>
          </Boxes>
          <Button type="primary" fontSize={16} radius={7} padding={"7px 38px"}>
            Yanada ko‘proq bilish
          </Button>
        </div>
      </About>
      <Layout className="container">
        <div className="wrapper">
          <Top>
            <TopTitle>Universitet yangiliklari</TopTitle>
            <TopButton type="dark">
              Barchasini ko‘rish <div className="abs"></div>
            </TopButton>
          </Top>
          <Grid style={{ padding: "30px 0" }}>
            <Item style={{ gridColumn: "1/3" }}>
              <Bg src={bg} />
              <div className="absolute">
                <div className="absTop">
                  <span>TOP istalgani </span>
                  <span>TSTU | Yan 04, 2023</span>
                </div>
                <div className="asbTitle">
                  Yangi avtomobil modeli o‘ylab topildi
                </div>
              </div>
            </Item>
            <Item style={{ gridColumn: "3/4" }}>
              <Img src={bg} />
              <Fart>
                <div className="divv">
                  <span className="left">Ta'lim</span>
                  <span className="date">TSTU | Yan 04, 2023</span>
                </div>
                <div className="fartTitle">
                  Yangi avtomobil modeli o‘ylab topildi
                </div>
              </Fart>
            </Item>
            <Item style={{ gridColumn: "4/5" }}>
              <Img src={bg} />
              <Fart>
                <div className="divv">
                  <span className="left">Ta'lim</span>
                  <span className="date">TSTU | Yan 04, 2023</span>
                </div>
                <div className="fartTitle">
                  Yangi avtomobil modeli o‘ylab topildi
                </div>
              </Fart>
            </Item>
            <Item style={{ gridColumn: "1/2" }}>
              <Img src={bg} />
              <Fart>
                <div className="divv">
                  <span className="left">Ta'lim</span>
                  <span className="date">TSTU | Yan 04, 2023</span>
                </div>
                <div className="fartTitle">
                  Yangi avtomobil modeli o‘ylab topildi
                </div>
              </Fart>
            </Item>
            <Item style={{ gridColumn: "2/3" }}>
              <Img src={bg} />
              <Fart>
                <div className="divv">
                  <span className="left">Ta'lim</span>
                  <span className="date">TSTU | Yan 04, 2023</span>
                </div>
                <div className="fartTitle">
                  Yangi avtomobil modeli o‘ylab topildi
                </div>
              </Fart>
            </Item>
            <Item style={{ gridColumn: "3/5" }}>
              <Bg src={bg} />
              <div className="absolute">
                <div className="absTop">
                  <span>TOP istalgani </span>
                  <span>TSTU | Yan 04, 2023</span>
                </div>
                <div className="asbTitle">
                  Yangi avtomobil modeli o‘ylab topildi
                </div>
              </div>
            </Item>
          </Grid>
          <Top style={{ marginTop: "50px" }}>
            <TopTitle>Kutilyotgan tadbirlar</TopTitle>
            <TopButton>
              Barcha tadbirlarni ko‘rish <div className="abs"></div>
            </TopButton>
          </Top>
          <Grid
            style={{
              gridTemplateColumns: "315px 1fr 1fr",
              gridTemplateRows: "repeat(2,260px)",
              padding: "30px 0",
              gap: "8px",
            }}
          >
            <Item style={{ gridRow: "1/2" }} little="little">
              <Bg src={bg} />
              <div className="absolute">
                <div className="absTop">
                  <span>18:00, Dek 10, 2023</span>
                  <span>Pedagog</span>
                </div>
                <div className="asbTitle">Xalqaro seminar</div>
              </div>
            </Item>
            <Item style={{ gridRow: "1/3" }} little="little">
              <Bg src={vr} />
              <div className="absolute">
                <div className="absTop">
                  <span>18:00, Dek 10, 2023</span>
                  <span>Pedagog</span>
                </div>
                <div className="asbTitle">
                  Transport vaziri o‘rinbosarining tashrifi
                </div>
                <div className="absP">
                  Transport vaziri o‘rinbosari universitetda olib borilayotgan
                  ilmiy-tadqiqot va innovatsion faoliyat bilan tanishdi
                </div>
              </div>
            </Item>
            <News style={{ gridRow: "1/3" }}>
              <NewsItem></NewsItem>
              <NewsItem></NewsItem>
              <NewsItem></NewsItem>
              <NewsItem></NewsItem>
              <NewsItem></NewsItem>
              <NewsItem></NewsItem>
              <NewsItem></NewsItem>
              <NewsItem></NewsItem>
              <NewsItem></NewsItem>
            </News>
            <Item style={{ gridRow: "2/3" }} little="little">
              <Bg src={bg} />
              <div className="absolute">
                <div className="absTop">
                  <span>18:00, Dek 10, 2023</span>
                  <span>Pedagog</span>
                </div>
                <div className="asbTitle">Xalqaro seminar</div>
              </div>
            </Item>
          </Grid>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;
