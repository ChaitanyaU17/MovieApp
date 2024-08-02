/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-[100%] flex overflow-y-hidden mb-5 p-5">
      {data.map((d, i) => (
        <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="min-w-[18%] h-full bg-zinc-900 mr-5 mb-3">
          <img
            className="w-full h-[55%] object-cover rounded-t-lg"
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.poster_path
            }`}
            alt=""
          />
          <div className="text-white p-3 h-[45%]">
            <h1 className="text-md font-semibold">
              {d.title || d.name || d.original_name || d.original_title}
            </h1>
            <p className="text-sm text-zinc-400">
              {d.overview?.slice(0, 50)}...
              <span className="text-zinc-300">more</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalCards;
