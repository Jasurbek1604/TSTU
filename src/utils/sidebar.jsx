import ilm from "../assets/icons/univer.svg?react";
import univer from "../assets/icons/ilm.svg?react";
import qabul from "../assets/icons/qabul.svg?react";
import styled from "styled-components";

const Icons = styled.div``;
Icons.Ilm = styled(ilm)``;
Icons.Qabul = styled(qabul)``;
Icons.Univer = styled(univer)``;

export const sidebar = [
  { id: 0, content: "Yangiliklar", isSelect: false, path: "/news" },
  { id: 2, content: "E’lonlar", isSelect: false, path: "/elon" },
  { id: 3, content: "Universitet", isSelect: true },
  { id: 4, content: "Tal’im", isSelect: true },
  { id: 5, content: "Ilm-fan", isSelect: true },
  { id: 6, content: "Xalqaro aloqalar", isSelect: true },
  { id: 7, content: "Ma'naviyat", isSelect: true },
  { id: 8, content: "Qabul", isSelect: true },
  { id: 9, content: "Bitiruvchi", isSelect: true },
];

export const hoverContent = [
  {
    id: 3,
    icon: <Icons.Univer />,
    title: "Universitet",
    desc: "Toshkent davlat transport universiteti transport sohasi uchun oliy maʼlumotli mutaxassislar va ilmiy kadrlarni tayyorlash, qayta tayyorlash va ularning malakasini oshirish boʼyicha tayanch oliy taʼlim muassasasi hisoblanadi.",
  },
  {
    id: 5,
    icon: <Icons.Ilm />,
    title: "Ilm-fan",
    desc: "Universitet transport ta’lim sohasi bо‘yicha Respublikada tayanch oliy ta’lim muassasasi hisoblanadi. Bugungi kunda universitetda kredit-modul tizimi asosida aviatsiya transporti, temir yо‘l transporti, avtomobil transporti hamda qurilish sohalariga 60 ta bakalavriat ta’lim yо‘nalishlari va 41 ta magistratura mutaxassisligi bо‘yicha kadrlar tayyorlanmoqda.",
  },
  {
    id: 8,
    icon: <Icons.Qabul />,
    title: "Qabul komissiyasi",
    desc: "Toshkent davlat transport universiteti transport sohasi uchun oliy maʼlumotli mutaxassislar va ilmiy kadrlarni tayyorlash, qayta tayyorlash va ularning malakasini oshirish boʼyicha tayanch oliy taʼlim muassasasi hisoblanadi.",
  },
];
