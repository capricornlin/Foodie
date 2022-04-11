// import { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import React, { Suspense } from "react";
import Home from "./Pages/Home";
import Japan from "./Pages/Japan";
import Europe from "./Pages/Europe";
import Taiwan from "./Pages/Taiwan";
import America from "./Pages/America";
import Myselect from "./Pages/Myselect";
import Resturant from "./Pages/Resturant";
import Checkout from "./Pages/Checkout";

const routes = [
  {
    path: "/",
    element: <Home />,
    // element: React.lazy(() => import("./Pages/Home")),
    children: [],
  },
  {
    path: "/Checkout",
    element: <Checkout />,
    children: [],
  },
  {
    path: "/Japan",
    element: <Japan />,
    children: [],
  },
  {
    path: "/Europe",
    element: <Europe />,
    children: [],
  },

  {
    path: "/Taiwan",
    element: <Taiwan />,
    children: [],
  },
  {
    path: "/America",
    element: <America />,
    children: [
      // {
      //   path: "/1",
      //   element: <Test />,
      // },
      // {
      //   path: "/5",
      //   element: <Test />,
      // },
    ],
  },
  {
    path: "/Myselect",
    element: <Myselect />,
    children: [],
  },
  {
    path: "America/1",
    element: <Resturant resturantName="美式1" />,
    children: [],
  },
  {
    path: "America/5",
    element: <Resturant resturantName="美式5" />,
    children: [],
  },
  {
    path: "Taiwan/4",
    element: <Resturant resturantName="台式4" />,
    children: [],
  },
  {
    path: "Taiwan/8",
    element: <Resturant resturantName="台式8" />,
    children: [],
  },
  {
    path: "Taiwan/9",
    element: <Resturant resturantName="台式9" />,
    children: [],
  },
  {
    path: "Europe/3",
    element: <Resturant resturantName="歐式3" />,
    children: [],
  },
  {
    path: "Europe/6",
    element: <Resturant resturantName="歐式6" />,
    children: [],
  },
  {
    path: "Europe/10",
    element: <Resturant resturantName="歐式10" />,
    children: [],
  },
  {
    path: "Japan/2",
    element: <Resturant resturantName="日式2" />,
    children: [],
  },
  {
    path: "Japan/7",
    element: <Resturant resturantName="日式7" />,
    children: [],
  },
];

export default routes;
