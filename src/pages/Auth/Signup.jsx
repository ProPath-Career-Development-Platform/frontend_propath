import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/joy/Box';

function Signup() {
  const navigate = useNavigate();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Job Seeker");

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

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-purple-500 via-purple-300 to-purple-200 overflow-hidden">
      <div className="flex items-center justify-center w-full h-full lg:w-3/4">
        <div className="flex w-full max-w-[800px] rounded-3xl  bg-violet-100">
          <div className="w-1/2 p-6 ">
            <img src="signup.jpg" alt="Signup Illustration" className="rounded-3xl h-full " />
          </div>
          <div className="w-1/2 px-6 py-12">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold text-black">Register</h1>
              <div className="relative border-gray-300">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-36 h-10 px-3 border rounded-lg bg-violet-100 border-2 shadow-sm focus:outline-none border-gray-400"
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
            <div className="mt-8">
              {selectedRole === "Job Seeker" ? (
                <div>
                  <div className="flex flex-col">
                    <input
                      className="w-full border-2 border-gray-400 rounded-xl p-3 mt-1 bg-transparent text-base"
                      placeholder="Email address"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col mt-4 relative">
                    <input
                      className="w-full border-2 rounded-xl p-3 mt-1 bg-transparent text-base border-gray-400"
                      placeholder="Password"
                      type={showNewPassword ? "text" : "password"}
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
                      className="w-full border-2 border-gray-400 rounded-xl p-3 mt-1 bg-transparent text-base decoration-gray-400"
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
                      className="w-full border-2 border-gray-400 rounded-xl p-3 mt-1 bg-transparent text-base"
                      placeholder="Company Name"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      className="w-full border-2 border-gray-400 rounded-xl p-3 mt-1 bg-transparent text-base"
                      placeholder="Email address"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col mt-4 relative">
                    <input
                      className="w-full border-2 border-gray-400 rounded-xl p-3 mt-1 bg-transparent text-base"
                      placeholder="Password"
                      type={showNewPassword ? "text" : "password"}
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
                      className="w-full border-2 border-gray-400 rounded-xl p-3 mt-1 bg-transparent text-base"
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
              <div className="flex flex-col mt-4">
                <button className="w-full bg-[#6756a8] font-semibold text-white py-2 rounded-xl text-lg transition duration-300 ease-in-out hover:scale-[1.01] hover:bg-[#553e97]">Sign Up</button>
              </div>
              <div className="flex justify-center items-center mt-4">
                <p className="text-gray-700">Already have an account?</p>
                <button onClick={handleSignin} className="text-[#6756a8] hover:underline ml-1">Register</button>
              </div>
              <div className="flex items-center mt-4">
                <div className="border-t w-full border-gray-300"></div>
                <p className="text-gray-500 mx-4">or</p>
                <div className="border-t w-full border-gray-300"></div>
              </div>
              <div className="flex justify-center items-center mt-4">
                <button className="flex items-center font-semibold hover:scale-[1.01] justify-center w-full bg-violet-200 text-black py-2 rounded-xl text-lg transition duration-300 ease-in-out hover:text-[#6756a8]">
                  <img src="google.png" alt="Google Logo" className="w-6 h-6 mr-2" />
                  Register with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
