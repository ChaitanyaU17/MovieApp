import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import Cards from "./Cards";
import Topnav from "./Topnav";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "CGMultiplex | People ";

  const GetPeople = async () => {
    try {
      const response = await axios.get(`/person/${category}?page=${page}`);
      //setTrending(response?.data?.results);
      console.log(response);
      if (response.data.results.length > 0) {
        setPeople((prevState) => [...prevState, ...response.data.results]);
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
    if (people.length === 0) {
      GetPeople();
    } else {
      setPage(1);
      setPeople([]);
      GetPeople();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return people.length > 0 ? (
    <div className="h-screen w-screen">
      <div className="w-full flex items-center justify-between px-[5%]">
        <h1 className="text-xl font-semibold text-zinc-400">
          {" "}
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-fill"
          ></i>
          {"  "}
          People <small className="text-sm text-zinc-500">({category})</small>
        </h1>

        <div className="flex items-center w-[80%]">
          <Topnav />
        </div>
      </div>

      <InfiniteScroll
        hasMore={hasMore}
        next={GetPeople}
        dataLength={people.length}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={people} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
