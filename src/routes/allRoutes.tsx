import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import OrderConfirmed from "../pages/OrderConfirmed";

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
  {
    id: 3,
    path: "/pedido-confirmado",
    element: <OrderConfirmed />,
  },
];
