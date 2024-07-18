import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Job Seeker");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  // const [companyName, setCompanyName] = useState('');
  // const [companyEmail, setCompanyEmail] = useState('');

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelectRole = (role) => {
    setSelectedRole(role);
    setShowDropdown(false);
  };

  const handleSignin = () => {
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = selectedRole === "Job Seeker" ? {
      name,
      email,
      password,
      role: "JobSeeker"
    } : {
      name,
      email,
      password,
      role: "JobProvider"
    };
    console.log("Submitting userData:", userData); 
    try {
      const response = await axios.post('http://localhost:8080/signup', userData);
      console.log(response.data);
      navigate("/login"); // Redirect user to login page after successful signup
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };
  

  return (
    <div className="flex items-center justify-center w-full h-screen bg-white overflow-hidden">
      <div className="flex items-center justify-center w-full h-full lg:w-1/2">
        <div className="w-11/12 max-w-[500px] px-6 py-12 rounded-3xl bg-white border-2 border-gray-300">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-black">Register</h1>
            <div className="relative border-gray-300">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-36 h-10 px-3 border rounded-lg bg-white shadow-sm focus:outline-none border-gray-500"
              >
                <span className="text-gray-700">{selectedRole}</span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
                  <a
                    href="#"
                    onClick={() => handleSelectRole("Job Seeker")}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Job Seeker
                  </a>
                  <a
                    href="#"
                    onClick={() => handleSelectRole("Employee")}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Employee
                  </a>
                </div>
              )}
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-8">
              {selectedRole === "Job Seeker" ? (
                <div>
                  <div className="flex flex-col">
                    <input
                      className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-base"
                      placeholder="Name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col  mt-4 relative">
                    <input
                      className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-base"
                      placeholder="Email address"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mt-4 relative">
                    <input
                      className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-base"
                      placeholder="Password"
                      type={showNewPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={toggleNewPasswordVisibility}
                    >
                      {showNewPassword ? (
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
                  </div>
                  <div className="flex flex-col mt-4 relative">
                    <input
                      className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-base"
                      placeholder="Confirm Password"
                      type={showConfirmPassword ? "text" : "password"}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? (
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
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex flex-col">
                    <input
                      className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-base"
                      placeholder="Company Name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col  mt-4 relative">
                    <input
                      className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-base"
                      placeholder="Company Email address"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mt-4 relative">
                    <input
                      className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-base"
                      placeholder="Password"
                      type={showNewPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={toggleNewPasswordVisibility}
                    >
                      {showNewPassword ? (
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
                  </div>
                  <div className="flex flex-col mt-4 relative">
                    <input
                      className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-base"
                      placeholder="Confirm Password"
                      type={showConfirmPassword ? "text" : "password"}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? (
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
                  </div>
                </div>
              )}
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                type="submit"
                className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-3 rounded-xl bg-[#6756a8] text-white font-bold text-lg"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-8 flex justify-center items-center">
            <p className="font-medium text-base text-gray-400">Already have an account?</p>
            <button
              onClick={handleSignin}
              className="ml-2 font-medium text-base text-[#6756a8]"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
