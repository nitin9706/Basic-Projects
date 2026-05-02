import Navbar from "./component/Navbar";
import LeftMiddle from "./component/middleSection/LeftMiddle";
import RightMiddle from "./component/middleSection/RightMiddle";
import Section2 from "./component/middleSection/Page2/Section2";
import Section3 from "./component/Page3/Section3";
import Cart from "./component/Cart";

const App = () => {
  return (
    <div>
      {" "}
      {/* <div className="absolute right-0 top-0 z-100 py-30 px-10">
        <Cart />
      </div> */}
      <div
        className="bg-linear-to-b from-yellow-400 to-orange-500 h-screen w-full flex  bg-cover bg-no-repeat bg-center flex-col px-[10%]"
        id="section1"
      >
        <div className="rounded-3xl absolute ">
          <Navbar />{" "}
        </div>
        <div className="flex h-screen justify-center items-center gap-2">
          {" "}
          <LeftMiddle />
          <RightMiddle />
        </div>
      </div>
      <div
        className="bg-linear-to-t to-yellow-100 from-orange-100 h-screen flex px-[10%] w-full  items-center flex-col justify-center pt-30 pb-20"
        id="section2"
      >
        <Section2 />
      </div>
      <div id="section3">
        <Section3 />
      </div>
    </div>
  );
};

export default App;
