import { createBrowserRouter } from "react-router-dom";
import Quiz from "../pages/Quiz";
import App from "../App";
import Home from "../pages/Home";
import Summary from "../pages/Summary";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "quiz", element: <Quiz /> },
      {
        path: "summary",
        element: (
          <ProtectedRoute>
            <Summary />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
