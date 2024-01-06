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
    items: [
      {
        id: 0,
        title: "Biz haqimizda",
        links: [
          { id: 0, path: "/", link: "Strategik rivojlantirish dasturi" },
          { id: 1, path: "/", link: "Barqaror rivojlanish maqsadlari" },
          { id: 2, path: "/", link: "Tarix" },
          { id: 3, path: "/", link: "Asosiy ma'lumotlar" },
          { id: 4, path: "/", link: "Me’yoriy hujjatlar" },
          { id: 5, path: "/", link: "Moliyaviy hisobotlar" },
          { id: 6, path: "/", link: "Universitet nizomi" },
          { id: 7, path: "/", link: "Korrupsiyaga qarshi kurashish" },
        ],
      },
      {
        id: 1,
        title: "Tuzilma va boshqaruv organlari",
        links: [
          { id: 0, path: "/", link: "Tashkiliy tuzilma" },
          { id: 1, path: "/", link: "Kuzatuv Kengashi" },
          { id: 2, path: "/", link: "Universitet Kengashi" },
          { id: 3, path: "/", link: "Jamoatchilik kengashi" },
          { id: 4, path: "/", link: "Rektorat" },
          { id: 5, path: "/", link: "Fakultetlar" },
          { id: 6, path: "/", link: "Kafedralar" },
          { id: 7, path: "/", link: "Boshqarma va bo'limlar" },
          { id: 8, path: "/", link: "Markazlar" },
          { id: 9, path: "/", link: "Muzey" },
          { id: 10, path: "/", link: "Sport majmuasi" },
        ],
      },
      {
        id: 2,
        links: [
          { id: 0, path: "/", link: "Markazlar" },
          { id: 1, path: "/", link: "Muzey" },
          { id: 2, path: "/", link: "Sport majmuasi" },
        ],
      },
    ],
  },
  {
    id: 4,
    icon: <Icons.Univer />,
    title: "Universitet",
    desc: "Toshkent davlat transport universiteti transport sohasi uchun oliy maʼlumotli mutaxassislar va ilmiy kadrlarni tayyorlash, qayta tayyorlash va ularning malakasini oshirish boʼyicha tayanch oliy taʼlim muassasasi hisoblanadi.",
    items: [
      {
        id: 0,
        links: [
          { id: 0, path: "/contact", link: "Contact" },
          { id: 1, path: "/faq", link: "Faq" },
          { id: 2, path: "/rector", link: "Rektorga murojat" },
          { id: 3, path: "/scientific-center", link: "Limiy markaz" },
          { id: 4, path: "/history", link: "Bizning tariq" },
          { id: 5, path: "/sport", link: "Sport majmuasi" },
          { id: 6, path: "/admisson", link: "Qabul komissiyasi" },
          { id: 7, path: "/honorary", link: "Faxriy professor o‘qtuvchilar" },
        ],
      },
      {
        id: 0,
        links: [
          { id: 0, path: "/centers", link: "Markazlar" },
          { id: 1, path: "/404", link: "404" },
          { id: 2, path: "/faculties", link: "Fakultetlar" },
          { id: 3, path: "/news", link: "Yangiliklar" },
          { id: 4, path: "/rectorat", link: "Rektorat" },
          { id: 5, path: "/arm", link: "Axborot Resuslari markazi" },
          { id: 6, path: "/galereya", link: "Galereya" },
          { id: 7, path: "/departments", link: "Bo‘limlar va boshqarmalar" },
        ],
      },
      {
        id: 0,
        links: [
          {
            id: 0,
            path: "/interactive-services",
            link: "Interaktiv xizmatlari",
          },
          {
            id: 1,
            path: "/signup",
            link: "Registratsiya",
          },
          {
            id: 2,
            path: "/signin",
            link: "Kirish",
          },
        ],
      },
    ],
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
