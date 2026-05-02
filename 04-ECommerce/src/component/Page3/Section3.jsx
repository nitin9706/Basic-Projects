import React from "react";
import CardSmall from "./CardSmall";
import Bottom from "./Bottom";

const Section3 = () => {
  return (
    <div>
      {" "}
      <div className="h-[50vh]  flex px-[10%] w-full  items-center flex-col justify-center pt-30 pb-20 bg-linear-to-t from-orange-200 to-orange-300">
        <div>
          {" "}
          <div className="flex items-center justify-center gap-3 mt-4 mb-2">
            <hr className="border-2 w-50" />
            <h1 className="text-5xl font-bold text-amber-800 ">
              Why People Love US
            </h1>
            <hr className="border-2 w-50" />
          </div>
          <div className="flex justify-center items-center gap-5 mt-5 ">
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Section3;
