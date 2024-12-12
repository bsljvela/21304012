import { ClientLayout } from "../layouts/ClientLayout";
import { Home } from "../pages/client/Home";

const routesClient = [
  {
    path: "/",
    layout: ClientLayout,
    component: Home,
  },
  {
    path: "/home",
    layout: ClientLayout,
    component: Home,
  },
];

export default routesClient;

