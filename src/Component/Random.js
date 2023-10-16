import React, { useEffect, useState } from "react";
import axios from "axios";

function Random() {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const [gif, setGif] = useState("");

  async function fetchData() {
    try {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  },[]);

  function clickHandler() {
    fetchData();
  }
  return (
    <div className=" w-1/2  bg-red-500 rounded-lg border border-black  mx-0 flex flex-col items-center">
      <h1 className="text-3xl font-bold">A Random Gif</h1>
      <img src={gif} width="450px" />
      <button className="w-10/12 bg-yellow-500 rounded-xl mt-5 mb-5 hover:bg-white" onClick={clickHandler}>
        Generate Gif
      </button>
    </div>
  );
}

export default Random;
