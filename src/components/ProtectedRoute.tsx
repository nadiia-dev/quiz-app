import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useQuizStore from "../store";

interface Props {
  children: ReactNode;
  redirectTo?: string;
}

const ProtectedRoute = ({ children, redirectTo = "/" }: Props) => {
  const isCompleted = useQuizStore((state) => state.isCompleted);
  return isCompleted ? children : <Navigate to={redirectTo} replace />;
};

export default ProtectedRoute;
