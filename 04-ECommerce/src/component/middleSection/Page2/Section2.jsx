import React from "react";
import Cardspage from "./Cardspage.jsx";
const Section2 = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-center gap-3 mt-4 mb-2">
        <hr className="border-2 w-50" />
        <h1 className="text-5xl font-bold ">Our Best Seller</h1>
        <hr className="border-2 w-50" />
      </div>
      <div className=" mt-5 h-[60%] w-full flex gap-20 justify-center ">
        {/* cards */}

        <Cardspage />
        <Cardspage />
        <Cardspage />
      </div>
    </div>
  );
};

export default Section2;
