
import Gif from "../../components/Gif/Gif";
import React,{  useState } from "react";
import "./index.css";

interface GifItem {
  title : string;
  images : {
    fixed_width:{
      url: string
  }}
}
interface GifData {
  
  data : GifItem[]
}

function Home() {
  const [data, setData] = useState<GifItem[]>([]);
  const [query, setQuery] = useState("");

  const key = process.env.REACT_APP_GIPHY_KEY;

  const fetchData = async () => {
    if (query === "") {
      return;
    }

    const gif = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}&limit=12`
    )
    const gifData:GifData = await gif.json()
    setData(gifData.data);
  };


  const handleInput = (e : React.ChangeEvent<HTMLInputElement>
    ) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <>
      <h1 className="title">Giphyeyy.</h1>
      <div className="input">
        <input
          placeholder="Search here..."
          type="text"
          className="search-input"
          onFocus={(e) => {
            // @ts-ignore
            e.placeholder = "";
          }} 
          onBlur={(e) => {
            // @ts-ignore
            e.placeholder = "Search here...";
          }}
          onChange={(e) => handleInput(e)}
        ></input>
        <button
          value="Search"
          type="submit"
          className="search-button"
          onClick={fetchData}
        >
          Search
        </button>
      </div>
      <div className="gif-item">
        {data.map((gif:GifItem, index) => (
          <Gif key={index} title={gif.title} url={gif.images.fixed_width.url}/>
        ))}
      </div>
    </>
  );
}

export default Home;
