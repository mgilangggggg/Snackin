import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan validasi atau kirim email reset password ke backend di sini
    console.log(email);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Lupa Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-[#E53935]"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-[#E53935] text-white py-2 px-4 rounded-md hover:bg-[#FF8A65]"
          >
            Kirim Reset Email
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
