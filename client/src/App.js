import "./App.css";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "./SignUp";
import Profile from "./Profile";
import Login from "./Login";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

export default appRouter;
