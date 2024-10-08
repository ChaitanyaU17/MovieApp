import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import { useState, useEffect } from "react";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";

const Home = () => {
  document.title = "CGMultiplex | Homepage";

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
      <div className="flex flex-col lg:flex-row h-full overflow-auto overflow-x-hidden">
        <div className="w-full lg:w-[85%] lg:ml-[250px]">
          <Topnav />
          <Header data={wallpaper} />
          <div className="my-2 flex justify-start gap-x-16 pl-4 pt-4">
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
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
