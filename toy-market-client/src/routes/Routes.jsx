import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddToys from "../pages/Home/AddToys/AddToys";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import UpdateToys from "../pages/UpdateToys/UpdateToys";
import AllToys from "../pages/AllToys/AllToys";
import ViewToyDetails from "../pages/AllToys/ViewToyDetails";
import ViewVehicleDetails from "../pages/Home/ShopByCategories/ViewVehicleDetails";
import Error from "../pages/Error/Error";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "addToy",
        element: (
          <PrivateRoute>
            <AddToys></AddToys>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "myToys/updateToyDetails/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) =>
          fetch(`https://toy-market-server-tan.vercel.app/addToys/${params.id}`),
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "allToys/viewToyDetails/:id",
        element: <PrivateRoute><ViewToyDetails></ViewToyDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://toy-market-server-tan.vercel.app/addToys/${params.id}`),
      },
      {
        path: "viewVehicleDetails/:id",
        element: <PrivateRoute><ViewVehicleDetails></ViewVehicleDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://toy-market-server-tan.vercel.app/addToys/${params.id}`),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>
      },
    ],
  },
  {
    path: '*',
    element: <Error></Error>
  },
]);

export default router;
