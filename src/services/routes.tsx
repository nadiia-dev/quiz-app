import { createBrowserRouter } from "react-router-dom";
import Quiz from "../pages/Quiz";
import App from "../App";
import Home from "../pages/Home";
import Summary from "../pages/Summary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "quiz", element: <Quiz /> },
      { path: "summary", element: <Summary /> },
    ],
  },
]);

export default router;
