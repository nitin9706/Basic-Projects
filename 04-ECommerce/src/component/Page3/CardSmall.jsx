import React from "react";

const CardSmall = () => {
  return (
    <div className="h-40 w-70 bg-linear-to-t from-yellow-100 to-orange-200 rounded-2xl flex justify-center items-center flex-col shadow-[0px_0px_12px_#ffa499]">
      <div className="flex h-[50%] p-5 gap-3">
        <div className="bg-orange-400 rounded-full h-15 w-15">
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/5289/5289466.png"
            alt=""
            className="object-contain object-center"
          />
        </div>
        <div className="font-bold text-2xl text-amber-900">
          {" "}
          <h1>Natural</h1>
          <h1>Ingredients</h1>
        </div>
      </div>
      <div className="h-[50%] text-gray-500 font-medium p-3">
        <h1>Only Fresh fruits and </h1>
        <h1>carefully selected blends</h1>
      </div>
    </div>
  );
};

export default CardSmall;
