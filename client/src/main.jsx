import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import DashBoard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Alumni from "./pages/Family.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "../src/components/Theme/ThemeProvider.jsx";
import Private_Route from "./components/PrivateRoute/Private_Route.jsx";
import Achievments from "./pages/Achievments.jsx";
import Family from "./pages/Family.jsx";


import Blog from "./pages/Blog.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },

      {
        path: "/dashboard",
        element: <Private_Route />,
        children: [
          {
            index: true,
            element: <DashBoard />,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/blog/:blogSlug",
        element:<Blog/>
      },
      {
        path: "/family",
        element: <Family/>,
      },
      {
        path: "/achievements",
        element: <Achievments />,
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
