import React, { useState } from "react";
import callCenter from "../../assets/images/callRector.png";
import { Content, Btn, Item } from "./style";
import { Select, Input } from "../../components/Generics";

const Rector = () => {
  const [send, setSend] = useState(true);
  const [check, setCheck] = useState(false);
  const [oferma, setOferma] = useState(false);

  const onItemClick = ({ target: { id } }) => {
    switch (id) {
      case "send":
        setSend(true);
        setCheck(false);
        setOferma(false);
        break;
      case "check":
        setSend(false);
        setCheck(true);
        setOferma(false);
        break;
      case "oferma":
        setSend(false);
        setCheck(false);
        setOferma(true);
        break;
    }
  };

  const uz = {
    color: "#01426F",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "140%",
  };
  const def = {
    color: "#A6A6A6",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "140%",
  };
  const region = [
    {
      id: 0,
      value: "Qoraqalpogʻiston Respublikasi",
      label: <p style={uz}>Qoraqalpogʻiston Respublikasi</p>,
    },
  ];
  const tuman = [
    {
      id: 0,
      value: "Kungrad",
      label: <p style={uz}>Kungrad</p>,
    },
  ];
  const mahalla = [
    {
      id: 0,
      value: "Kungrad",
      label: <p style={uz}>Kiyet OFY</p>,
    },
  ];
  const sex = [
    {
      id: 0,
      value: "Erkak",
      label: <p style={uz}>Erkak</p>,
    },
    {
      id: 0,
      value: "Ayol",
      label: <p style={uz}>Ayol</p>,
    },
  ];
  const country = [
    { id: 0, value: "O‘zbekiston", label: <p style={uz}>O‘zbekiston</p> },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <Content>
          <div className="content">
            <div className="content__left">
              <div className="content__left__title">
                Toshkent davlat Transport universiteti rektori{" "}
                <span className="content__left__title__span">
                  Abduraxmonov Odil Kalandarovich
                </span>{" "}
                virtual qabulxonasi
              </div>
              <div className="content__left__img">
                <img src={callCenter} alt="" />
              </div>
            </div>
            <div className="content__right">
              <div className="content__right__top">
                <Item
                  type={send.toString()}
                  className="content__right__top__item"
                  onClick={onItemClick}
                  id={"send"}
                >
                  Murojat yuborish
                </Item>
                <Item
                  type={check.toString()}
                  className="content__right__top__item"
                  onClick={onItemClick}
                  id={"check"}
                >
                  Murojatni tekshirish
                </Item>
                <Item
                  type={oferma.toString()}
                  className="content__right__top__item"
                  onClick={onItemClick}
                  id={"oferma"}
                >
                  Ommaviy offerta
                </Item>
              </div>
              <div className="content__right__desc">
                {send &&
                  "Sizda hal etilmagan masalalar, muammolar, ariza, shikoyat yoki takliflar bormi? U holda murojaatingizni to‘g‘ridan-to‘g‘ri Toshkent davlat transport universiteti rektoriga yuborishingiz mumkin."}
                {check &&
                  "Murojatni tekshirish uchun elektron pochta manjilingizni kiriting"}
                {oferma && ""}
              </div>
              {send && (
                <form className="content__right__form">
                  <div className="content__right__form__item">
                    <Select defaultValue={"O‘zbekiston"} options={country} />
                    <Select defaultValue={"Viloyat"} options={region} />
                  </div>
                  <div className="content__right__form__item">
                    <Select defaultValue={"Tuman"} options={tuman} />
                    <Select defaultValue={"Mahalla"} options={mahalla} />
                  </div>
                  <Input type="text" placeholder={"Manzil:"} />
                  <div className="content__right__form__item">
                    <Input type={"text"} placeholder={"F.I.O"} />
                    <Input type={"date"} style={def} />
                  </div>
                  <div className="content__right__form__item">
                    <Select defaultValue={"Jinsi"} options={sex} />
                    <Select defaultValue={"Bandligi"} />
                  </div>
                  <div className="content__right__form__item">
                    <Input
                      type="text"
                      placeholder={"Telefon raqami:+99899 999 99 99"}
                    />
                    <Input
                      type="text"
                      placeholder={"Qo‘shimcha telefon raqami:+99899 999 99 99"}
                    />
                  </div>
                  <div className="content__right__form__item">
                    <Input type={"text"} placeholder={"Email"} />
                    <Input
                      type={"file"}
                      placeholder={"Yuborish uchun faylni tanlang"}
                    />
                  </div>
                  <div className="content__right__form__item">
                    <textarea
                      name=""
                      id=""
                      style={{
                        width: "100%",
                        padding: "12px 19px",
                        color: "black",
                        fontSize: " 16px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "140%",
                        outline: "none",
                        border: "1px solid #CECECE",
                        borderRadius: "4px",
                        height: "113px",
                      }}
                      placeholder="Murojat yo‘llash"
                    ></textarea>
                  </div>
                  <Btn type="primary">Yuborish</Btn>
                </form>
              )}
              {check && (
                <div className="content__right__form">
                  <Input placeholder={"Email"} type="text" />
                  <Btn type="primary">Yuborish</Btn>
                </div>
              )}
              {oferma && <h1>Oferma</h1>}
            </div>
          </div>
        </Content>
      </div>
    </div>
  );
};

export default Rector;
