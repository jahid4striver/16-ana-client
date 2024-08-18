import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import AllBooks from "@/pages/AllBooks";
import SignUp from "@/pages/SignUp";
import Login from "@/pages/Login";
import PrivateRoutes from "@/auth/PrivateRoutes";
import AddNewBook from "@/pages/AddNewBook";
import BookDetails from "@/pages/BookDetails";
import EditBook from "@/pages/EditBook";
import MyWishList from "@/pages/MyWishList";
import Dashboard from "@/pages/Dashboard";
import OrdersList from "@/pages/OrdersList";
import NewSliderForm from "@/components/NewSliderForm";
import SliderImages from "@/pages/SliderImages";
import Thankyou from "@/pages/Thankyou";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
        children: [
          {
            path: "orders",
            element: <OrdersList />,
          },
          {
            path: "addsliderimages",
            element: <NewSliderForm />,
          },
          {
            path: "sliderimages",
            element: <SliderImages />,
          },
          {
            path: "addnewbook",
            element: <AddNewBook />,
          },
        ],
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "allbooks",
        element: <AllBooks />,
      },
      {
        path: "productdetails/:id",
        element: <BookDetails />,
      },
      {
        path: "edit/:id",
        element: <EditBook />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "wishlist",
        element: (
          <PrivateRoutes>
            <MyWishList />
          </PrivateRoutes>
        ),
      },
      {
        path: "orders",
        element: <OrdersList />,
      },
      {
        path: "thank-you_page--after_sale",
        element: <Thankyou />,
      },
    ],
  },
]);

export default routes;
