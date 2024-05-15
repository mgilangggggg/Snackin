import React, { useState } from "react";

const Tes = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Password Toggle</h2>
      <div className="flex items-center space-x-2 mb-4">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="text-blue-500 hover:text-blue-700 focus:outline-none"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      <button
        type="button"
        onClick={() => alert(`Password entered: ${password}`)}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};

export default Tes;
