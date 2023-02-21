import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function ProtectedRouter({ children }) {
  const { user, loadingauth } = useAuth();

  if (loadingauth) return <h1>loding</h1>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}
