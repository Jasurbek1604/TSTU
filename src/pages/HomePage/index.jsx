import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Showcase from "../../components/Showcase";
import mackbook from "../../assets/images/Macbook.png";
import iMac from "../../assets/images/iMac.png";
import fakdark from "../../assets/icons/fakdark.png";
import faklight from "../../assets/icons/faklight.png";
import kafedra from "../../assets/images/kafedra.png";
import bg from "../../assets/images/gridBg.jpg";
import vr from "../../assets/images/vr.png";
import { Button } from "../../components/Generics/";
import {
  About,
  Fart,
  Grid,
  Img,
  Item,
  Layout,
  Top,
  TopButton,
  TopTitle,
  Bg,
  News,
  NewsItem,
  DarkSection,
  InteraktiveCarts,
  Fakultetlar,
  Talim,
  Faxriy,
  Talaba,
  Subtitle,
  FakGrid,
  Icons,
  Line,
} from "./style";
import Slider from "react-slick";
import prof from "../../assets/images/prof.jpg";
import arm from "../../assets/images/arm.jpg";
import yoshlar from "../../assets/images/yoshlar.jpg";
import filterSt from "../../assets/images/filterSt.png";
import jasco from "../../assets/images/jasco.jpg";
import run from "../../assets/images/run.jpg";
import filter from "../../assets/images/filterBg.png";
import ramatova from "../../assets/images/ramatova.jpg";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverd, setHovered] = useState(null);

  const handleHover = (e) => {
    setHovered(e);
    setIsHovered(true);
  };

  const handleLeave = (e) => {
    setHovered(null);
    setIsHovered(false);
  };

  let arr = [];
  for (let i = 0; i < 30; i++) {
    arr.push(i);
  }

  const CustomArrow = ({ className, onClick, icon }) => (
    <div className={className} onClick={onClick}>
      {icon}
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <CustomArrow className="custom-prev-arrow" icon={"darkArrow"} />,
    nextArrow: <CustomArrow className="custom-next-arrow" icon={"darkArrow"} />,
  };

  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Header />
      <Showcase />

      <About className="container">
        <div className="wrapper about">
          <div className="about__title">Transport universiteti haqida</div>
          <div className="about__desc">
            Lorem ipsum dolor sit amet consectetur. Ultricies sit et lacinia
            lorem at. A donec suspendisse tortor scelerisque sagittis nunc
            maecenas risus. Aliquam magna aliquam tincidunt hendrerit. Viverra
            sit non sagittis vivamus at molestie donec urna. Nisi placerat
            vivamus consequat tincidunt ac purus vel. Ultrices quis adipiscing
            quam pellentesque quam nullam nunc. Nulla ultricies ultrices
            faucibus nunc at vitae id cursus sit. Lacinia netus lorem eu vel
            enim ultrices semper lacus laoreet. Amet pellentesque leo netus
            tincidunt volutpat phasellus ut.
          </div>
          <div className="about__boxes">
            <div className="about__boxes__box">
              <Icons.Icon1 />
              <div className="about__boxes__box__count">18.700+</div>
              <div className="about__boxes__box__min">talabalar soni</div>
            </div>
            <div className="about__boxes__box">
              <Icons.Icon2 />
              <div className="about__boxes__box__count">18.700+</div>
              <div className="about__boxes__box__min">talabalar soni</div>
            </div>
            <div className="about__boxes__box">
              <Icons.Icon3 />
              <div className="about__boxes__box__count">18.700+</div>
              <div className="about__boxes__box__min">talabalar soni</div>
            </div>
            <div className="about__boxes__box">
              <Icons.Icon4 />
              <div className="about__boxes__box__count">18.700+</div>
              <div className="about__boxes__box__min">talabalar soni</div>
            </div>
            <div className="about__boxes__box">
              <Icons.Icon5 />
              <div className="about__boxes__box__count">18.700+</div>
              <div className="about__boxes__box__min">talabalar soni</div>
            </div>
            <div className="about__boxes__box">
              <Icons.Icon6 />
              <div className="about__boxes__box__count">18.700+</div>
              <div className="about__boxes__box__min">talabalar soni</div>
            </div>
          </div>
          <Button type="primary" className="about__button">
            Yanada ko‘proq bilish
          </Button>
        </div>
      </About>

      {/* <Layout className="container">
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
                  Yangi avtomobil modeli o‘ylab topildi <Icons.LightArrow />
                </div>
              </div>
            </Item>
            <Item $border="true" style={{ gridColumn: "3/4" }}>
              <Img src={bg} />
              <Fart>
                <div className="divv">
                  <span className="left">Ta'lim</span>
                  <span className="date">TSTU | Yan 04, 2023</span>
                </div>
                <div className="fartTitle">
                  Yangi avtomobil modeli o‘ylab topildi <Icons.DarkArrow />
                </div>
              </Fart>
            </Item>
            <Item $border="true" style={{ gridColumn: "4/5" }}>
              <Img src={bg} />
              <Fart>
                <div className="divv">
                  <span className="left">Ta'lim</span>
                  <span className="date">TSTU | Yan 04, 2023</span>
                </div>
                <div className="fartTitle">
                  Yangi avtomobil modeli o‘ylab topildi <Icons.DarkArrow />
                </div>
              </Fart>
            </Item>
            <Item $border="true" style={{ gridColumn: "1/2" }}>
              <Img src={bg} />
              <Fart>
                <div className="divv">
                  <span className="left">Ta'lim</span>
                  <span className="date">TSTU | Yan 04, 2023</span>
                </div>
                <div className="fartTitle">
                  Yangi avtomobil modeli o‘ylab topildi <Icons.DarkArrow />
                </div>
              </Fart>
            </Item>
            <Item $border="true" style={{ gridColumn: "2/3" }}>
              <Img src={bg} />
              <Fart>
                <div className="divv">
                  <span className="left">Ta'lim</span>
                  <span className="date">TSTU | Yan 04, 2023</span>
                </div>
                <div className="fartTitle">
                  Yangi avtomobil modeli o‘ylab topildi <Icons.DarkArrow />
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
                  <Icons.LightArrow />
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
            <Item style={{ gridRow: "1/2" }} $little="little">
              <Bg src={bg} />
              <div className="absolute">
                <div className="absTop">
                  <span>
                    <Icons.Calendar /> 18:00, Dek 10, 2023
                  </span>
                  <span>
                    <Icons.Person /> Pedagog
                  </span>
                </div>
                <div className="asbTitle">
                  Xalqaro seminar <Icons.LightArrow />
                </div>
              </div>
            </Item>
            <Item style={{ gridRow: "1/3" }} $little="little">
              <Bg src={vr} />
              <div className="absolute">
                <div className="absTop">
                  <span>
                    <Icons.Calendar /> 18:00, Dek 10, 2023
                  </span>
                  <span>
                    <Icons.Person /> Pedagog
                  </span>
                </div>
                <div className="asbTitle">
                  Transport vaziri o‘rinbosarining tashrifi
                </div>
                <div className="absP">
                  Transport vaziri o‘rinbosari universitetda olib borilayotgan
                  ilmiy-tadqiqot va innovatsion faoliyat bilan tanishdi
                </div>
              </div>
              <div className="next">
                <Icons.LightArrow />
              </div>
            </Item>
            <News style={{ gridRow: "1/3", cursor: "auto" }}>
              {arr.map((e) => (
                <NewsItem key={e}>
                  <div className="item-left">
                    <div>10</div> <div className="dek">Dek</div>
                  </div>
                  <div className="item-center">
                    <div className="item-center__title">
                      "Olmaliq kon-metallurgiya talabalar kombinati"ga
                      ekskursiya
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
              ))}
            </News>
            <Item style={{ gridRow: "2/3" }} $little="little">
              <Bg src={bg} />
              <div className="absolute">
                <div className="absTop">
                  <span>
                    <Icons.Calendar /> 18:00, Dek 10, 2023
                  </span>
                  <span>
                    <Icons.Person /> Pedagog
                  </span>
                </div>
                <div className="asbTitle">
                  Xalqaro seminar <Icons.LightArrow />
                </div>
              </div>
            </Item>
          </Grid>
        </div>
      </Layout> */}

      {/* <DarkSection className="container">
        <div className="wrapper">
          <Top $type="dark">
            <TopTitle $type="dark">Interaktiv xizmatlar</TopTitle>
            <TopButton>
              Barchasini ko‘rish <div className="abs"></div>
            </TopButton>
          </Top>
          <InteraktiveCarts>
            <div className="first">
              <div className="first__left">
                <img src={Icons.intIcon4} alt="" className="first__left__img" />
                <div className="first__left__title">
                  Universitet interaktiv xizmatlaridan unumli foydalaning!{" "}
                  <Icons.BigDarkArrow />
                </div>
              </div>
              <div className="first__right">
                <img src={mackbook} alt="" className="first__right__macbook" />
                <img src={iMac} alt="" className="first__right__imac" />
              </div>
            </div>
            <div className="second">
              <div className="second__item">
                <Icons.Int1 />
                <div className="second__item__title">
                  Moodle masofaviy ta'lim <Icons.DarkArrow />
                </div>
              </div>
              <div className="second__item">
                <Icons.Int2 />
                <div className="second__item__title">
                  Moodle masofaviy ta'lim <Icons.DarkArrow />
                </div>
              </div>
              <div className="second__item">
                <Icons.Int3 />
                <div className="second__item__title">
                  Moodle masofaviy ta'lim <Icons.DarkArrow />
                </div>
              </div>
              <div className="second__item">
                <Icons.Int4 />
                <div className="second__item__title">
                  Moodle masofaviy ta'lim <Icons.DarkArrow />
                </div>
              </div>
            </div>
          </InteraktiveCarts>
        </div>
      </DarkSection> */}

      {/* <Fakultetlar className="container">
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
                    onMouseEnter={() => handleHover(e)}
                    onMouseLeave={() => handleLeave(e)}
                    className="fak-left__content__item"
                  >
                    <img
                      src={e === hoverd && isHovered ? faklight : fakdark}
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
      </Fakultetlar> */}

      {/* <Talim className="container">
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
          <div>
            <Slider className="slider" {...settings}>
              {arr.map((e) => (
                <div className="slider__item" key={e}>
                  <img src={bg} className="slider__item__img" alt="" />
                  <div className="slider__item__title">
                    Kunduzgi ta’lim <Icons.DarkArrow />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Talim> */}

      {/* <div className="container">
        <div className="wrapper">
          <Top>
            <TopTitle>Faxriy professor-o‘qituvchilar</TopTitle>
          </Top>
        </div>
      </div> */}

      {/* <Faxriy>
        <img src={filter} alt="" className="faxriyAbs__img" />
        <div className="faxriyAbs">
          <div className="container">
            <div className="wrapper">
              <div className="content">
                <img src={prof} alt="" className="content__img" />
                <div className="content__name">
                  Mirsalixov Baxodir Abdusamatovich
                </div>
                <div className="content__sub">
                  Dotsent , Fizika-matematika fanlari nomzodi
                </div>
                <div className="content__p">
                  Lorem ipsum dolor sit amet consectetur. Ullamcorper platea eu
                  vel enim ultrices lectus odio malesuada euismod. Amet dolor eu
                  vitae gravida fermentum lectus ut rutrum etiam. Diam ut dui a
                  mauris non aenean fermentum. Ultrices nisi pellentesque eu
                  tortor posuere in tellus congue. Adipiscing a neque eget
                  aliquam egestas arcu pharetra amet. Etiam vel tincidunt quis
                  porta massa vitae scelerisque pellentesque sem. At purus nec
                  ante commodo venenatis hac. Dui ultrices vitae pulvinar in.
                  Proin pretium nullam orci massa lectus interdum nisl.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Faxriy> */}

      {/* <Talaba className="container">
        <div className="wrapper">
          <Top>
            <TopTitle>Talabaning hayoti</TopTitle>
            <TopTitle>Talabaning fikri</TopTitle>
          </Top>
          <Subtitle>
            Universitetda talabalar o'z vaqtlarini mazmunli o'tkazishlari uchun
            ko'plab sharoitlar yaratilgan
          </Subtitle>
          <Grid
            style={{
              gridTemplateColumns: "315px 1fr 1fr",
              gridTemplateRows: "repeat(2,260px)",
              margin: "30px 0",
              gap: "8px",
            }}
          >
            <Item style={{ gridRow: "1/2" }} $little="little">
              <Bg src={arm} />
              <div className="absolute">
                <div className="asbTitle">
                  ARM o‘quv zallari <Icons.LightArrow />
                </div>
              </div>
            </Item>
            <Item style={{ gridRow: "1/3" }} $little="little">
              <Bg src={run} />
              <div className="absolute">
                <div className="asbTitle">«Transportchilar» sport klubi</div>
                <div className="absP">
                  «Transportchilar» sport klubi Voleybol sport turi bo‘yicha
                  Respublika oliy ligasida umumjamoa hisobida 5-o‘rinni
                  egalladi.
                </div>
              </div>
              <div className="next">
                <Icons.LightArrow />
              </div>
            </Item>
            <Item style={{ gridRow: "1/3" }} $little="little">
              <Bg src={filterSt} />
              <div className="student">
                <img src={jasco} alt="" className="student__img" />
                <div className="student__name">O‘telbayev Jasurbek</div>
                <div className="student__group">AT-3 gruh 3-kurs</div>
                <div className="student__p">
                  Lorem ipsum dolor sit amet consectetur. Odio mattis lorem
                  adipiscing cursus in cursus enim mauris eget. Amet viverra sit
                  sociis amet viverra velit a. A integer congue etiam
                  condimentum penatibus at. Lectus magna facilisis maecenas
                  scelerisque in eget. Ultrices quam vel commodo feugiat
                  malesuada eget amet habitasse. Enim nullam neque in viverra.
                  Aenean ut est venenatis id tempor habitasse morbi feugiat non.
                  Purus amet nibh egestas vulputat
                </div>
              </div>
            </Item>
            <Item style={{ gridRow: "2/3" }} $little="little">
              <Bg src={yoshlar} />
              <div className="absolute">
                <div className="asbTitle">
                  Yoshlar ittifoqining boshlang‘ich tashkiloti{" "}
                  <span>
                    <Icons.LightArrow />
                  </span>
                </div>
              </div>
            </Item>
          </Grid>
        </div>
      </Talaba> */}

      {/* <DarkSection className="container">
        <div className="wrapper">
          <Top $type="dark">
            <TopTitle $type="dark">Tadqiqotlar</TopTitle>
            <TopButton>
              Barcha tadbirlarni ko‘rish<div className="abs"></div>
            </TopButton>
          </Top>
          <div style={{ margin: "54px 0" }}>
            <div className="tadqiqot">
              <div className="tadqiqot__item">
                <div className="tadqiqot__item__title">Ilmiy markazlar</div>
              </div>
              <div className="tadqiqot__item">
                <div className="tadqiqot__item__title">Kutubxona</div>
              </div>
              <div className="tadqiqot__item">
                <div className="tadqiqot__item__title">Kitoblar</div>
              </div>
            </div>
            <Line $type="dark" />
            <div className="tadqiqot">
              <div className="tadqiqot__item">
                <div className="tadqiqot__item__count">12 ta</div>
                <div className="tadqiqot__item__p">
                  Lorem ipsum dolor sit amet consectetur. Odio mattis lorem
                  adipiscing cursus in
                </div>
              </div>
              <div className="tadqiqot__item">
                <div className="tadqiqot__item__count">12 ta</div>
                <div className="tadqiqot__item__p">
                  Lorem ipsum dolor sit amet consectetur. Odio mattis lorem
                  adipiscing cursus in
                </div>
              </div>
              <div className="tadqiqot__item">
                <div className="tadqiqot__item__count">12 ta</div>
                <div className="tadqiqot__item__p">
                  Lorem ipsum dolor sit amet consectetur. Odio mattis lorem
                  adipiscing cursus in
                </div>
              </div>
            </div>
          </div>
          <Top $type="dark">
            <TopTitle $type="dark">Ilmiy markazlar</TopTitle>
            <TopButton>
              Barcha ko‘rish<div className="abs"></div>
            </TopButton>
          </Top>
          <Subtitle $type="dark">
            Kashfiyotlar qilish bizning dunyomiz, sog'ligimiz va intellektual
            hayotimiz uchun muhimdir
          </Subtitle>
          <div className="markaz">
            <div className="markaz__item">
              <img src={kafedra} alt="" className="markaz__item__img" />
              <div className="markaz__item__title">
                Temir yo‘l transporti ilmiy tadqiqot markazi
              </div>
              <div className="markaz__item__p">
                Markaz professor-o‘qituvchilarning ilmiy-texnikaviy faoliyati
                natijalarini tijoratlashtirishning samarali.....
              </div>
              <div className="markaz__item__button">
                Ko‘proq malumot olish <Icons.LightArrow />
              </div>
            </div>
            <div className="markaz__item">
              <img src={kafedra} alt="" className="markaz__item__img" />
              <div className="markaz__item__title">
                Temir yo‘l transporti ilmiy tadqiqot markazi
              </div>
              <div className="markaz__item__p">
                Markaz professor-o‘qituvchilarning ilmiy-texnikaviy faoliyati
                natijalarini tijoratlashtirishning samarali.....
              </div>
              <div className="markaz__item__button">
                Ko‘proq malumot olish <Icons.LightArrow />
              </div>
            </div>
            <div className="markaz__item">
              <img src={kafedra} alt="" className="markaz__item__img" />
              <div className="markaz__item__title">
                Temir yo‘l transporti ilmiy tadqiqot markazi
              </div>
              <div className="markaz__item__p">
                Markaz professor-o‘qituvchilarning ilmiy-texnikaviy faoliyati
                natijalarini tijoratlashtirishning samarali.....
              </div>
              <div className="markaz__item__button">
                Ko‘proq malumot olish <Icons.LightArrow />
              </div>
            </div>
            <div className="markaz__item">
              <img src={kafedra} alt="" className="markaz__item__img" />
              <div className="markaz__item__title">
                Temir yo‘l transporti ilmiy tadqiqot markazi
              </div>
              <div className="markaz__item__p">
                Markaz professor-o‘qituvchilarning ilmiy-texnikaviy faoliyati
                natijalarini tijoratlashtirishning samarali.....
              </div>
              <div className="markaz__item__button">
                Ko‘proq malumot olish <Icons.LightArrow />
              </div>
            </div>
          </div>
        </div>
      </DarkSection> */}
      {/* 
      <div style={{ marginTop: "48px" }} className="container">
        <div className="wrapper">
          <Top>
            <TopTitle>Faxriy bitiruvchilar</TopTitle>
            <TopButton>
              Barchasini ko‘rish
              <div className="abs"></div>
            </TopButton>
          </Top>
          <Subtitle>
            Bugungi kunda universitetning ko'plab bitiruvchilari O'zbekiston
            vazirliklari, idoralari va qonun chiqaruvchi organlarida rahbarlik
            lavozimlarini egallab,dunyoning yetakchi xalqaro tashkilotlari va
            yirik kompaniyalarida muvaffaqiyatli faoliyat yuritmoqdalar
          </Subtitle>
        </div>
      </div> */}

      {/* <Faxriy>
        <img
          src={filter}
          alt=""
          style={{ height: "650px" }}
          className="faxriyAbs__img"
        />
        <div className="faxriyAbs">
          <div className="container">
            <div className="wrapper">
              <div className="content">
                <img src={ramatova} alt="" className="content__img" />
                <div className="content__name">
                  Ramatov Ochilboy Jumaniyazovich
                </div>
                <div className="content__sub">
                  O‘zbekiston Bosh vazirini birinchi o‘rinbosar
                </div>
                <div className="content__p">
                  Lorem ipsum dolor sit amet consectetur. Ullamcorper platea eu
                  vel enim ultrices lectus odio malesuada euismod. Amet dolor eu
                  vitae gravida fermentum lectus ut rutrum etiam. Diam ut dui a
                  mauris non aenean fermentum. Ultrices nisi pellentesque eu
                  tortor posuere in tellus congue. Adipiscing a neque eget
                  aliquam egestas arcu pharetra amet. Etiam vel tincidunt quis
                  porta massa vitae scelerisque pellentesque sem. At purus nec
                  ante commodo venenatis hac. Dui ultrices vitae pulvinar in.
                  Proin pretium nullam orci massa lectus interdum nisl.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Faxriy> */}

      <Footer />
    </div>
  );
};

export default HomePage;
