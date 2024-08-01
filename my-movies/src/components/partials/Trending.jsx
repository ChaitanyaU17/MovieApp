import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "./Dropdown";
import axios from '../../utils/axios';
import Cards from './Cards';
import Loading from './Loading';

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('all');
  const [duration, setDuration] = useState('day');
  const [trending, setTrending] = useState(null);

  const GetTrending = async () => {
    try {
      const response = await axios.get(`/trending/${category}/${duration}`);
      setTrending(response?.data?.results);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  console.log(trending);

  useEffect(() => {
    GetTrending();
  }, [category, duration])

  return trending ? (
    <div className="h-screen w-screen">

      <div className="px-[3%] w-full flex items-center justify-between">
        <h1 className="text-xl font-semibold text-zinc-400">
          {" "}
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-fill"
          ></i>{" "}
          Trending
        </h1>

        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e) => setCategory(e.target.value)} />
          <div className="w-[2%]"></div>
          <Dropdown title="Duration" options={["week", "day"]} func={(e) => setDuration(e.target.value)} />
        </div>
      </div>

      <Cards data={trending} />
      
    </div>
  ) : <Loading />;
};

export default Trending;
