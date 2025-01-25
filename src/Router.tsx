import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Step1 from "./components/Register/Step1";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Step1 />,
  },
]);
