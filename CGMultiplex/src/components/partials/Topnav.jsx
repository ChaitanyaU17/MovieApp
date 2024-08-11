import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from '../../utils/axios';
import noimage from '/noimage.png';

const Topnav = () => {
    const[query, setQuery] = useState('');
    const[searches, setSearches] = useState([]);
    
    const GetSearches = async () => {
      try {
        const response = await axios.get(`/search/multi?query=${query}`);
        //console.log(response);
        setSearches(response.data.results);
      }  catch(err) {
        console.log('Error: ', err)
      }
    };
  
    useEffect(() => {
        GetSearches();
    }, [query])

    return (
      <div className="relative w-full h-[8vh] flex justify-center items-center px-4 lg:px-12">
        <i className="text-zinc-400 text-xl lg:text-2xl ri-search-line"></i>
        <input
          className="w-full lg:w-[50%] mx-4 p-2 text-sm lg:text-md outline-none border-b-[0.5px] bg-transparent focus:border-[#6556cd] text-zinc-200"
          type="text"
          placeholder="Search any movie"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        {query.length > 0 && (
          <i
            onClick={() => setQuery('')}
            className="text-zinc-400 text-2xl ri-close-line cursor-pointer"
          ></i>
        )}
  
        {searches.length > 0 && (
          <div className="z-[100] absolute top-[120%] w-full max-h-[50vh] lg:w-[50%] left-0 lg:left-[25%] bg-[#1f1E24] bg-opacity-90 overflow-auto rounded shadow-lg">
            {searches.map((s, i) => (
              <Link
                to={`/${s.media_type}/details/${s.id}`}
                key={i}
                className="hover:text-zinc-200 hover:underline hover:bg-zinc-700 duration-300 font-semibold text-white w-full p-5 flex justify-start items-center border-b-[0.5px] border-zinc-100"
              >
                <img
                  className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
                  src={
                    s.backdrop_path || s.profile_path 
                      ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`
                      : noimage
                  }
                  alt={s.title || s.name}
                />
                <span>
                  {s.title || s.name || s.original_name || s.original_title}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
}

export default Topnav
