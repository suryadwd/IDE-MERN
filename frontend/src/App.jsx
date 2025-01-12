import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Edit from "./pages/Edit";
const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/edit/:id",
    element: <Edit/>,
  },

]);

const App = () => {
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
};

export default App;
