import React from "react";

const Bottom = () => {
  return (
    <div className=" bg-linear-to-b from-orange-400 to-yellow-500 h-[50vh] flex justify-center items-center px-[10%]">
      <div className="w-1/2 flex flex-col gap-4">
        {" "}
        <h1 className="text-white text-3xl font-bold">
          What Our Customers Say
        </h1>
        <h1 className="text-white/70 font-light">
          Order today and feet the burst of real fruity energy
        </h1>
        <button className="px-9 py-4 rounded-full text-md font-semibold bg-linear-to-r from-orange-500 to-orange-400 active:scale-95 cursor-pointer w-40 text-white">
          Order Now
        </button>
      </div>
      <div className="w-[50%]">
        <div className="bg-white/78 h-50 w-130 rounded-3xl flex items-center justify-center ">
          {/* review1 */}

          <div className="text-lg flex p-5 gap-5">
            <div>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/020/911/731/small_2x/profile-icon-avatar-icon-user-icon-person-icon-free-png.png"
                alt=""
                className="h-15 w-15 object-contain"
              />
            </div>
            <div>
              <div>⭐⭐⭐⭐⭐</div>
              <h1 className="text-amber-800 mt-2">
                Absolutely refreshing! The orange flavour tastes natural and
                Energizing
              </h1>
              <h1 className="text-amber-800">- Rahul S.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
