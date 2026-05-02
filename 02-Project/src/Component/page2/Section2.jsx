import React from "react";

const Section2 = () => {
  return (
    <div id="section2">
      {" "}
      <h1 className="text-6xl font-bold">Skills :</h1>
      <div className="flex itmes-center h-3/4 mt-10 flex-col">
        <hr className="border-white border-2 w-full" />
        <div className="flex">
          {" "}
          <span className="ml-10">
            <hr className="border-2 w-0 h-30" />
            <p className="text-3xl font-semibold text-[#ccff00]">HTML</p>
          </span>
          <span className="ml-15">
            <hr className="border-2 w-0 h-30" />
            <p className="text-3xl font-semibold text-[#ccff00]">CSS</p>
          </span>
          <span className="ml-25">
            <hr className="border-2 w-0 h-30" />
            <p className="text-3xl font-semibold text-[#ccff00]">JavaScript</p>
          </span>
          <span className="ml-15">
            <hr className="border-2 w-0 h-30" />
            <p className="text-3xl font-semibold text-[#ccff00]">React JS</p>
          </span>
          <span className="ml-15">
            <hr className="border-2 w-0 h-30" />
            <p className="text-3xl font-semibold text-[#ccff00]">
              Cloud Practicing
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section2;
