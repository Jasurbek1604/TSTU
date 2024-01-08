import React from "react";
import Header from "../../../components/Faculties/Header";
import bg from "../../../assets/Faculties/bgFak.png";
import Showcase from "../../../components/Faculties/Showcase";
import { Top } from "../../HomePage/style";
import IlmiyMarkazCart from "../../../components/IlmiyMarkazCart";
import { IlmiyMarkaz, Kafedra, Malumot, Orinbosar } from "./style";
import { useNavigate } from "react-router-dom";
import noimg1 from "../../../assets/images/noimg1.jpg";
import noimg2 from "../../../assets/images/noimg2.jpg";
import dekan from "../../../assets/Faculties/dekan.png";
import DekanCart from "../../../components/Faculties/DekanCart";
import kaf1 from "../../../assets/Faculties/kaf1.png";
import kaf2 from "../../../assets/Faculties/kaf2.png";
import kaf3 from "../../../assets/Faculties/kaf3.png";
import Dekans from "../../../components/Faculties/Dekan";
import Footer from "../../../components/Faculties/Footer";

const FacultiesId = () => {
  const naviagte = useNavigate();
  const arr = [1, 2, 3, 4];
  const orinbosar = [
    {
      id: 1,
      name: "Aripov NodirQodirovich",
      img: dekan,
      position: "Dekan o'rinbosari",
      links: [
        "https://instagram.com",
        "https://youtube.com",
        "https://twitter.com",
      ],
    },
    {
      id: 2,
      name: "Aripov NodirQodirovich",
      img: dekan,
      position: "Dekan o'rinbosari",
      links: [
        "https://instagram.com",
        "https://youtube.com",
        "https://twitter.com",
      ],
    },
    {
      id: 3,
      name: "Aripov NodirQodirovich",
      img: dekan,
      position: "Dekan o'rinbosari",
      links: [
        "https://instagram.com",
        "https://youtube.com",
        "https://twitter.com",
      ],
    },
    {
      id: 4,
      name: "Aripov NodirQodirovich",
      img: dekan,
      position: "Dekan o'rinbosari",
      links: [
        "https://instagram.com",
        "https://youtube.com",
        "https://twitter.com",
      ],
    },
  ];
  return (
    <div>
      <Header />
      <Showcase
        $bg={bg}
        title={"Transport tizimlari boshqaruvi fakultetiga xush kelibsiz"}
        button={"Fakultet haqida batafsil bilish"}
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
            name={"Rasulov Marufdjan Xalikovich"}
            position={" Dekan, Professor, Texnika fanlari nomzodi"}
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
              <div className="top__title">Fakultet dekani o‘rinbosarlari</div>
            </div>
          </Top>
          <Orinbosar>
            {orinbosar.map(({ id, name, position, links, img }) => (
              <DekanCart
                key={id}
                name={name}
                position={position}
                links={links}
                img={img}
              />
            ))}
          </Orinbosar>
          <Top $border={"none"}>
            <div className="top">
              <div className="top__title">Fakultet e’lon va yangiliklari</div>
            </div>
          </Top>
          <Top $border={"none"}>
            <div className="top">
              <div className="top__title">
                Fakultet haqida ma’lumotdan va sertifikatlar
              </div>
            </div>
          </Top>
          <Malumot>
            <Malumot.Left>
              <Malumot.Img src={noimg2} $col={"1/3"} $row={"1/2"} />
              <Malumot.Img src={noimg1} $col={"1/2"} $row={"2/3"} />
              <Malumot.Img src={noimg1} $col={"2/3"} $row={"2/3"} />
            </Malumot.Left>
            <Malumot.Right>
              <Malumot.Div>
                <div className="title">Heading</div>
                <div className="p">
                  There is a moment in the life of any aspiring astronomer that
                  it is time to buy that first telescope. It’s exciting to think
                  about setting up your own viewing.
                </div>
              </Malumot.Div>
              <Malumot.Div>
                <div className="title">Heading</div>
                <div className="p">
                  There is a moment in the life of any aspiring astronomer that
                  it is time to buy that first telescope. It’s exciting to think
                  about setting up your own viewing.
                </div>
              </Malumot.Div>
              <Malumot.Div>
                <div className="title">Heading</div>
                <div className="p">
                  There is a moment in the life of any aspiring astronomer that
                  it is time to buy that first telescope. It’s exciting to think
                  about setting up your own viewing.
                </div>
              </Malumot.Div>
            </Malumot.Right>
          </Malumot>
          <Top $border={"none"}>
            <div className="top">
              <div className="top__title">Kafedralar</div>
            </div>
          </Top>
          <Kafedra>
            <Kafedra.Item
              onClick={() => naviagte(`kafedra-1`)}
              height={350}
              $col={"1/2"}
              $row={"1/3"}
              $bg={kaf1}
            >
              <Kafedra.Content>
                Transport intellektual tizimlari muhandisligi <Kafedra.Arrow />
              </Kafedra.Content>
            </Kafedra.Item>
            <Kafedra.Item
              onClick={() => naviagte(`kafedra-2`)}
              height={170}
              $col={"2/3"}
              $row={"1/2"}
              $bg={kaf2}
            >
              <Kafedra.Content>
                Transport logistikasi <Kafedra.Arrow />
              </Kafedra.Content>
            </Kafedra.Item>
            <Kafedra.Item
              onClick={() => naviagte(`kafedra-3`)}
              height={170}
              $col={"2/3"}
              $row={"2/3"}
              $bg={kaf3}
            >
              <Kafedra.Content>
                Yo'l harakatini tashkil etish <Kafedra.Arrow />
              </Kafedra.Content>
            </Kafedra.Item>
            <Kafedra.Item
              onClick={() => naviagte(`kafedra-4`)}
              height={350}
              $col={"3/4"}
              $row={"1/3"}
              $bg={kaf1}
            >
              <Kafedra.Content>
                Transport intellektual tizimlari muhandisligi <Kafedra.Arrow />
              </Kafedra.Content>
            </Kafedra.Item>
          </Kafedra>
          <Kafedra>
            <Kafedra.Item
              onClick={() => naviagte(`kafedra-5`)}
              height={254}
              $col={"1/2"}
              $row={"1/2"}
              $bg={kaf3}
            >
              <Kafedra.Content>
                Transport intellektual tizimlari muhandisligi <Kafedra.Arrow />
              </Kafedra.Content>
            </Kafedra.Item>
            <Kafedra.Item
              onClick={() => naviagte(`kafedra-6`)}
              height={254}
              $col={"2/3"}
              $row={"1/2"}
              $bg={kaf3}
            >
              <Kafedra.Content>
                Transport intellektual tizimlari muhandisligi <Kafedra.Arrow />
              </Kafedra.Content>
            </Kafedra.Item>
          </Kafedra>
          <Top $border={"none"}>
            <div className="top">
              <div className="top__title">Ilmiy markazlar</div>
            </div>
          </Top>
          <IlmiyMarkaz>
            {arr.map((e) => (
              <IlmiyMarkazCart
                key={e}
                onClick={() => naviagte(`/scientific-center/${e}`)}
                $border={"#CECECE"}
              />
            ))}
          </IlmiyMarkaz>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FacultiesId;
