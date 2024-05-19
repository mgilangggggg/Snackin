import React from "react";

function ForgotPassword() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#e8d5d5]">
      <div className="bg-white shadow-md rounded-lg px-10 pb-8 w-full max-w-md">
        <div className="text-3xl font-semibold mb-2 py-5">Lupa Password</div>
        <form className="space-y-6">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-[#E53935] my-4"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#E53935] border border-gray-300 rounded-lg p-2 text-center flex items-center justify-center font-semibold text-white hover:bg-[#FF8A65] my-2"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
