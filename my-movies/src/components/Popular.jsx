import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import Cards from './partials/Cards';
import Loading from './Loading';

const Popular = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "CGMultiplex | Popular ";

  const GetPopular = async () => {
    try {
      const response = await axios.get(`${category}/popular?page=${page}`);
      //setTrending(response?.data?.results);
      //console.log(response.data);
      if (response.data.results.length > 0) {
        setPopular((prevState) => [...prevState, ...response.data.results]);
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
   if (popular.length === 0) {
    GetPopular();
   } else {
     setPage(1);
     setPopular([]);
     GetPopular();
   }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="h-screen w-screen">
      <div className="w-full flex items-center justify-between px-[5%]">
        <h1 className="text-xl font-semibold text-zinc-400">
          {" "}
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-fill"
          ></i>{" "}
          Popular {" "}<small className='text-sm text-zinc-500'>({category})</small>
        </h1>

        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["tv", "movie"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        hasMore={hasMore}
        next={GetPopular}
        dataLength={popular.length}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Popular;
