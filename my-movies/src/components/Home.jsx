import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import { useState, useEffect } from "react";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";

const Home = () => {
  document.title = "MovieApp | Homepage";

  const [wallpaper, setWallpaper] = useState([]);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");

  const getHeaderWallpaper = async () => {
    try {
      const response = await axios.get(`/trending/all/day`);
      //console.log(response);
      const randomData =
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ];

      setWallpaper(randomData);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const GetTrending = async () => {
    try {
      const response = await axios.get(`/trending/${category}/day`);
      //console.log(response);
      setTrending(response?.data?.results);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    !wallpaper || getHeaderWallpaper();
    GetTrending();
  }, [category]);

  //console.log(trending);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />

        <div className="my-5 flex justify-between p-5">
          <h1 className="font-semibold text-2xl text-zinc-400">Trending</h1>

          {/* display the api results each category */}

          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>

        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Home;
