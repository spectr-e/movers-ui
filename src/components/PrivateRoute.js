import useAuth from "auth/useAuth";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute(props) {
  const location = useLocation();
  const { user } = useAuth();
  const token = localStorage.getItem("jwt");
  if (!user || !token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return props.children;
}

export default PrivateRoute;