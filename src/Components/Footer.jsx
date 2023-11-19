import React from "react";
import logo from "../assets/favicon.png";
function Footer() {
  return (
    <footer className="bg-purple-800 p-1 text-white text-center">
      <div className="flex justify-center items-center">
        <img
          src={logo} // Replace with actual image path
          alt="Logo"
          className="mr-1 w-6 h-6"
        />
        <span className="font-bold">BreezyBot</span>
      </div>
    </footer>
  );
}

export default Footer;
