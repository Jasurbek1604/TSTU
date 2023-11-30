import React from "react";
import bg from "../../assets/images/footer.png";
import logo from "../../assets/icons/logo1.png";
import logo1 from "../../assets/icons/logo2.png";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";
import telegram from "../../assets/icons/telegram.svg";
import facebook from "../../assets/icons/facebook.svg";
import tel from "../../assets/icons/tel.svg";
import email from "../../assets/icons/email.svg";
import loc from "../../assets/icons/loc.svg";
import loc2 from "../../assets/icons/loc2.svg";
import mobil from "../../assets/images/mobilBg.png";
import {
  Container,
  Wrapper,
  Img,
  Left,
  Title,
  Icons,
  Icon,
  P,
  Media,
  Logo,
  Right,
  Row,
  Link,
  I,
  T,
  Btn,
} from "./style";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const a = window.innerWidth;
  return (
    <Container>
      <Img src={a > 600 ? bg : mobil} />
      <Wrapper>
        <Left>
          <Title>Transport Universiteti</Title>
          <Icons>
            <NavLink to="">
              <Icon src={logo} />
            </NavLink>
            <NavLink to="">
              <Icon src={logo1} />
            </NavLink>
          </Icons>
          <P>
            Talaba – bizning asosiy kuchimiz. Shu bois universitetimizda biror
            yangilik qilmoqchi bо‘lsak, albatta, ular bilan fikrlashamiz kerak.
          </P>
          <Media>
            <NavLink to="/">
              <Logo src={youtube} />
            </NavLink>
            <NavLink to="/">
              <Logo src={instagram} />
            </NavLink>
            <NavLink to="/">
              <Logo src={telegram} />
            </NavLink>
            <NavLink to="/">
              <Logo src={facebook} />
            </NavLink>
          </Media>
        </Left>
        <Right>
          <Row first="true">
            <Link to="tel:+998712990001">
              <I src={tel} />
              +998 71-299-00-01
            </Link>
            <Link to="mainto:rektorat@tstu.uz">
              <I src={email} />
              rektorat@tstu.uz
            </Link>
            <Link to="/">
              <I src={loc2} />
              Toshkent shahar Mirobod tumani Temiryo‘lchilar ko‘chasi 1-uy
            </Link>
            <Btn>
              <I src={loc} />
              manzil olish
            </Btn>
          </Row>
          <Row>
            <T>Biz haqimizda</T>
            <Link to="">Home</Link>
            <Link to="">Biz haqimizda</Link>
            <Link to="">T'lim</Link>
            <Link to="">Bitiruvchi</Link>
            <Link to="">Manaviyat</Link>
            <Link to="">Qabul komissiyasi</Link>
          </Row>
          <Row>
            <T>Havolalar</T>
            <Link to="">Hemins hodim</Link>
            <Link to="">Hemins talaba</Link>
            <Link to="">Kutubxona</Link>
            <Link to="">Corp mail</Link>
            <Link to="">Journal TSTU</Link>
            <Link to="">Moodle</Link>
          </Row>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
