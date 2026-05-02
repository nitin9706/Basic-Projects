import React from "react";
import { useDispatch } from "react-redux";
import { addCollection, addToast } from "../Redux/Features/CollectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();
  const AddData = (item) => {
    dispatch(addCollection(item));
    dispatch(addToast());
  };

  return (
    <div className="h-70 w-50 rounded-2xl relative overflow-hidden ">
      {" "}
      <div className="h-[90%] w-full rounded-2xl  bg-white/70 overflow-hidden">
        <a href={item.url} target="_blank">
          {item.type == "photos" ? (
            <img
              className="h-full w-full object-center object-cover rounded-2xl"
              src={item.src}
              alt=""
            />
          ) : (
            ""
          )}
          {item.type == "videos" ? (
            <video
              loop
              muted
              autoPlay
              className="h-full w-full object-center object-cover rounded-2xl"
              src={item.src}
            ></video>
          ) : (
            ""
          )}
          {item.type == "gif" ? (
            <img
              className="h-full w-full object-center object-cover rounded-2xl"
              src={item.src}
              alt=""
            />
          ) : (
            ""
          )}{" "}
        </a>
        <div
          id="bottom"
          className=" absolute w-full  h-[30%] bottom-7 flex justify-between items-center px-3 overflow-hidden "
        >
          {" "}
          <h1 className="text-white rounded-b-2xl h-17 ">{item.title}</h1>
          <button
            onClick={() => {
              AddData(item);
            }}
            className="bg-indigo-600 text-white rounded-full px-3 py-2 font-medium cursor-pointer active:scale-95"
          >
            {" "}
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
