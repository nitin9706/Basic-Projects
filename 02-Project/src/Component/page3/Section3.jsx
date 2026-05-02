import React from "react";
import About from "./About";

const Section3 = () => {
  return (
    <div id="section3">
      {" "}
      <h1 className="text-5xl font-semibold">Contact Me</h1>
      <div className="flex gap-15 mt-10">
        <a
          href="https://www.instagram.com/_.nitin__09._?igsh=MTE5cjI2ZnE3dG01bw=="
          target="_blank"
        >
          <img
            src="https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM"
            alt=""
            className="h-10 rounded-full mt-10"
          />
          @nitin_09
        </a>

        <a href="">
          <img
            src="https://th.bing.com/th/id/ODF.bm0RV3rptAC68RsyIbn_wQ?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2"
            alt=""
            className="h-10 rounded-full mt-10"
          />
          Unknowngamer931@gmail.com
        </a>
      </div>
      <About />
    </div>
  );
};

export default Section3;
