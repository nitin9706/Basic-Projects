import React from "react";

const Left = () => {
  return (
    <div className="h-3/4 w-3/4 flex items-start flex-col px-15 py-10 mt-10">
      <h1 className="text-2xl font-bold ">Currently Available for Hire</h1>
      <hr className="border w-90 mb-5 mt-2 " />
      <h1 className="text-8xl font-bold text-[#ccff00]/90">React Developer</h1>
      <p className="text-lg font-medium mt-9 text-gray-400 ">
        🚀 Creative React Developer skilled in building dynamic, responsive, and
        user-friendly web applications.
      </p>
      <p className="text-lg font-medium mt-3 text-gray-400 ">
        🎨 Passionate about crafting interactive UI components with modern
        JavaScript, React hooks, and performance optimization.
      </p>
      <div className="flex justify-center items-center gap-15 mt-2">
        <p className="text-mg font-medium mt-3 text-gray-200">
          📞 Unknowngamer931@Gmail.com
        </p>
        <a
          className="px-8 py-3 rounded-xl bg-[#ccff00] text-black font-semibold text-xl active:scale-95 cursor-pointer"
          href=""
          download=""
          target="_blank"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Left;
