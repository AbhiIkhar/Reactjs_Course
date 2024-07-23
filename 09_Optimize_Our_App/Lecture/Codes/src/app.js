import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Restaurant from "./components/Restuarant";
import SignupForm from "./components/SignUp";
// import Grocerry from "./components/Grocerry";

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
        path: "/restaurant/:resId",
        element: <Restaurant />,
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
