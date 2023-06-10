import {
  ChefPage,
  CreateMealPage,
  HomePage,
  LoginPage,
  MealsPage,
  UpdateChefPage,
} from "../pages";
import MealDetailPage from "../pages/MealDetailPage";
import SignUpPage from "../pages/SignUpPage";

interface RoutesProps {
  user: User | Chef | null;
  authentication: (user: Partial<User | Chef> | null) => void;
}

const routes = (props: RoutesProps) => {
  return [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/availablemeals",
      element: <MealsPage {...props} />,
    },
    { path: "/login", element: <LoginPage {...props} /> },
    { path: "/signup", element: <SignUpPage {...props} /> },
    {
      path: "/availablemeals/:id",
      element: <MealDetailPage {...props} />,
    },
    { path: "/chef/updateprofile", element: <UpdateChefPage {...props} /> },
    {
      path: "/chefpage/:id",
      element: <ChefPage {...props} />,
    },
    {
      path: "/chef/createmeal",
      element: <CreateMealPage {...props} />,
    },
  ];
};

export default routes;

/*         <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/users" className="mr-4">
          Users
        </Link>

        <Link to="/meals">Meals</Link> */
