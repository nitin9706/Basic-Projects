import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[25%]">
      {" "}
      <div className=" p-7 text-2xl font-semibold">Media Search</div>
      <div className="flex gap-10">
        {" "}
        <Link
          className="text-xl bg-green-600 rounded-3xl px-5 py-3 text-white"
          to={"/"}
        >
          Search
        </Link>
        <Link
          className="text-xl bg-green-600 rounded-3xl px-5 py-3 text-white"
          to={"/Collection"}
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
