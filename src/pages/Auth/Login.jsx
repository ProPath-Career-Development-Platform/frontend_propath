import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


 function decodeJWT(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    const savedPassword = localStorage.getItem('rememberedPassword');
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleforgotpassword = () => {
    navigate("/forgotpassword");
  }

  const handlesignup = () => {
    navigate("/signup")
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email) {
      setErrorMessage("Email is required.");
      return;
    }
    if (!password) {
      setErrorMessage("Password is required.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email,
        password
      });
      console.log(response.data);
  
      const token = response.data.jwt;
  
      // Use the utility function to decode the token
      const decodedToken = decodeJWT(token);
      console.log(decodedToken);
      const role = decodedToken.role;
      console.log(role);
  
      // Save the token with expiration time (3 days)
      const expirationTime = new Date();
      expirationTime.setDate(expirationTime.getDate() + 3); // 3 days from now
      localStorage.setItem('token', token);
      localStorage.setItem('tokenExpiration', expirationTime.getTime());
  
      if (role === 'JobSeeker') {
        navigate("/jobseeker/home/");
      } else if (role === 'JobProvider') {
        navigate("/jobprovider/home/");
      } else if (role === 'Admin') {
        navigate("/admin/home/");
      }
  
    } catch (error) {
      const message = error.response?.data?.message || 'Incorrect email or password';
      setErrorMessage(message);
      console.error('Login failed:', error);
    }
  };
  
  // Check and remove expired tokens on component mount
  useEffect(() => {
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    if (tokenExpiration) {
      const now = new Date().getTime();
      if (now > tokenExpiration) {
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpiration');
      }
    }
  }, []);
  
  

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-purple-500 via-purple-300 to-purple-200  overflow-hidden">
      <div className="flex items-center justify-center w-full h-full lg:w-1/2">
        <div className="w-11/12 max-w-[500px] px-6 py-12 rounded-3xl bg-violet-100 ">
          <h1 className="text-4xl font-bold flex justify-center items-center text-black w-full">
            Log in
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="mt-8">
              <div className="flex flex-col">
                <input
                  className="w-full border-2 border-gray-400 rounded-xl p-3 mt-1 bg-transparent text-base"
                  placeholder="Email address"
                  
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col mt-4 relative">
                <input
                  className="w-full border-2 border-gray-400 rounded-xl p-3 mt-1 bg-transparent text-base"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-eye-off text-gray-400 hover:text-[#6756a8]"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-eye text-gray-400 hover:text-[#6756a8]"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
                {/* {errorMessage && <div className="text-red-500 text-center mt-2">{errorMessage}</div>} */}
              </div>
              <div className="mt-8 flex justify-between items-center">
                <div>
                <input 
                    type="checkbox" 
                    id="remember" 
                    checked={rememberMe} 
                    onChange={(e) => setRememberMe(e.target.checked)} 
                  />
                  <label
                    className="ml-2 font-medium text-base text-black"
                    htmlFor="remember"
                  >
                    Remember me
                  </label>
                </div>
                <button 
                type="button"
                onClick={handleforgotpassword}
                className="font-medium text-base text-[#9a80d4] hover:text-[#6756a8]">
                  Forgot password
                </button>
              </div>
              {errorMessage && <div className="text-red-500 text-center mt-5">{errorMessage}</div>}
              <div className="mt-5 flex flex-col gap-y-4">
                <button type="submit" className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-3 bg-[#6756a8] rounded-xl text-white font-bold text-lg hover:bg-[#6756a8]">
                  Sign in
                </button>
                <button
                  type="button"
                  onClick={handlesignup}
                  className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2 px-4 rounded-xl text-gray-700 font-semibold text-lg border-2 bg-violet-200  hover:text-[#6756a8]"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
                      fill="#34A853"
                    />
                    <path
                      d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
                      fill="#4A90E2"
                    />
                    <path
                      d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
                      fill="#FBBC05"
                    />
                  </svg>
                  Sign in with Google
                </button>
              </div>
              <div className="mt-8 flex justify-center items-center">
                <p className="font-medium text-base text-black">Don't have an account?</p>
                <button 
                type="button"
                onClick={handlesignup}
                className="ml-2 font-medium text-base text-[#9a80d4] hover:text-[#6756a8]">
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;