import React from "react";
import { Content } from "./style";
import fak from "../../assets/icons/fakdark.png";
import back from "../../assets/images/bggggg.png";
import FacultyCart from "../../components/Faculties/FacultyCart";
import { useNavigate } from "react-router-dom";

const Faculties = () => {
  const arr = [
    {
      id: "faculty-0",
      img: fak,
      title: "Transport tizimlari boshqaruvi fakulteti",
      bg: back,
    },
    {
      id: "faculty-1",
      img: fak,
      title: "Transport tizimlari boshqaruvi fakulteti",
      bg: back,
    },
    {
      id: "faculty-2",
      img: fak,
      title: "Transport tizimlari boshqaruvi fakulteti",
      bg: back,
    },
    {
      id: "faculty-3",
      img: fak,
      title: "Transport tizimlari boshqaruvi fakulteti",
      bg: back,
    },
    {
      id: "faculty-4",
      img: fak,
      title: "Transport tizimlari boshqaruvi fakulteti",
      bg: back,
    },
    {
      id: "faculty-5",
      img: fak,
      title: "Transport tizimlari boshqaruvi fakulteti",
      bg: back,
    },
    {
      id: "faculty-6",
      img: fak,
      title: "Transport tizimlari boshqaruvi fakulteti",
      bg: back,
    },
    {
      id: "faculty-7",
      img: fak,
      title: "Transport tizimlari boshqaruvi fakulteti",
      bg: back,
    },
    {
      id: "faculty-8",
      img: fak,
      title: "Transport tizimlari boshqaruvi fakulteti",
      bg: back,
    },
  ];

  const naviagte = useNavigate();

  return (
    <div className="container">
      <div className="wrapper">
        <Content data-aos="fade-up">
          <div className="title">Fakultetlar</div>
          <Content.Body>
            {arr.map(({ id, img, title, bg }) => {
              return (
                <FacultyCart
                  img={img}
                  title={title}
                  back={bg}
                  key={id}
                  onClick={() => naviagte(`${id}`)}
                />
              );
            })}
          </Content.Body>
        </Content>
      </div>
    </div>
  );
};

export default Faculties;
