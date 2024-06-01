import React from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#e8d5d5]">
      <div className="bg-white shadow-md rounded-lg px-10 pb-8 w-full max-w-md">
        <div className="text-3xl font-poppins font-medium mb-2 py-5">
          Lupa Password
        </div>
        <form className="space-y-6">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-[#E53935] my-4"
            />
          </div>
          <Link
            to=""
            type="submit"
            className="w-full bg-[#E53935] border border-gray-300 rounded-lg p-2 text-center flex items-center justify-center font-medium font-poppins text-white shadow-sm hover:text-[#E53935] hover:bg-gray-100 my-2"
          >
            Kirim
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
