import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated, getJobRole } from '../utils/auth';

function ProtectedRoute({ children, requiredRole }) {
    const isAuth = isAuthenticated();
    const userRole = getJobRole();

    // Check if the user is authenticated and has the required role
    if (!isAuth || (requiredRole && userRole !== requiredRole)) {

        //remove the token from local storage
        localStorage.removeItem('token');
        return <Navigate to="/login" replace />;
    }
    
    return children;
}

export default ProtectedRoute;
