import Centers from "../pages/Centers";
import Contact from "../pages/Contact";
import Faculties from "../pages/Faculties";
import Faq from "../pages/Faq";
import Honorary from "../pages/Honorary";
import News from "../pages/News";
import OurHistory from "../pages/OurHistory";
import Rector from "../pages/Rector";
import Scientific from "../pages/Scientific";
import Sport from "../pages/Sport";
import Admisson from "../pages/Admisson";
import ScientificId from "../pages/Scientific/ScientificId";
import HonoraryId from "../pages/Honorary/HonoraryId";
import CentersId from "../pages/Centers/CenterId";

export const navbar = [
  {
    id: 0,
    path: "/faq",
    element: <Faq />,
    isPrivate: false,
    type: "dark",
  },
  {
    id: 1,
    path: "/contact",
    element: <Contact />,
    isPrivate: false,
    type: "dark",
  },
  {
    id: 2,
    path: "/rector",
    element: <Rector />,
    isPrivate: false,
    type: "dark",
  },
  {
    id: 3,
    path: "/scientific-center",
    element: <Scientific />,
    isPrivate: false,
    title: "Ilmiy markazlar",
  },
  {
    id: 4,
    path: "/scientific-center/:id",
    element: <ScientificId />,
    isPrivate: false,
    title: "Temir yo‘l transporti ilmiy tadqiqot markazi",
  },
  {
    id: 5,
    path: "/history",
    element: <OurHistory />,
    isPrivate: false,
    title: "Bizning tarix",
  },
  {
    id: 6,
    path: "/sport",
    element: <Sport />,
    isPrivate: false,
    title: "Sport majmuasi",
  },
  {
    id: 7,
    path: "/admisson",
    element: <Admisson />,
    isPrivate: false,
    title: "Qabul komissiyasi",
  },
  {
    id: 8,
    path: "/centers",
    element: <Centers />,
    isPrivate: false,
    title: "Markazlar",
  },
  {
    id: 9,
    path: "/centers/:id",
    element: <CentersId />,
    isPrivate: false,
    title: "Markaz",
  },
  {
    id: 10,
    path: "/honorary",
    element: <Honorary />,
    isPrivate: false,
    title: "Faxriy professor o‘qtuvchilar",
  },
  {
    id: 11,
    path: "/honorary/:id",
    element: <HonoraryId />,
    isPrivate: false,
    title: "Faxriy professor o‘qtuvchi",
  },
  {
    id: 12,
    path: "/news",
    element: <News />,
    isPrivate: false,
    type: "dark",
  },
  {
    id: 13,
    path: "/faculties",
    element: <Faculties />,
    isPrivate: false,
    type: "dark",
  },
];
