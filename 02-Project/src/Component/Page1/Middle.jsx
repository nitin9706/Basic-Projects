import Left from "../Page1/Left.jsx";
import Pic from "../../assets/Pic1.png";
const Middle = () => {
  return (
    <div className="flex justify-center items-center gap-2" id="section1">
      <Left />
      <img src={Pic} alt="" className="object-center object-contain mt-5" />
    </div>
  );
};

export default Middle;
