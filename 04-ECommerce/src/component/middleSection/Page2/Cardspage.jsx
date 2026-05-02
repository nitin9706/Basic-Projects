import React from "react";
import img from "../../../../public/Bottlewithfruit.png";
const Cardspage = () => {
  return (
    <div>
      {" "}
      <div className="h-128  w-100 rounded-2xl shadow-[1px_1px_7px_rgba(0,0,0,0.5)]">
        <img
          src={img}
          alt=""
          className="object-center h-80 w-full object-cover rounded-t-2xl"
        />
        <div className="bg-linear-to-b from-yellow-200 to-orange-300 rounded-b-2xl flex justify-center items-center flex-col p-5 ">
          {" "}
          <h1 className="text-2xl font-bold text-center text-amber-900">
            Orange Blast
          </h1>
          <h1 className="text-xl font-light text-center text-amber-700">
            Fresh-Natural-Energizing
          </h1>
          <h1 className="text-2xl font-medium text-center text-amber-900">
            ₹149
          </h1>
          <button className="px-7 py-4 bg-orange-400 rounded-full  font-semibold text-xl cursor-pointer active:scale-95 text-gray-200 ">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardspage;
