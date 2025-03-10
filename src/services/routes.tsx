import { createBrowserRouter } from "react-router-dom";
import Quiz from "../pages/Quiz";
import App from "../App";
import ResultsPage from "../pages/ResultsPage";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "quiz", element: <Quiz /> },
      { path: "results", element: <ResultsPage /> },
    ],
  },
]);

export default router;
