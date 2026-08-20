import { Navigate, Outlet } from "react-router"
const ProtectedRoute = ({ isAuthenticated }) => (
      !isAuthenticated
        ? <Navigate to="/" replace />
        : <Outlet/>
);
export default ProtectedRoute;
