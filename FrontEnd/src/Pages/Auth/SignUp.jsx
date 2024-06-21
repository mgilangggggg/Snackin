import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [telepon, setTelepon] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState({});
  const [popupMessage, setPopupMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();

    const formData = {
      username,
      telepon,
      email,
      password,
    };

    try {
      const res = await axios.post("http://localhost:3000/signup", formData);
      setPopupMessage("Berhasil Daftar");
      setPopupVisible(true);
      setTimeout(() => {
        setPopupVisible(false);
        navigate("/signin");
      }, 1100);
    } catch (e) {
      if (e.response && e.response.data) {
        setValidation(e.response.data);
        setPopupMessage("Password, maksimal harus 8 karacter");
      } else {
        setPopupMessage("Gagal Daftar, terjadi kesalahan");
      }
      setPopupVisible(true);
      setTimeout(() => {
        setPopupVisible(false);
      }, 1000);
    }
  };

  return (
    <main className="w-full h-screen flex items-start">
      {/* Img */}
      <div className="relative w-1/2 h-full flex flex-col">
        <img
          src="./Auth/SignUp.png"
          alt="SignUp"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-1/2 bg-[#e8d5d5] flex flex-col p-5 justify-between items-center">
        <div className="w-full flex flex-col max-w-[400px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-poppins font-medium mb-2">Daftar!</h3>
            <p className="font-poppins font-light mb-2">
              Belum memiliki akun? Silahkan Daftar.
            </p>
          </div>

          {/* Input field for username, email, no.telepon and password */}
          <div className="w-full flex flex-col">
            <form onSubmit={signupHandler} className="space-y-6">
              <input
                type="text"
                placeholder="Username"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-[#E53935]"
              />
              {validation.username && (
                <div className="bg-red-500 text-white font-bold rounded-lg p-4">
                  {validation.username[0]}
                </div>
              )}
              <input
                type="tel"
                placeholder="No. Telp"
                id="phoneNumber"
                name="phoneNumber"
                value={telepon}
                onChange={(e) => setTelepon(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-[#E53935]"
              />
              {validation.telepon && (
                <div className="bg-red-500 text-white font-bold rounded-lg p-4">
                  {validation.telepon[0]}
                </div>
              )}
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-[#E53935] my-4"
              />
              {validation.email && (
                <div className="bg-red-500 text-white font-bold rounded-lg p-4">
                  {validation.email[0]}
                </div>
              )}
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-[#E53935]"
              />
              {validation.password && (
                <div className="bg-red-500 text-white font-bold rounded-lg p-4">
                  {validation.password[0]}
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-[#E53935] border border-gray-300 rounded-lg p-2 text-center flex items-center justify-center font-poppins font-medium text-white shadow-sm hover:text-[#E53935] hover:bg-gray-100 my-2"
              >
                Daftar
              </button>
            </form>
          </div>

          {/* Horizontal line and 'or' text */}
          <div className="w-full flex items-center justify-center relative py-3">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-sm font-light font-poppins absolute text-black/80 bg-[#e8d5d5]">
              atau
            </p>
          </div>

          {/* Login with Facebook button */}
          <Link
            to=""
            className="w-full bg-[#f5f5f5] border border-gray-300 rounded-lg p-2 text-center flex items-center justify-center font-medium font-poppins text-[#060606] hover:bg-[#1877f2] hover:text-white my-2 "
          >
            <img
              src="./Icon-Facebook.png"
              alt="Icon-Facebook"
              className="w-5 mr-3"
            />
            Daftar dengan Facebook
          </Link>

          {/* Login with Google button */}
          <Link
            to=""
            className="w-full bg-[#f5f5f5] border border-gray-300 rounded-lg p-2 text-center flex items-center justify-center font-medium font-poppins text-[#060606] hover:bg-[#262626] hover:text-white my-2 "
          >
            <img
              src="./Icon-Google.png"
              alt="Icon-Google"
              className="w-5 mr-3"
            />
            Daftar dengan Google
          </Link>

          {/* SignIn link */}
          <div className="w-full flex items-center justify-center my-4">
            <p className="text-sm font-poppins text-[#060606]">
              Sudah memiliki akun?
              <Link
                to="/signin"
                className="font-poppins font-light text-[#E53935] p-2"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>{popupMessage}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default SignUp;
