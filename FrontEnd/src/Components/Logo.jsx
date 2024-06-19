import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  const Logo = [
    {
      logo: "./Snackin.png",
      name: "Snackin",
    },
  ];

  return (
    <>
      {Logo.map((Logo) => (
        <div key={Logo}>
          <Link to="/" className="flex flex-row items-center">
            <img src={Logo.logo} alt={Logo.name} className="w-28" />
          </Link>
        </div>
      ))}
    </>
  );
};

export default Logo;
