import React from "react";

const Navbar = () => {
  return (
    <div className="h-25 bg-black/50 flex justify-between items-center gap-50 rounded-b-2xl px-20 backdrop-blur-xl sticky top-0 w-[90%] mx-[5%]">
      <h1 className="text-4xl">Nitin</h1>
      <div className="flex gap-15 text-xl">
        <a
          className="active:scale-95 cursor-pointer hover:text-[#ccff00]"
          href="#section1"
        >
          Home
        </a>
        <a
          className="active:scale-95 cursor-pointer hover:text-[#ccff00]"
          href="#section2"
        >
          Skill
        </a>
        <a
          className="active:scale-95 cursor-pointer hover:text-[#ccff00]"
          href="#section3"
        >
          Contact
        </a>
      </div>
      <button className="px-6 py-3 bg-[#ccff00] text-xl rounded-2xl font-bold text-black active:scale-95 cursor-pointer">
        Let's Talk →
      </button>
    </div>
  );
};

export default Navbar;
