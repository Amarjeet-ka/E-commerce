import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  // Check if the user is authenticated (you can implement your own logic here)
  const isAuthenticated = false; // Replace with your authentication logic

  return (
    <Route
      {...rest}
      element={props =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/login" replace />
      }
    />
  );
};

export default ProtectedRoute;
