import React from "react";
import bg from "../../../assets/Faculties/bgKaf.png";
import Header from "../../../components/Faculties/Header";
import Showcase from "../../../components/Faculties/Showcase";
import Dekans from "../../../components/Faculties/Dekan";
import dekan from "../../../assets/Faculties/rustam.png";
import { Top } from "../../HomePage/style";
import { Grid } from "./style";
import DekanCart from "../../../components/Faculties/DekanCart";

const Kafedra = () => {
  const data = [
    {
      id: 1,
      img: dekan,
      name: "Nigay Rоdion Pavlovich",
      position: "Dotsent, Texnika fanlari nomzodi, Dotsent",
      links: [
        "https://instagram.com",
        "https://instagram.com",
        "https://instagram.com",
      ],
    },
    {
      id: 1,
      img: dekan,
      name: "Nigay Rоdion Pavlovich",
      position: "Dotsent, Texnika fanlari nomzodi, Dotsent",
      links: [
        "https://instagram.com",
        "https://instagram.com",
        "https://instagram.com",
      ],
    },
    {
      id: 1,
      img: dekan,
      name: "Nigay Rоdion Pavlovich",
      position: "Dotsent, Texnika fanlari nomzodi, Dotsent",
      links: [
        "https://instagram.com",
        "https://instagram.com",
        "https://instagram.com",
      ],
    },
    {
      id: 1,
      img: dekan,
      name: "Nigay Rоdion Pavlovich",
      position: "Dotsent, Texnika fanlari nomzodi, Dotsent",
      links: [
        "https://instagram.com",
        "https://instagram.com",
        "https://instagram.com",
      ],
    },
    {
      id: 1,
      img: dekan,
      name: "Nigay Rоdion Pavlovich",
      position: "Dotsent, Texnika fanlari nomzodi, Dotsent",
      links: [
        "https://instagram.com",
        "https://instagram.com",
        "https://instagram.com",
      ],
    },
    {
      id: 1,
      img: dekan,
      name: "Nigay Rоdion Pavlovich",
      position: "Dotsent, Texnika fanlari nomzodi, Dotsent",
      links: [
        "https://instagram.com",
        "https://instagram.com",
        "https://instagram.com",
      ],
    },
    {
      id: 1,
      img: dekan,
      name: "Nigay Rоdion Pavlovich",
      position: "Dotsent, Texnika fanlari nomzodi, Dotsent",
      links: [
        "https://instagram.com",
        "https://instagram.com",
        "https://instagram.com",
      ],
    },
    {
      id: 1,
      img: dekan,
      name: "Nigay Rоdion Pavlovich",
      position: "Dotsent, Texnika fanlari nomzodi, Dotsent",
      links: [
        "https://instagram.com",
        "https://instagram.com",
        "https://instagram.com",
      ],
    },
    {
      id: 1,
      img: dekan,
      name: "Nigay Rоdion Pavlovich",
      position: "Dotsent, Texnika fanlari nomzodi, Dotsent",
      links: [
        "https://instagram.com",
        "https://instagram.com",
        "https://instagram.com",
      ],
    },
    {
      id: 1,
      img: dekan,
      name: "Nigay Rоdion Pavlovich",
      position: "Dotsent, Texnika fanlari nomzodi, Dotsent",
      links: [
        "https://instagram.com",
        "https://instagram.com",
        "https://instagram.com",
      ],
    },
    {
      id: 1,
      img: dekan,
      name: "Nigay Rоdion Pavlovich",
      position: "Dotsent, Texnika fanlari nomzodi, Dotsent",
      links: [
        "https://instagram.com",
        "https://instagram.com",
        "https://instagram.com",
      ],
    },
  ];
  return (
    <div>
      <Header />
      <Showcase
        $bg={bg}
        title={"Vagonlar va vagon xo’jaligi kafedrasi xush kelibsiz"}
        button={"kafedra haqida batafsil bilish"}
      />
      <div className="container">
        <div className="wrapper">
          <Top $border={"none"}>
            <div className="top">
              <div className="top__title">Fakultet dekani.</div>
            </div>
          </Top>
          <Dekans
            img={dekan}
            name={"Raximov Rustam Vyacheslavovich"}
            position={"Kafedra mudiri, professor, Texnika fanlari doktori"}
            phone={"+99871 299 00 10"}
            email={"marufdzhan.rasulov@bk.ru"}
            li={[
              "1976-1981 yy. – Toshkent temir yо‘l muhandislari instituti talabasi",
              "1987-1990 yy. – Moskva temir yо‘l muhandislari instituti aspiranti.",
            ]}
            button={"/"}
          />
          <Top $border={"none"}>
            <div className="top">
              <div className="top__title">
                Kafedra professor o‘qtuvchilari tarkibi
              </div>
            </div>
          </Top>
          <Grid>
            {data.map(({ id, img, name, position, links }) => (
              <DekanCart
                key={id}
                img={img}
                name={name}
                position={position}
                links={links}
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Kafedra;
