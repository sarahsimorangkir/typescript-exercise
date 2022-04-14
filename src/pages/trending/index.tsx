import React from "react";
import Gif from "../../components/Gif/Gif";
import { useState } from "react";
import "./index.css";

function Trending() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const key = process.env.REACT_APP_GIPHY_KEY;

  const fetchData = async () => {
    if (query === "") {
      return;
    }

    const gif = await fetch(
      `https://api.giphy.com/v1/gifs/trending?q=${query}&api_key=${key}&limit=${12}`
    ).then((response) => response.json());
    setData(gif.data);
  };

  return (
    <>
      <h1 className="title">
        .
      </h1>
      <div className="h1">Testtt Trending</div>
      {/* <div className="gif-item">
        {data.map((gif, index) => (
          <Gif key={index} title={gif.title} url={gif.images.fixed_width.url} />
        ))}
      </div> */}
    </>
  );
}

export default Trending;
