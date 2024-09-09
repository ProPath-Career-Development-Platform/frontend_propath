import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [logUser, setLogUser] = useState();


  // Function to log in the user
  const jobProviderLogin = (jwtToken, navigate) => {
    axios.get('http://localhost:8080/jobprovider/company', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }).then((response) => {
      if (response.data.isNew)  {  
        setLogUser(false);
        //localStorage.setItem('companyNew', response.data.isNew);
        
        navigate('/jobprovider/dashboard/');
      } else {
        setLogUser(response.data);
        console.log(response.data);
        localStorage.setItem('logUser', JSON.stringify(response.data)); // Save user to localStorage
        navigate('/jobprovider/home/');
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  // Function to log out the user
  const logout = (navigate) => {
    setLogUser(null);
    localStorage.removeItem('logUser'); // Clear user from local storage
    localStorage.removeItem('token'); // Clear JWT from local storage
    navigate('/login'); // Redirect to login page
  };

  // Load user data from localStorage when the app loads (on refresh)
  useEffect(() => {
    const savedUser = localStorage.getItem('logUser');
  
      if (savedUser) {
          setLogUser(JSON.parse(savedUser)); // Restore user state from localStorage
      } else {
          setLogUser(false);
      }


 
  
  }, []);

 

  return (
    <UserContext.Provider value={{ logUser, setLogUser, jobProviderLogin, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
