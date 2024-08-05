import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "CGMultiplex | Trending ";

  const GetTrending = async () => {
    try {
      const response = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      //setTrending(response?.data?.results);
      if (response.data.results.length > 0) {
        setTrending((prevState) => [...prevState, ...response.data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
     
      //console.log(response);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  //console.log(trending);

  const refreshHandler = () => {
   if (trending.length === 0) {
    GetTrending();
   } else {
     setPage(1);
     setTrending([]);
     GetTrending();
   }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="h-screen w-screen">
      <div className="w-full flex items-center justify-between px-[5%]">
        <h1 className="text-xl font-semibold text-zinc-400">
          {" "}
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-go-back-fill"
          ></i>{" "}
          Trending {" "}<small className='text-sm text-zinc-500'>({category})</small>
        </h1>

        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        hasMore={hasMore}
        next={GetTrending}
        dataLength={trending.length}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
