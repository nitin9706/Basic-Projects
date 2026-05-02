import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../Component/CollectionCard";
import {
  clearCollection,
  removeToast,
} from "../Redux/Features/CollectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.Collection.item);
  const dispatch = useDispatch();
  const ClearCollectionData = () => {
    dispatch(clearCollection());
    dispatch(removeToast());
  };
  return (
    <div>
      <div className="flex justify-between px-[15%] mb-15">
        <h1 className="capitalize text-4xl font-bold  ">your collection :</h1>
        <button
          className="capitalize px-5 py-3 rounded-3xl bg-green-600 cursor-pointer active:scale-95 mr-35 font-semibold"
          onClick={() => {
            ClearCollectionData();
          }}
        >
          clear collection
        </button>
      </div>
      <div className="flex flex-wrap gap-10 overflow-auto justify-center items-center pb-20 w-[90%]">
        {collection.map((item) => {
          return <CollectionCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
