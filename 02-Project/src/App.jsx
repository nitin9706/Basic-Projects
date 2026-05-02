import React from "react";
import Navbar from "./Component/Page1/Navbar.jsx";
import Middle from "./Component/Page1/Middle.jsx";
import Section2 from "./Component/page2/Section2.jsx";
import Section3 from "./Component/page3/Section3.jsx";
const App = () => {
  return (
    <div className="text-white bg-radial from-black to-black/70">
      <div className="h-screen px-30 ">
        <Navbar />
        <Middle />
      </div>
      <hr className="border-white w-[80%] ml-[10%]" />
      <div className="h-[80vh] px-30 mt-50">
        <Section2 />
      </div>

      <hr className="border-white w-[80%] ml-[10%] mb-20" />
      <div className="h-[80vh] px-30 mt-30">
        <Section3 />
      </div>
    </div>
  );
};

export default App;
