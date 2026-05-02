import React, { useEffect } from "react";
import { FetchPhotos, FetchVideos, FetchGif } from "../API/MediaAPI";
import {
  setLoading,
  setError,
  setResults,
} from "../Redux/Features/SearchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      if (!query) return;
      dispatch(setLoading());
      let data = [];
      if (activeTab == "photos") {
        let response = await FetchPhotos(query);
        data = response.results.map((item) => ({
          id: item.id,
          type: "photos",
          title: item.alt_description,
          thumbnail: item.urls.small,
          src: item.urls.full,
          url: item.links.html,
        }));
      }
      if (activeTab == "videos") {
        let response = await FetchVideos(query);
        data = response.videos.map((item) => ({
          id: item.id,
          type: "video",
          title: item.user.name || "video",
          thumbnail: item.image,
          src: item.video_files[0].link,
          url: item.url,
        }));
      }
      if (activeTab == "gif") {
        let response = await FetchGif(query);
        data = response.results.map((item) => ({
          id: item.id,
          type: "gif",
          title: item.title || "GIF",
          thumbnail: item.media_formats.tinygif.url,
          src: item.media_formats.gif.url,
          url: item.url,
        }));
      }
      dispatch(setResults(data));
    } catch (err) {
      dispatch(setError(err));
    }
  };

  useEffect(() => {
    getData();
  }, [query, activeTab, dispatch]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading</h1>;
  return (
    <div className="flex flex-wrap gap-10 overflow-auto justify-center items-center pb-20 w-[90%]">
      {results.map((item) => {
        return <ResultCard item={item} />;
      })}
    </div>
  );
};

export default ResultGrid;
