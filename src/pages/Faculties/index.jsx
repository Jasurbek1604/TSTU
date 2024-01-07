import React from "react";
import { Content } from "./style";
import fak from "../../assets/icons/fakdark.png";
import back from "../../assets/images/bggggg.png";
import FacultyCart from "../../components/FacultyCart";

const Faculties = () => {
  const arr = [
    {
      id: 0,
      img: fak,
      title: "Transport tizimlari boshqaruvi fakulteti",
      bg: back,
    },
    {
      id: 1,
      img: fak,
      title: "Transport tizimlari boshqaruvi fakulteti",
      bg: back,
    },
    {
      id: 2,
      img: fak,
      title: "Transport tizimlari boshqaruvi fakulteti",
      bg: back,
    },
    {
      id: 3,
      img: fak,
      title: "Transport tizimlari boshqaruvi fakulteti",
      bg: back,
    },
    {
      id: 4,
      img: fak,
      title: "Transport tizimlari boshqaruvi fakulteti",
      bg: back,
    },
    {
      id: 5,
      img: fak,
      title: "Transport tizimlari boshqaruvi fakulteti",
      bg: back,
    },
    {
      id: 6,
      img: fak,
      title: "Transport tizimlari boshqaruvi fakulteti",
      bg: back,
    },
    {
      id: 7,
      img: fak,
      title: "Transport tizimlari boshqaruvi fakulteti",
      bg: back,
    },
    {
      id: 8,
      img: fak,
      title: "Transport tizimlari boshqaruvi fakulteti",
      bg: back,
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <Content data-aos="fade-up">
          <div className="title">Fakultetlar</div>
          <Content.Body>
            {arr.map(({ id, img, title, bg }) => {
              return <FacultyCart img={img} title={title} back={bg} key={id} />;
            })}
          </Content.Body>
        </Content>
      </div>
    </div>
  );
};

export default Faculties;
