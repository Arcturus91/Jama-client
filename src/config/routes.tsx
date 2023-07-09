import {
  ChefPage,
  CreateMealPage,
  LoginPage,
  LandingPage,
  NotFoundPage,
  UpdateChefPage,
  UserPage,
  UpdateUserPage,
} from "../pages";
import MealDetailPage from "../pages/MealDetailPage";
import SignUpPage from "../pages/SignUpPage";
import UpdateMealPage from "../pages/UpdateMealPage";

interface RoutesProps {
  user: User | Chef | null;
  authentication: (user: Partial<User | Chef> | null) => void;
}

const routes = (props: RoutesProps) => {
  return [
    {
      path: "/",
      element: <LandingPage {...props} />,
    },
    { path: "/login", element: <LoginPage {...props} /> },
    { path: "/signup", element: <SignUpPage {...props} /> },
    {
      path: "/userpage/:id",
      element: <UserPage {...props} />,
    },
    {
      path: "/availablemeals/:id",
      element: <MealDetailPage {...props} />,
    },
    { path: "/chef/updateprofile", element: <UpdateChefPage {...props} /> },
    { path: "/user/updateprofile", element: <UpdateUserPage {...props} /> },
    {
      path: "/chefpage/:id",
      element: <ChefPage {...props} />,
    },
    {
      path: "/chef/createmeal",
      element: <CreateMealPage {...props} />,
    },
    {
      path:"/chef/updatemeal/:id",
      element: <UpdateMealPage {...props}/>
    },
    {path: "*",
      element:<NotFoundPage/>}
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
