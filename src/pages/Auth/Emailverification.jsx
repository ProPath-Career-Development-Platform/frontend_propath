import React from 'react';

function EmailVerification() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-white overflow-hidden">
      <div className="flex items-center justify-center w-full h-full lg:w-1/2">
        <div className="w-11/12 max-w-[500px] px-6 py-12 rounded-3xl bg-white border-2 border-gray-300">
          <h1 className="text-4xl font-bold flex justify-center items-center text-black w-full">
            Email Verification
          </h1>
          <div className="flex justify-center items-center h-full mt-7">
            <p className="text-center">
              We've sent a verification to your email address to verify your email address and activate your account
            </p>
          </div>
          <div className="mt-8">
            <div className="flex flex-col">
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent text-base"
                placeholder="Verify Code"
                type="text"
              />
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2 bg-[#9a80d4] rounded-xl text-white font-bold text-lg hover:bg-[#6756a8]">
                Verify My Account
              </button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center items-center">
              <p className="font-medium text-base text-black">Didn't receive any code?</p>
              <button
                className="font-medium text-base text-[#9a80d4] hover:text-[#6756a8] h-12 px-4 rounded-xl bg-transparent"
              >
                Resend
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
