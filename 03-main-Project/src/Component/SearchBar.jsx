import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { setQuery } from "../Redux/Features/SearchSlice";
const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };
  return (
    <div>
      <form
        className="flex px-10 mt-10 justify-center items-center"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          value={text}
          required
          placeholder="Search Anything"
          className=" border-2 px-4 py-2 text-xl w-2/4 rounded outline-none "
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer active:scale-95 bg-green-400">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
