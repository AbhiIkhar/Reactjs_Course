import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
// import Grocerry from "./components/Grocerry";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const Grocerry = lazy(() => import("./components/Grocerry"));
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
        path: "/grocerry",
        element: (
          <Suspense fallback={() => <h1>Loading...</h1>}>
            <Grocerry />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
