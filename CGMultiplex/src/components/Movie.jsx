import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import Cards from './partials/Cards';
import Loading from './Loading';

const Movie = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("now_playing");
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title = "CGMultiplex | Movies ";
  
    const GetMovies = async () => {
      try {
        const response = await axios.get(`/movie/${category}?page=${page}`);
        //setTrending(response?.data?.results);
        //console.log(response.data);
        if (response.data.results.length > 0) {
          setMovies((prevState) => [...prevState, ...response.data.results]);
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
     if (movies.length === 0) {
      GetMovies();
     } else {
       setPage(1);
       setMovies([]);
       GetMovies();
     }
    };
  
    useEffect(() => {
      refreshHandler();
    }, [category]);
  
    return movies.length > 0 ? (
      <div className="min-h-screen w-full">
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-[5%] py-4">
          <h1 className="text-lg md:text-xl font-semibold text-zinc-400 mb-4 md:mb-0">
            <i
              onClick={() => navigate(-1)}
              className="hover:text-[#6556cd] ri-arrow-go-back-fill cursor-pointer"
            ></i>{" "}
            Movies <small className="text-sm text-zinc-500">({category})</small>
          </h1>
  
          <div className="flex items-center w-full md:w-[80%]">
            <Topnav />
            <Dropdown
              title="Category"
              options={["popular", "top_rated", "upcoming", "now_playing"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
  
        <InfiniteScroll
          hasMore={hasMore}
          next={GetMovies}
          dataLength={movies.length}
          loader={<h1 className="text-center text-white">Loading...</h1>}
        >
          <Cards data={movies} title="movie" />
        </InfiniteScroll>
      </div>
    ) : (
      <Loading />
    );
}

export default Movie
