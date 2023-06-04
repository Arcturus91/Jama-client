import { HomePage, MealsPage, UsersPage } from "../pages";
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUpPage";

const routes = (props) => {
  return [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/availablemeals",
      element: <MealsPage {...props} />,
    },
    {
      path: "/users",
      element: <UsersPage {...props} />,
    },
    { path: "/login", element: <LoginPage {...props} /> },
    { path: "/signup", element: <SignUpPage {...props} /> },
  ];
};

export default routes;

/*         <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/users" className="mr-4">
          Users
        </Link>
        <Link to="/chefs" className="mr-4">
          Chefs
        </Link>
        <Link to="/meals">Meals</Link> */
