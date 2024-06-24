import Checkout from "../pages/Checkout";
import Home from "../pages/Home";

export const allRoutes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/carrinho",
    element: <Checkout />,
  },
];
