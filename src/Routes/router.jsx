import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import CardDetails from "../Components/CardDetails/CardDetails";
import DetailsTwo from "../Components/CardDetails/DetailsTwo";
import DetailsThree from "../Components/CardDetails/DetailsThree";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }
      ],
    },

    {
      path:'/details',
      element:<CardDetails></CardDetails>
    },
    {
      path:'/detailsTwo',
      element:<DetailsTwo></DetailsTwo>
    },
    {
      path:'/detailsThree',
      element:<DetailsThree></DetailsThree>
    },
  ]);
  