import { HomePage, MealsPage, UsersPage } from "../pages";

const routes = () => {
  return [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/availablemeals",
      element: <MealsPage />,
    },
    {
      path: "/users",
      element: <UsersPage />,
    },
  ];
};

export default routes;
