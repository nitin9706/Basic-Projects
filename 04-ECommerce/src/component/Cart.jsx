import React, { useState } from "react";

const Cart = () => {
  const [num, setNum] = useState(1);
  return (
    <div className=" w-130 rounded-4xl h-[110vh] px-7  py-15 bg-orange-400">
      <h1 className="text-3xl font-bold">Your Cart :</h1>
      <div className="h-[70vh] mt-7 flex justify-start items-center flex-col w-full rounded-4xl bg-white/30">
        <div className="flex  justify-evenly items-center h-20 w-110 rounded-3xl shadow-2xl  mt-2">
          <img
            src="../../public/BottleCard.png"
            alt=""
            className="h-15 w-15 object-center object-cover rounded-full"
          />
          <div className="ml-5">
            <h1 className="font-semibold capitalize">name of the porduct</h1>
            <div className="flex gap-10">
              <h1
                className="h-7 w-7 bg-orange-400 rounded-full flex justify-center items-center font-semibold active:scale-95 cursor-pointer"
                onClick={() => {
                  if (num > 1) {
                    setNum(num - 1);
                  }
                }}
              >
                -
              </h1>
              <h1>{num}</h1>
              <h1
                className="h-7 w-7 bg-orange-400 rounded-full flex justify-center items-center font-semibold active:scale-95 cursor-pointer"
                onClick={() => {
                  setNum(num + 1);
                }}
              >
                +
              </h1>
            </div>
          </div>
          <div className="bg-orange-400 rounded-4xl h-12 w-30 active:scale-95 flex justify-center items-center cursor-pointer">
            Check out
          </div>
        </div>
      </div>
      <div className="bg-white/40 mt-5 py-5 rounded-3xl px-5 flex items-center justify-between">
        <div>final price</div>
        <button className="px-4 py-3 bg-orange-400 rounded-3xl active:scale-95 cursor-pointer">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;
