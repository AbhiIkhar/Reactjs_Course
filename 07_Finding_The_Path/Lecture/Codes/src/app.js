import ReactDOM from "react-dom/client";
// import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "../src/components/About";
import Error from "./components/Error";
import Restaurant from "./components/Restuarant";
import SignupForm from "./components/SignUp";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurant />,
      },
      {
        path: "/signup",
        element: <SignupForm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
