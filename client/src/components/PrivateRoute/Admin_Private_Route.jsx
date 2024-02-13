import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

function Admin_Private_Route() {
  const { currentUser } = useSelector((state) => state.user);

  if (!currentUser && !currentUser.message.user.isAdmin ||!currentUser.message.user.isAdmin) {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
}

export default Admin_Private_Route;
