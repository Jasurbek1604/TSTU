import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Showcase from "../../components/Showcase";
import mackbook from "../../assets/images/Macbook.png";
import iMac from "../../assets/images/iMac.png";
import icon1 from "../../assets/icons/university-03.svg";
import icon2 from "../../assets/icons/university-20.svg";
import icon3 from "../../assets/icons/university-26.svg";
import icon4 from "../../assets/icons/university-07.svg";
import icon5 from "../../assets/icons/university-18.svg";
import icon6 from "../../assets/icons/university-09.svg";
import intIcon1 from "../../assets/icons/intIcon1.svg";
import intIcon2 from "../../assets/icons/intIocn2.svg";
import intIcon3 from "../../assets/icons/intIcon3.svg";
import intIcon4 from "../../assets/icons/intIcon4.svg";
import fakdark from "../../assets/icons/fakdark.png";
import faklight from "../../assets/icons/faklight.png";
import kafedra from "../../assets/images/kafedra.png";
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
  Interaktive,
  InteraktiveCarts,
  Fakultetlar,
  Talim,
  Faxriy,
  Talaba,
  Subtitle,
  FakGrid,
} from "./style";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (e) => {
    setIsHovered(true);
  };

  const handleLeave = (e) => {
    setIsHovered(false);
  };

  const imageSource = isHovered ? faklight : fakdark;

  let arr = [];

  for (let i = 0; i < 30; i++) {
    arr.push(i);
  }

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
            <TopButton>
              Barchasini ko‘rish <div className="abs"></div>
            </TopButton>
          </Top>
          <Grid style={{ margin: "30px 0" }}>
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
              margin: "30px 0",
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
            <News style={{ gridRow: "1/3", cursor: "auto" }}>
              <NewsItem>
                <div className="item-left">
                  <div>10</div> <div className="dek">Dek</div>
                </div>
                <div className="item-center">
                  <div className="item-center__title">
                    "Olmaliq kon-metallurgiya talabalar kombinati"ga ekskursiya
                  </div>
                  <div className="item-center__subtitle">
                    Okt 10, 2022 | TSTU Universiteti
                  </div>
                </div>
                <div className="item-right">
                  <a href="#" className="item-right__link">
                    Barcha
                  </a>
                </div>
              </NewsItem>
              <NewsItem>
                <div className="item-left">
                  <div>10</div> <div className="dek">Dek</div>
                </div>
                <div className="item-center">
                  <div className="item-center__title">
                    "Olmaliq kon-metallurgiya talabalar kombinati"ga ekskursiya
                  </div>
                  <div className="item-center__subtitle">
                    Okt 10, 2022 | TSTU Universiteti
                  </div>
                </div>
                <div className="item-right">
                  <a href="#" className="item-right__link">
                    Barcha
                  </a>
                </div>
              </NewsItem>
              <NewsItem>
                <div className="item-left">
                  <div>10</div> <div className="dek">Dek</div>
                </div>
                <div className="item-center">
                  <div className="item-center__title">
                    "Olmaliq kon-metallurgiya talabalar kombinati"ga ekskursiya
                  </div>
                  <div className="item-center__subtitle">
                    Okt 10, 2022 | TSTU Universiteti
                  </div>
                </div>
                <div className="item-right">
                  <a href="#" className="item-right__link">
                    Barcha
                  </a>
                </div>
              </NewsItem>
              <NewsItem>
                <div className="item-left">
                  <div>10</div> <div className="dek">Dek</div>
                </div>
                <div className="item-center">
                  <div className="item-center__title">
                    "Olmaliq kon-metallurgiya talabalar kombinati"ga ekskursiya
                  </div>
                  <div className="item-center__subtitle">
                    Okt 10, 2022 | TSTU Universiteti
                  </div>
                </div>
                <div className="item-right">
                  <a href="#" className="item-right__link">
                    Barcha
                  </a>
                </div>
              </NewsItem>
              <NewsItem>
                <div className="item-left">
                  <div>10</div> <div className="dek">Dek</div>
                </div>
                <div className="item-center">
                  <div className="item-center__title">
                    "Olmaliq kon-metallurgiya talabalar kombinati"ga ekskursiya
                  </div>
                  <div className="item-center__subtitle">
                    Okt 10, 2022 | TSTU Universiteti
                  </div>
                </div>
                <div className="item-right">
                  <a href="#" className="item-right__link">
                    Barcha
                  </a>
                </div>
              </NewsItem>{" "}
              <NewsItem>
                <div className="item-left">
                  <div>10</div> <div className="dek">Dek</div>
                </div>
                <div className="item-center">
                  <div className="item-center__title">
                    "Olmaliq kon-metallurgiya talabalar kombinati"ga ekskursiya
                  </div>
                  <div className="item-center__subtitle">
                    Okt 10, 2022 | TSTU Universiteti
                  </div>
                </div>
                <div className="item-right">
                  <a href="#" className="item-right__link">
                    Barcha
                  </a>
                </div>
              </NewsItem>{" "}
              <NewsItem>
                <div className="item-left">
                  <div>10</div> <div className="dek">Dek</div>
                </div>
                <div className="item-center">
                  <div className="item-center__title">
                    "Olmaliq kon-metallurgiya talabalar kombinati"ga ekskursiya
                  </div>
                  <div className="item-center__subtitle">
                    Okt 10, 2022 | TSTU Universiteti
                  </div>
                </div>
                <div className="item-right">
                  <a href="#" className="item-right__link">
                    Barcha
                  </a>
                </div>
              </NewsItem>{" "}
              <NewsItem>
                <div className="item-left">
                  <div>10</div> <div className="dek">Dek</div>
                </div>
                <div className="item-center">
                  <div className="item-center__title">
                    "Olmaliq kon-metallurgiya talabalar kombinati"ga ekskursiya
                  </div>
                  <div className="item-center__subtitle">
                    Okt 10, 2022 | TSTU Universiteti
                  </div>
                </div>
                <div className="item-right">
                  <a href="#" className="item-right__link">
                    Barcha
                  </a>
                </div>
              </NewsItem>{" "}
              <NewsItem>
                <div className="item-left">
                  <div>10</div> <div className="dek">Dek</div>
                </div>
                <div className="item-center">
                  <div className="item-center__title">
                    "Olmaliq kon-metallurgiya talabalar kombinati"ga ekskursiya
                  </div>
                  <div className="item-center__subtitle">
                    Okt 10, 2022 | TSTU Universiteti
                  </div>
                </div>
                <div className="item-right">
                  <a href="#" className="item-right__link">
                    Barcha
                  </a>
                </div>
              </NewsItem>{" "}
              <NewsItem>
                <div className="item-left">
                  <div>10</div> <div className="dek">Dek</div>
                </div>
                <div className="item-center">
                  <div className="item-center__title">
                    "Olmaliq kon-metallurgiya talabalar kombinati"ga ekskursiya
                  </div>
                  <div className="item-center__subtitle">
                    Okt 10, 2022 | TSTU Universiteti
                  </div>
                </div>
                <div className="item-right">
                  <a href="#" className="item-right__link">
                    Barcha
                  </a>
                </div>
              </NewsItem>{" "}
              <NewsItem>
                <div className="item-left">
                  <div>10</div> <div className="dek">Dek</div>
                </div>
                <div className="item-center">
                  <div className="item-center__title">
                    "Olmaliq kon-metallurgiya talabalar kombinati"ga ekskursiya
                  </div>
                  <div className="item-center__subtitle">
                    Okt 10, 2022 | TSTU Universiteti
                  </div>
                </div>
                <div className="item-right">
                  <a href="#" className="item-right__link">
                    Barcha
                  </a>
                </div>
              </NewsItem>{" "}
              <NewsItem>
                <div className="item-left">
                  <div>10</div> <div className="dek">Dek</div>
                </div>
                <div className="item-center">
                  <div className="item-center__title">
                    "Olmaliq kon-metallurgiya talabalar kombinati"ga ekskursiya
                  </div>
                  <div className="item-center__subtitle">
                    Okt 10, 2022 | TSTU Universiteti
                  </div>
                </div>
                <div className="item-right">
                  <a href="#" className="item-right__link">
                    Barcha
                  </a>
                </div>
              </NewsItem>{" "}
              <NewsItem>
                <div className="item-left">
                  <div>10</div> <div className="dek">Dek</div>
                </div>
                <div className="item-center">
                  <div className="item-center__title">
                    "Olmaliq kon-metallurgiya talabalar kombinati"ga ekskursiya
                  </div>
                  <div className="item-center__subtitle">
                    Okt 10, 2022 | TSTU Universiteti
                  </div>
                </div>
                <div className="item-right">
                  <a href="#" className="item-right__link">
                    Barcha
                  </a>
                </div>
              </NewsItem>{" "}
              <NewsItem>
                <div className="item-left">
                  <div>10</div> <div className="dek">Dek</div>
                </div>
                <div className="item-center">
                  <div className="item-center__title">
                    "Olmaliq kon-metallurgiya talabalar kombinati"ga ekskursiya
                  </div>
                  <div className="item-center__subtitle">
                    Okt 10, 2022 | TSTU Universiteti
                  </div>
                </div>
                <div className="item-right">
                  <a href="#" className="item-right__link">
                    Barcha
                  </a>
                </div>
              </NewsItem>{" "}
              <NewsItem>
                <div className="item-left">
                  <div>10</div> <div className="dek">Dek</div>
                </div>
                <div className="item-center">
                  <div className="item-center__title">
                    "Olmaliq kon-metallurgiya talabalar kombinati"ga ekskursiya
                  </div>
                  <div className="item-center__subtitle">
                    Okt 10, 2022 | TSTU Universiteti
                  </div>
                </div>
                <div className="item-right">
                  <a href="#" className="item-right__link">
                    Barcha
                  </a>
                </div>
              </NewsItem>
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
      <Interaktive className="container">
        <div className="wrapper">
          <Top type="dark">
            <TopTitle type="dark">Interaktiv xizmatlar</TopTitle>
            <TopButton>
              Barchasini ko‘rish <div className="abs"></div>
            </TopButton>
          </Top>
          <InteraktiveCarts>
            <div className="first">
              <div className="first__left">
                <img src={intIcon4} alt="" className="first__left__img" />
                <div className="first__left__title">
                  Universitet interaktiv xizmatlaridan unumli foydalaning!
                </div>
              </div>
              <div className="first__right">
                <img src={mackbook} alt="" className="first__right__macbook" />
                <img src={iMac} alt="" className="first__right__imac" />
              </div>
            </div>
            <div className="second">
              <div className="second__item">
                <img src={intIcon1} className="second__item__img" alt="" />
                <div className="second__item__title">
                  Moodle masofaviy ta'lim
                </div>
              </div>
              <div className="second__item">
                <img src={intIcon2} className="second__item__img" alt="" />
                <div className="second__item__title">
                  Moodle masofaviy ta'lim
                </div>
              </div>
              <div className="second__item">
                <img src={intIcon3} className="second__item__img" alt="" />
                <div className="second__item__title">
                  Moodle masofaviy ta'lim
                </div>
              </div>
              <div className="second__item">
                <img src={intIcon1} className="second__item__img" alt="" />
                <div className="second__item__title">
                  Moodle masofaviy ta'lim
                </div>
              </div>
            </div>
          </InteraktiveCarts>
        </div>
      </Interaktive>
      <Fakultetlar className="container">
        <div className="wrapper">
          <Top>
            <TopTitle>Fakultet va kafedralar</TopTitle>
            <TopButton>
              Barchasini ko‘rish <div className="abs"></div>
            </TopButton>
          </Top>
          <FakGrid>
            <div className="fak-left">
              <div className="fak-left__content">
                {arr.map((e) => (
                  <div
                    key={e}
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseLeave={(e) => handleLeave(e)}
                    className="fak-left__content__item"
                  >
                    <img
                      src={imageSource}
                      alt=""
                      className="fak-left__content__item__img"
                    />
                    <div className="fak-left__content__item__line"></div>
                    <div className="fak-left__content__item__title">
                      Transport tizimlari boshqaruvi fakulteti
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="wrap">
              <div className="fak-right">
                <div className="fak-right__title">Kafedralar</div>
                <div className="fak-right__cards">
                  {arr.map((e) => (
                    <div key={e} className="fak-right__cards__card">
                      <img
                        src={kafedra}
                        alt=""
                        className="fak-right__cards__card__img"
                      />
                      <div className="fak-right__cards__card__min">
                        Transport logistikasi
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FakGrid>
        </div>
      </Fakultetlar>
      <Talim className="container">
        <div className="wrapper">
          <Top>
            <TopTitle>Ta’lim</TopTitle>
            <TopButton>
              Barchasini ko‘rish <div className="abs"></div>
            </TopButton>
          </Top>
          <Subtitle>
            Fikr agar yaxshi tarbiyat topsa, Xanjar, olmosday bo’lur o’tkir.
          </Subtitle>
        </div>
      </Talim>
      <Faxriy className="container">
        <div className="wrapper">
          <Top>
            <TopTitle>Faxriy professor-o‘qituvchilar</TopTitle>
          </Top>
        </div>
      </Faxriy>
      <Talaba className="container">
        <div className="wrapper">
          <Top>
            <TopTitle>Talabaning hayoti</TopTitle>
            <TopTitle>Talabaning fikri</TopTitle>
          </Top>
          <Subtitle>
            Universitetda talabalar o'z vaqtlarini mazmunli o'tkazishlari uchun
            ko'plab sharoitlar yaratilgan
          </Subtitle>
        </div>
      </Talaba>

      <Footer />
    </div>
  );
};

export default HomePage;
