import React from "react";

const Top = () => {
  return (
    <div>
      {" "}
      <div className="h-160 w-280  rounded-4xl flex items-center justify-center shadow-2xl flex-col shadow-inset bg-green-200">
        <h1 className="text-4xl font-bold">login Form</h1>
        <div className="h-15 text-[20px] font-semibold mb-10 mt-20">
          {" "}
          <label> Username : </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter the Username "
            className="shadow-xl px-20 py-3 rounded-4xl ml-10 bg-green-100"
          />
        </div>
        <div className="h-15 text-[20px] font-semibold mb-20">
          {" "}
          <label> Password : </label>
          <input
            type="password"
            name=""
            id=""
            placeholder="Password "
            className="shadow-xl px-20 py-3 rounded-4xl ml-10 bg-green-100"
          />
          <div>
            {" "}
            <input
              type="submit"
              value=" Sign Up"
              className="px-25  py-4 bg-white rounded-4xl font-semibold text-[20px] cursor-pointer shadow-2xl mr-2 hover:bg-gray-300"
            />
            <input
              type="submit"
              value=" log In"
              className="px-25  py-4 bg-blue-500 rounded-4xl font-semibold text-[20px] cursor-pointer ml-2 shadow-2xs hover:bg-blue-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
