import React from "react";
import { FetchGif, FetchPhotos, FetchVideos } from "./API/MediaAPI";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CollectionPage from "./Pages/CollectionPage";
import Navbar from "./Component/Navbar.jsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="min-h-screen text-white w-full bg-gray-900 flex gap-10  flex-col">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Collection" element={<CollectionPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
