
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import HomeRoute from "./Routes/Home";
import CreateRoute from "./Routes/Create";
import EventRoute from "./Routes/Event";


import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
  },
  {
    path: "/create",
    element: <CreateRoute />
    
  },
  {
    path: "/event",
    element: <EventRoute />
  }
]);



const theme = createTheme();




const App = ()=>{
return (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
)


}

export default App;
