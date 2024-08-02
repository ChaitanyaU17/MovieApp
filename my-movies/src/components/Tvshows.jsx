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
      <div className="h-screen w-screen">
        <div className="w-full flex items-center justify-between px-[5%]">
          <h1 className="text-xl font-semibold text-zinc-400">
            {" "}
            <i
              onClick={() => navigate(-1)}
              className="hover:text-[#6556cd] ri-arrow-left-fill"
            ></i>{"  "}
            Tv Shows {" "}<small className='text-sm text-zinc-500'>({category})</small>
          </h1>
  
          <div className="flex items-center w-[80%]">
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
          loader={<h1>Loading...</h1>}
        >
          <Cards data={tvshow} title='tv' />
        </InfiniteScroll>
      </div>
    ) : (
      <Loading />
    );
}

export default Tvshows;
