import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <div className="h-25 bg-white/20 flex items-center rounded-3xl justify-between px-30  shadow-md fixed backdrop-blur-md w-[80%] z-20">
      <h1 className="text-4xl font-bold">Nitin's</h1>
      <div className="flex gap-13 mr-20 font-semibold text-xl items-center justify-center">
        <a
          href="#section1"
          className={` active:scale-95 ${
            activeTab == "Home" ? "text-orange-600" : "text-black"
          }`}
          onClick={() => {
            setActiveTab("Home");
          }}
        >
          Home
        </a>
        <a
          href="#section2"
          className={` active:scale-95 ${
            activeTab == "Products" ? "text-orange-600" : "text-black"
          }`}
          onClick={() => {
            setActiveTab("Products");
          }}
        >
          Products
        </a>
        <a
          href="#section3"
          className={` active:scale-95 ${
            activeTab == "About" ? "text-orange-600" : "text-black"
          }`}
          onClick={() => {
            setActiveTab("About");
          }}
        >
          About
        </a>
      </div>
    </div>
  );
};

export default Navbar;
