import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
          <div className="mt-8">
            {selectedRole === "Job Seeker" ? (
              <div>
                <div className="flex flex-col">
                  <input
                    className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-base"
                    placeholder="Email address"
                    type="email"
                  />
                </div>
                <div className="flex flex-col mt-4 relative">
                  <input
                    className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-base"
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
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <input
                    className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-base"
                    placeholder="Company Email"
                    type="email"
                  />
                </div>
                <div className="flex flex-col mt-4 relative">
                  <input
                    className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-base"
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
            <div className="mt-3 ml-1">
              <input type="checkbox" id="remember" />
              <label
                className="ml-2 mt-5 font-medium text-base text-gray-500"
                htmlFor="remember"
              >
                I've read and agree with your
              </label>
              <button className="font-medium text-base text-[#9a80d4] hover:text-[#6756a8] h-12 px-1 rounded-xl bg-transparent">
                Terms of Services
              </button>
            </div>
            <div className="mt-3 flex flex-col gap-y-4">
              <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-3 bg-[#9a80d4] rounded-xl text-white font-bold text-lg hover:bg-[#6756a8]">
                Register
              </button>
              <button
                onClick={() => setAuthState("register")}
                className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2 px-4 rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 hover:border-[#6756a8] hover:text-[#6756a8]"
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
                    d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.
                C5554 18.0145L19.8342 20.9978Z"
                    fill="#4A90E2"
                  />
                  <path
                    d="M5.26639 9.76464L1.24016 6.65013C0.447829 8.21101 0 9.97763 0 11.9999C0 14.0222 0.447829 15.7888 1.24016 17.3497L5.26639 14.2352C4.98272 13.537 4.81818 12.7832 4.81818 11.9999C4.81818 11.2167 4.98272 10.4629 5.26639 9.76464Z"
                    fill="#FBBC05"
                  />
                </svg>
                Register with Google
              </button>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <p className="font-medium text-base">Already have an account?</p>
            <button
              className="font-medium text-base text-[#9a80d4] ml-2 hover:text-[#6756a8]"
              onClick={handleSignin}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Signup;
