import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../Redux/Features/SearchSlice";

const Tabs = () => {
  const Tabs = ["photos", "videos", "gif"];
  const activeTab = useSelector((state) => state.search.activeTab);
  const dispatch = useDispatch();
  return (
    <div className="flex gap-10 p-5 justify-center items-center">
      {Tabs.map((e, idx) => {
        return (
          <button
            key={idx}
            className={`${
              activeTab == e ? "bg-blue-400" : "bg-gray-500"
            } px-5 py-3 rounded-2xl uppercase cursor-pointer active:scale-95 transition`}
            onClick={() => {
              dispatch(setActiveTab(e));
            }}
          >
            {" "}
            {e}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
