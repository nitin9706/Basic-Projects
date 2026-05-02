import React, { useState } from "react";
import {
  DecreaseByAmount,
  Decrement,
  IncreaseByAmount,
  Increment,
} from "./Redux/feature/CountSlice";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const [num, setNum] = useState(5);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.Counter.value);

  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center gap-5">
      <h1 className="text-5xl">{count}</h1>
      <div className="m-2">
        {" "}
        <button
          className="px-5 py-3 bg-blue-300 rounded-full active:scale-95 m-4 cursor-pointer"
          onClick={() => {
            dispatch(Increment());
          }}
        >
          Increase
        </button>
        <button
          className="px-5 py-3 bg-blue-300 rounded-full active:scale-95 m-4 cursor-pointer"
          onClick={() => {
            dispatch(Decrement());
          }}
        >
          Decrease
        </button>
      </div>

      <input
        type="number"
        value={num}
        className="px-5 py-3 text-xl border"
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />

      <div className="m-2">
        {" "}
        <button
          className="px-5 py-3 bg-blue-300 rounded-full active:scale-95 m-4 cursor-pointer"
          onClick={() => {
            dispatch(IncreaseByAmount(Number(num)));
          }}
        >
          Increase By Amount
        </button>
        <button
          className="px-5 py-3 bg-blue-300 rounded-full active:scale-95 m-4 cursor-pointer"
          onClick={() => {
            dispatch(DecreaseByAmount(Number(num)));
          }}
        >
          Decrease By Amount
        </button>
      </div>
    </div>
  );
};

export default App;
