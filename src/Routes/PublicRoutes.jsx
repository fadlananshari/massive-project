import { Navigate, Outlet } from "react-router-dom";


const PublicRoutes = ({ isLoggin }) => {
  return isLoggin ? <Navigate to="/homepage" replace /> : <Outlet />;
};

export default PublicRoutes;
