import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from '../../utils/axios';
import noimage from '/noimage.png';

const Topnav = () => {
    const[query, setQuery] = useState('');
    const[searches, setSearches] = useState([]);
    
    const GetSearches = async () => {
      try {
        if (query.trim() === '') {
          setSearches([]);
          return;
        }
        const response = await axios.get(`/search/multi?query=${query}`);
        setSearches(response.data.results);
      }  catch(err) {
        console.log('Error: ', err)
      }
    };
  
    useEffect(() => {
        const handler = setTimeout(() => {
            GetSearches();
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    return (
      <div className="relative w-full min-h-[8vh] flex items-center justify-start p-2 sm:p-4 bg-[#1f1E24] z-20">
        <i className="text-zinc-400 text-lg sm:text-xl md:text-2xl ri-search-line mr-2"></i>
        <input
          className="flex-grow p-2 text-sm md:text-base outline-none border-b-[0.5px] border-zinc-500 bg-transparent focus:border-[#6556cd] text-zinc-200 placeholder-zinc-400"
          type="text"
          placeholder="Search for movies, TV shows, or people..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        {query.length > 0 && (
          <i
            onClick={() => setQuery('')}
            className="text-zinc-400 text-lg sm:text-xl md:text-2xl ri-close-line cursor-pointer ml-2 sm:ml-3"
          ></i>
        )}
  
        {searches.length > 0 && query.length > 0 && (
          <div className="absolute top-[calc(100%+0.5rem)] left-0 w-full max-h-[60vh] bg-[#1f1E24] bg-opacity-95 overflow-y-auto rounded-b-lg shadow-xl z-50">
            {searches.map((s, i) => (
              <Link
                to={`/${s.media_type}/details/${s.id}`}
                key={i}
                className="flex items-center p-2 sm:p-3 hover:bg-zinc-700 transition-colors duration-200 border-b-[1px] border-zinc-600 last:border-b-0"
                onClick={() => setQuery('')}
              >
                <img
                  className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded mr-2 sm:mr-3 shadow-md"
                  src={
                    s.backdrop_path || s.profile_path || s.poster_path
                      ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path || s.poster_path}`
                      : noimage
                  }
                  alt={s.title || s.name || s.original_name || s.original_title}
                  loading="lazy"
                />
                <span className="text-white text-xs sm:text-sm md:text-base font-semibold truncate">
                  {s.title || s.name || s.original_name || s.original_title}
                </span>
                {s.media_type && (
                  <span className="ml-auto text-zinc-400 text-xs px-1 py-0.5 sm:px-2 sm:py-1 bg-zinc-800 rounded-full">
                    {s.media_type}
                  </span>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
}

export default Topnav