import MainRoot from "../components/site";
import AdminRoot from "../components/admin";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import SignUpPage from "../pages/signUpPage";
import DashBoard from "../pages/admin/dashboard";
import UserAdminPage from "../pages/admin/user";

const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "/admin/",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <UserAdminPage />,
      },
      {
        path: "dashboard",
        element: <DashBoard />,
      },
    ],
  },
];

export default ROUTES;
