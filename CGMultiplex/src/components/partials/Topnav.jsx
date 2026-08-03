import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from '../../utils/axios';
import noimage from '/noimage.png';

const Topnav = () => {
    const[query, setQuery] = useState('');
    const[searches, setSearches] = useState([]);
    
    // Using useCallback for optimization when passing GetSearches down
    // (though not strictly necessary here, good practice for functions passed as props)
    // const GetSearches = useCallback(async () => { ... }, [query]);
    const GetSearches = async () => {
      try {
        if (query.trim() === '') { // Prevent empty searches
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
        const handler = setTimeout(() => { // Debounce search input
            GetSearches();
        }, 300); // Wait 300ms after typing stops

        return () => {
            clearTimeout(handler);
        };
    }, [query]); // Rerun effect when query changes

    return (
      <div className="relative w-full h-[8vh] flex items-center justify-start p-4 bg-[#1f1E24] z-20"> {/* Changed justify-center to justify-start */}
        <i className="text-zinc-400 text-xl md:text-2xl ri-search-line mr-2"></i> {/* Responsive icon size, added margin */}
        <input
          className="flex-grow p-2 text-sm md:text-base outline-none border-b-[0.5px] border-zinc-500 bg-transparent focus:border-[#6556cd] text-zinc-200 placeholder-zinc-400"
          type="text"
          placeholder="Search for movies, TV shows, or people..." // More descriptive placeholder
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        {query.length > 0 && (
          <i
            onClick={() => setQuery('')}
            className="text-zinc-400 text-xl md:text-2xl ri-close-line cursor-pointer ml-3" // Responsive icon size, added margin
          ></i>
        )}
  
        {searches.length > 0 && query.length > 0 && ( // Only show if query has results AND is not empty
          <div className="absolute top-full left-0 w-full max-h-[60vh] bg-[#1f1E24] bg-opacity-95 overflow-y-auto rounded-b-lg shadow-xl z-50"> {/* Increased max-height, adjusted styling */}
            {searches.map((s, i) => (
              <Link
                to={`/${s.media_type}/details/${s.id}`}
                key={i}
                className="flex items-center p-3 hover:bg-zinc-700 transition-colors duration-200 border-b-[1px] border-zinc-600 last:border-b-0"
                onClick={() => setQuery('')} // Clear search on click
              >
                <img
                  className="w-12 h-12 object-cover rounded mr-3 shadow-md" // Responsive image size
                  src={
                    s.backdrop_path || s.profile_path || s.poster_path
                      ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path || s.poster_path}`
                      : noimage
                  }
                  alt={s.title || s.name || s.original_name || s.original_title}
                  loading="lazy"
                />
                <span className="text-white text-sm md:text-base font-semibold truncate"> {/* Responsive text size, truncate */}
                  {s.title || s.name || s.original_name || s.original_title}
                </span>
                {s.media_type && (
                  <span className="ml-auto text-zinc-400 text-xs md:text-sm capitalize px-2 py-1 bg-zinc-800 rounded-full">
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