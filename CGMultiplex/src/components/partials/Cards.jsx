import { Link } from "react-router-dom";
import noimage from "/noimage.png";

const Cards = ({ data, title }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4 md:p-8 bg-[#1f1E24]">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className="relative block w-full aspect-[2/3] rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          key={i}
        >
          <img
            className="w-full h-full object-cover rounded"
            src={
              c.backdrop_path || c.profile_path || c.poster_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.backdrop_path || c.profile_path || c.poster_path
                  }`
                : noimage
            }
            alt={c.title || c.name || c.original_name || c.original_title}
            loading="lazy"
          />
          <h1 className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black via-black/70 to-transparent text-white text-xs sm:text-sm font-bold leading-tight line-clamp-2">
            {c.title || c.name || c.original_name || c.original_title}
          </h1>
          {c.vote_average && (
            <div className="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-xs font-semibold bg-yellow-600 text-white rounded-full flex justify-center items-center p-0.5 sm:p-1">
              {Math.round(c.vote_average * 10)}%
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;