import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoutes = ({ isLoggin, children, setShowFooter }) => {
  React.useEffect(() => {
    setShowFooter(true);
    return () => {
      setShowFooter(false);
    };
  }, [setShowFooter]);
  return isLoggin ? <Outlet /> : <Navigate to="/" replace />;
};

export default AuthRoutes;
