import React from "react";

const LeftMiddle = () => {
  return (
    <div className="w-3/4 capitalize text-white flex items-start  justify-center flex-col px-15 gap-4">
      <div>
        {" "}
        <p className="text-5xl font-bold">Freshness That</p>
        <p className="text-5xl font-bold">Fuel Your Day</p>
      </div>
      <div>
        {" "}
        <div>
          {" "}
          <p className="text-xl font-extrabold text-gray-300 brightness-110">
            Discover vibrant flavors crafted to refresh ,enegize,
          </p>
          <p className="text-xl font-extrabold text-gray-300 brightness-110">
            and brighten every moment of your life
          </p>
        </div>
      </div>
      <p className="text-lg font-bold ">
        {" "}
        From classic citrus blending to bold morden flavour , our drinks are
        made with quality ingredients and a passion for freshers{" "}
      </p>
      <div className="flex gap-5">
        <button className="px-10 py-4 rounded-full bg-yellow-400 font-bold text-xl cursor-pointer active:scale-95">
          Shop Now{" "}
        </button>
        <button className="px-10 py-4 rounded-full bg-amber-700 font-bold text-xl cursor-pointer active:scale-95">
          {" "}
          Explore Products
        </button>
      </div>
    </div>
  );
};

export default LeftMiddle;
