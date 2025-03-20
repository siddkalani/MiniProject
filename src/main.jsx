import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Services from "./components/pages/servicesPage/Services.jsx";
import hotelStore from "./store/store.js";
import AYUSH from "./components/pages/ayushPage/AYUSH.jsx";
import Register from "./components/UserAuth/Register/RegisterPage.jsx";
import Login from "./components/UserAuth/Login/LoginPage.jsx";
import HealthMain from "./components/pages/healthCard/HealthMain.jsx";
import AyushServices from "./components/pages/ayushPage/AyushServicePage/AyushServices.jsx";
import EmailOTPVerify from "./components/UserAuth/EmailOTPVerification/EmailOTPVerify.jsx";
import AboutUsMain from "./components/pages/aboutUs/AboutUsMain.jsx";
import Cities from "./components/pages/cities/Cities.jsx";
import Delhi from "./components/pages/cities/Delhi.jsx";
import DashboardLayout from "./routes/DashboardLayout.jsx";
import Landing from "./components/Landing-page/Landing.jsx";
import PageTitle from "./dashboard/src/components/PageTitle.jsx";
import ECommerce from "./dashboard/src/pages/Dashboard/ECommerce.jsx";
import SignIn from './dashboard/src/pages/Authentication/SignIn';
import SignUp from './dashboard/src/pages/Authentication/SignUp';
import Calendar from './dashboard/src/pages/Calendar';
import Profile from './dashboard/src/pages/Profile';
import Settings from './dashboard/src/pages/Settings';
import Tables from './dashboard/src/pages/Tables';
import CartPage from "./components/Cart/CartPage.jsx";
import DefaultLayout from "./dashboard/src/layout/DefaultLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/app",
    element: <App />, 
    children: [
      {
        path: "",
        element: <DefaultLayout />, 
        children: [
          {
            index: true, 
            path: "",
            element: (
              <>
                <PageTitle title="HealGrimage" />
                <ECommerce />
              </>
            ),
          },
          {
            path: "calendar",  // Subpath under /app
            element: (
              <>
                <PageTitle title="HealGrimage" />
                <Calendar />
              </>
            ),
          },
          {
            path: "profile",
            element: (
              <>
                <PageTitle title="HealGrimage" />
                <Profile />
              </>
            ),
          },
          {
            path: "tables",
            element: (
              <>
                <PageTitle title="HealGrimage" />
                <Tables />
              </>
            ),
          },
          {
            path: "settings",
            element: (
              <>
                <PageTitle title="HealGrimage" />
                <Settings />
              </>
            ),
          },
        ]
      },
      {
        path: "ayush",
        element: <AYUSH />,
      },
      {
        path: "ayush/services",
        element: <AyushServices />,
      },
      {
        path: "healthcard",
        element: <HealthMain />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "aboutus",
        element: <AboutUsMain />,
      },
      {
        path: "cities",
        element: <Cities />,
      },
      {
        path: "/app/cart",
        element: <CartPage/>,
      },
      {
        path: "delhi",
        element: <Delhi />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={hotelStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
