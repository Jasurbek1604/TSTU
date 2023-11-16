import HomePage from "../pages/HomePage";

export const navbar = [
  {
    id: 1,
    path: "/home",
    title: "Home",
    element: <HomePage />,
    hidden: false,
    privete: false,
  },
  {
    id: 2,
    path: "/home",
    title: "Talaba",
    element: <HomePage />,
    hidden: true,
    privete: true,
  },
  {
    id: 3,
    path: "/home",
    title: "Hodim",
    element: <HomePage />,
    hidden: true,
    privete: true,
  },
  {
    id: 4,
    path: "/home",
    title: "Elektron kutubxona",
    element: <HomePage />,
    hidden: true,
    privete: true,
  },
  {
    id: 5,
    path: "/home",
    title: "Alumni",
    element: <HomePage />,
    hidden: true,
    privete: true,
  },
];
