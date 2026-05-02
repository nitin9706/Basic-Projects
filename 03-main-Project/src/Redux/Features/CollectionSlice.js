import { createSlice } from "@reduxjs/toolkit";
import { toast, Slide } from "react-toastify";
const initialState = {
  item: JSON.parse(localStorage.getItem("Collections")) || [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExist = state.item.find(
        (item) => item.id === action.payload.id
      );
      if (!alreadyExist) {
        state.item.push(action.payload);
        localStorage.setItem("Collections", JSON.stringify(state.item));
      }
    },
    removeCollection: (state, action) => {
      state.item = state.item.filter((item) => item.id != action.payload.id);
      localStorage.setItem("Collections", JSON.stringify(state.item));
    },
    clearCollection: (state) => {
      (state.item = []), localStorage.removeItem("Collection");
    },
    addToast: () => {
      toast.success("Add To The Collection", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    },
    removeToast: () => {
      toast.error("Removed From Collection", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    },
  },
});

export const {
  addCollection,
  removeCollection,
  clearCollection,
  addToast,
  removeToast,
} = collectionSlice.actions;

export default collectionSlice.reducer;
