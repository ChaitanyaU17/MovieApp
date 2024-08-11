import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../utils/axios';
import Cards from "./partials/Cards";
import Topnav from "./partials/Topnav";
import Loading from "./Loading";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";

const Tvshows = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("airing_today");
    const [tvshow, setTvshow] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title = "CGMultiplex | Tv Shows ";
  
    const GetTvshow = async () => {
      try {
        const response = await axios.get(`/tv/${category}?page=${page}`);
        //setTrending(response?.data?.results);
        //console.log(response.data);
        if (response.data.results.length > 0) {
          setTvshow((prevState) => [...prevState, ...response.data.results]);
          setPage(page + 1);
        } else {
          setHasMore(false);
        }
       
      } catch (err) {
        console.log("Error: ", err);
      }
    };
  
    //console.log(trending);
  
    const refreshHandler = () => {
     if (tvshow.length === 0) {
      GetTvshow();
     } else {
       setPage(1);
       setTvshow([]);
       GetTvshow();
     }
    };
  
    useEffect(() => {
      refreshHandler();
    }, [category]);
  
    return tvshow.length > 0 ? (
      <div className="min-h-screen w-full">
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-[5%] py-4">
          <h1 className="text-lg md:text-xl font-semibold text-zinc-400 mb-4 md:mb-0">
            <i
              onClick={() => navigate(-1)}
              className="hover:text-[#6556cd] ri-arrow-go-back-fill cursor-pointer"
            ></i>{" "}
            Tv Shows <small className="text-sm text-zinc-500">({category})</small>
          </h1>
  
          <div className="flex items-center w-full md:w-[80%]">
            <Topnav />
            <Dropdown
              title="Category"
              options={["on_the_air", "popular", "top_rated", "airing_today"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
  
        <InfiniteScroll
          hasMore={hasMore}
          next={GetTvshow}
          dataLength={tvshow.length}
          loader={<h1 className="text-center text-white">Loading...</h1>}
        >
          <Cards data={tvshow} title="tv" />
        </InfiniteScroll>
      </div>
    ) : (
      <Loading />
    );
}

export default Tvshows;
