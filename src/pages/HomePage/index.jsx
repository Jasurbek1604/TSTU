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
  Layout,
  Top,
  DarkSection,
  InteraktiveCarts,
  Fakultetlar,
  Talim,
  Faxriy,
  Talaba,
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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

      <Layout className="container">
        <div className="wrapper">
          <Top>
            <div className="top">
              <div className="top__title">Universitet yangiliklari</div>
              {window.innerWidth > 600 && (
                <div className="top__button">
                  Barchasini ko‘rish<div className="abs"></div>
                </div>
              )}
            </div>
          </Top>
          <div className="flex">
            <div className="flex__large">
              <img className="flex__large__img" src={bg} />
              <div className="absolute">
                <div className="absTop">
                  <span>TOP istalgani </span>
                  <span>TSTU | Yan 04, 2023</span>
                </div>
                <div className="asbTitle">
                  Yangi avtomobil modeli o‘ylab topildi <Icons.LightArrow />
                </div>
              </div>
            </div>
            <div className="flex__item">
              <div className="flex__item__box">
                <img className="flex__item__box__img" src={bg} />
                <div className="flex__item__box__fart">
                  <div className="divv">
                    <span className="left">Ta'lim</span>
                    <span className="date">TSTU | Yan 04, 2023</span>
                  </div>
                  <div className="fartTitle">
                    Yangi avtomobil modeli o‘ylab topildi <Icons.DarkArrow />
                  </div>
                </div>
              </div>
              <div className="flex__item__box">
                <img className="flex__item__box__img" src={bg} />
                <div className="flex__item__box__fart">
                  <div className="divv">
                    <span className="left">Ta'lim</span>
                    <span className="date">TSTU | Yan 04, 2023</span>
                  </div>
                  <div className="fartTitle">
                    Yangi avtomobil modeli o‘ylab topildi <Icons.DarkArrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex__item">
              <div className="flex__item__box">
                <img className="flex__item__box__img" src={bg} />
                <div className="flex__item__box__fart">
                  <div className="divv">
                    <span className="left">Ta'lim</span>
                    <span className="date">TSTU | Yan 04, 2023</span>
                  </div>
                  <div className="fartTitle">
                    Yangi avtomobil modeli o‘ylab topildi <Icons.DarkArrow />
                  </div>
                </div>
              </div>
              <div className="flex__item__box">
                <img className="flex__item__box__img" src={bg} />
                <div className="flex__item__box__fart">
                  <div className="divv">
                    <span className="left">Ta'lim</span>
                    <span className="date">TSTU | Yan 04, 2023</span>
                  </div>
                  <div className="fartTitle">
                    Yangi avtomobil modeli o‘ylab topildi <Icons.DarkArrow />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex__large">
              <img className="flex__large__img" src={bg} />
              <div className="absolute">
                <div className="absTop">
                  <span>TOP istalgani </span>
                  <span>TSTU | Yan 04, 2023</span>
                </div>
                <div className="asbTitle">
                  Yangi avtomobil modeli o‘ylab topildi <Icons.LightArrow />
                </div>
              </div>
            </div>
          </div>
          <Top>
            <div className="top">
              {window.innerWidth < 600 && (
                <div className="top__button">
                  Barchasini ko‘rish<div className="abs"></div>
                </div>
              )}
            </div>
          </Top>
        </div>
      </Layout>

      <Layout className="container">
        <div className="wrapper">
          <Top>
            <div className="top">
              <div className="top__title">Kutilyotgan tadbirlar</div>
              {window.innerWidth > 600 && (
                <div className="top__button">
                  Barcha tadbirlarni ko‘rish <div className="abs"></div>
                </div>
              )}
            </div>
          </Top>
          <div className="grid">
            <div
              style={{ order: window.innerWidth < 1013 && 2 }}
              className="grid__item"
            >
              <div className="grid__item__box">
                <img className="grid__item__box__img" src={bg} />
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
              </div>
              <div className="grid__item__box">
                <img className="grid__item__box__img" src={bg} />
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
              </div>
            </div>
            <div
              style={{ order: window.innerWidth < 1013 && 1 }}
              className="grid__large"
            >
              <img className="grid__large__img" src={vr} />
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
            </div>
            <div
              style={{ order: window.innerWidth < 1013 && 3 }}
              className="grid__large"
            >
              <div className="grid__large__news">
                {arr.map((e) => (
                  <div key={e} className="grid__large__news__item">
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
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Top>
            <div className="top">
              {window.innerWidth < 600 && (
                <div className="top__button">
                  Barcha tadbirlarni ko‘rish <div className="abs"></div>
                </div>
              )}
            </div>
          </Top>
        </div>
      </Layout>

      <DarkSection className="container">
        <div className="wrapper">
          <Top $type="dark">
            <div className="top">
              <div className="top__title">Interaktiv xizmatlar</div>
              {window.innerWidth > 600 && (
                <div className="top__button">
                  Barchasini ko‘rish <div className="abs"></div>
                </div>
              )}
            </div>
          </Top>
          <InteraktiveCarts>
            <div className="first">
              <div className="first__left">
                <Icons.Int4 />
                <div className="first__left__title">
                  Universitet interaktiv xizmatlaridan unumli foydalaning!{" "}
                  {window.innerWidth < 1023 ? (
                    <Icons.DarkArrow />
                  ) : (
                    <Icons.BigDarkArrow />
                  )}
                </div>
              </div>
              <div className="first__right">
                <img src={mackbook} alt="" className="first__right__macbook" />
                <img src={iMac} alt="" className="first__right__imac" />
              </div>
            </div>
            <div className="second">
              <div className="second__item">
                <div>
                  <Icons.Int1 />
                </div>
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
          <Top $type="dark">
            <div className="top">
              {window.innerWidth < 600 && (
                <div className="top__button">
                  Barcha tadbirlarni ko‘rish <div className="abs"></div>
                </div>
              )}
            </div>
          </Top>
        </div>
      </DarkSection>

      <Fakultetlar className="container">
        <div className="wrapper">
          <Top>
            <div className="top">
              <div className="top__title">Fakultet va kafedralar</div>
              <div className="top__button">
                Barchasini ko‘rish <div className="abs"></div>
              </div>
            </div>
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
      </Fakultetlar>

      {/* <Talim className="container">
        <div className="wrapper">
          <Top>
            <div className="top">
              <div className="top__title">Ta’lim</div>
              <div className="top__button">
                Barchasini ko‘rish <div className="abs"></div>
              </div>
            </div>
            <div className="subtitle">
              Fikr agar yaxshi tarbiyat topsa, Xanjar, olmosday bo’lur o’tkir.
            </div>
          </Top>
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
            <div className="top">
              <div className="top__title">Faxriy professor-o‘qituvchilar</div>
            </div>
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
            <div className="top">
              <div className="top__title">Talabaning hayoti</div>
              {window.innerWidth > 1023 && (
                <div className="top__title" style={{ width: "430px" }}>
                  Talabaning fikri
                </div>
              )}
            </div>
            <div className="subtitle">
              Universitetda talabalar o'z vaqtlarini mazmunli o'tkazishlari
              uchun ko'plab sharoitlar yaratilgan
            </div>
          </Top>
          <Layout>
            <div className="grid">
              <div
                style={{ order: window.innerWidth < 1013 && 2 }}
                className="grid__item"
              >
                <div className="grid__item__box">
                  <img className="grid__item__box__img" src={arm} />
                  <div className="absolute">
                    <div className="asbTitle">
                      ARM o‘quv zallari <Icons.LightArrow />
                    </div>
                  </div>
                </div>
                <div className="grid__item__box">
                  <img className="grid__item__box__img" src={yoshlar} />
                  <div className="absolute">
                    <div className="asbTitle">
                      Yoshlar ittifoqining boshlang‘ich tashkiloti{" "}
                      <Icons.LightArrow />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ order: window.innerWidth < 1013 && 1 }}
                className="grid__large"
              >
                <img className="grid__large__img" src={run} />
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
              </div>
              <div
                style={{ order: window.innerWidth < 1013 && 1 }}
                className="grid__large"
              >
                <img className="grid__large__img" src={filterSt} />
                <div className="student">
                  <img src={jasco} alt="" className="student__img" />
                  <div className="student__name">O‘telbayev Jasurbek</div>
                  <div className="student__group">AT-3 gruh 3-kurs</div>
                  <div className="student__p">
                    Lorem ipsum dolor sit amet consectetur. Odio mattis lorem
                    adipiscing cursus in cursus enim mauris eget. Amet viverra
                    sit sociis amet viverra velit a. A integer congue etiam
                    condimentum penatibus at. Lectus magna facilisis maecenas
                    scelerisque in eget. Ultrices quam vel commodo feugiat
                    malesuada eget amet habitasse. Enim nullam neque in viverra.
                    Aenean ut est venenatis id tempor habitasse morbi feugiat
                    non. Purus amet nibh egestas vulputat
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </div>
      </Talaba> */}

      {/* <DarkSection className="container">
        <div className="wrapper">
          <Top $type="dark">
            <div className="top">
              <div className="top__title">Tadqiqotlar</div>
              <div className="top__button">
                Barcha tadbirlarni ko‘rish<div className="abs"></div>
              </div>
            </div>
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
            <div className="top">
              <div className="top__title">Ilmiy markazlar</div>
              <div className="top__button">
                Barcha ko‘rish<div className="abs"></div>
              </div>
            </div>
            <div className="subtitle">
              Kashfiyotlar qilish bizning dunyomiz, sog'ligimiz va intellektual
              hayotimiz uchun muhimdir
            </div>
          </Top>
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

      {/* <div style={{ marginTop: "48px" }} className="container">
        <div className="wrapper">
          <Top>
            <div className="top">
              <div className="top__title">Faxriy bitiruvchilar</div>
              <div className="top__button">
                Barchasini ko‘rish
                <div className="abs"></div>
              </div>
            </div>
            <div className="subtitle">
              Bugungi kunda universitetning ko'plab bitiruvchilari O'zbekiston
              vazirliklari, idoralari va qonun chiqaruvchi organlarida rahbarlik
              lavozimlarini egallab,dunyoning yetakchi xalqaro tashkilotlari va
              yirik kompaniyalarida muvaffaqiyatli faoliyat yuritmoqdalar
            </div>
          </Top>
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
