import ReactDOM from "react-dom/client";
import { lazy, Suspense, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Restaurant from "./components/Restuarant";
import Contact from "./components/ContactComponent";
import { useState } from "react";
import UserContext from "./utils/UserContext";

// import Grocerry from "./components/Grocerry";

const Grocerry = lazy(() => import("./components/Grocerry"));
const App = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    // Make api call and I got the data
    const data = { name: "Abhishek Ikhar" };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
        path: "/contact",
        element: <Contact />,
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
