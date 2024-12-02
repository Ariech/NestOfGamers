import App from "../App";
import FavoritesList from "../components/FavoritesList/FavoritesList";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "favorites",
    element: <FavoritesList />,
  },
];

export default routes;
