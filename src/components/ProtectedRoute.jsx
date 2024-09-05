import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { isAuthenticated, getJobRole } from '../utils/auth';
import UserContext from '../utils/userContext';

function ProtectedRoute({ children, requiredRole }) {
    const isAuth = isAuthenticated();
    const userRole = getJobRole();
    const { logUser, setLogUser } = React.useContext(UserContext);
    const navigate = useNavigate();

    // Check if the user is authenticated and has the required role
    if (!isAuth || (requiredRole && userRole !== requiredRole)) {
        // Remove the token from local storage
        setLogUser(null);
        localStorage.removeItem('token');
        return <Navigate to="/login" replace />;
    }



        

       
        useEffect(() => {
            // Ensure logUser is defined before accessing its properties

            const timeoutId = setTimeout(() => {

                const user = localStorage.getItem('logUser');
          
                // Redirect JobProvider to the dashboard if they are new and trying to access restricted routes
                if (userRole === "JobProvider") {
                    const notAllowedPathsForCompanyUser = [
                        '/jobprovider/setup', 
                        '/jobprovider/dashboard/',
                        '/jobprovider/setup/', 
                        '/jobprovider/dashboard'
                    ];
                
                    // Check if `logUser` exists and `isNew` is properly set
                    if (logUser && logUser.isNew === false && notAllowedPathsForCompanyUser.includes(window.location.pathname)) {
                        navigate('/jobprovider/home/');
                    }
                
                    // If the user is new, allow them to access the setup page but restrict access to other pages
                    const allowedPathsForNewUser = ['/jobprovider/setup', '/jobprovider/setup/'];
                    
                    
                    // If `logUser` is null or false, redirect to dashboard
                    if (!logUser && !notAllowedPathsForCompanyUser.includes(window.location.pathname)) {
                        navigate('/jobprovider/dashboard/');
                    }
                
            }
            }, 500); // Adjust the timeout duration as needed

            return () => clearTimeout(timeoutId);

        }, [userRole, logUser, navigate]);
     

        


    
       


    return children;
}

export default ProtectedRoute;
