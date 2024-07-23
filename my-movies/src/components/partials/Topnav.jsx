import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from '../../utils/axios';

const Topnav = () => {
    const[query, setQuery] = useState('');
    const[searches, setSearches] = useState([]);
    
    const GetSearches = async () => {
      try {
        const response = await axios.get(`/search/multi?query=${query}`);
        console.log(response.data);
        setSearches(response.data.results);
      }  catch(err) {
        console.log('Error: ', err)
      }
    };
  
    useEffect(() => {
      GetSearches();
    }, [query])

  return (
    <div className="w-[100%] h-[10vh] relative flex justify-start items-center pl-[15%] ">
      <i className="text-zinc-400 text-2xl ri-search-line"></i>
      <input
        className="w-[50%] mx-10 p-2 text-md outline-none border-none bg-transparent text-zinc-200"
        type="text"
        placeholder="search any movie"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 text-2xl ri-close-large-line"
        ></i>
      )}

      {searches.length > 0 && (
      <div className="absolute top-[90%] w-[50%] max-h-[50vh] bg-zinc-200 overflow-auto rounded ">
        {searches.map((s, i) => (
          <Link key={i} className="hover:text-zinc-900 hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-full p-5 flex justify-start items-center border-b-2 border-zinc-100">
            {/* <img src="" alt="" /> */}
            <span>{s.title || s.name || s.original_name || s.original_title}</span>
          </Link>
        ))}
      </div>
      )}
    </div>
  );
}

export default Topnav