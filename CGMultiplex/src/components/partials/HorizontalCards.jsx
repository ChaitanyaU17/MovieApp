import noimage from "/noimage.png";

import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  return (
    <div className="flex overflow-x-scroll no-scrollbar mb-5 p-4 sm:p-5 w-full overflow-y-hidden">
      {data.length > 0 ? (
        data.map((d, i) => (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="flex-shrink-0 w-[45%] sm:w-[30%] md:w-[25%] lg:w-[18%] xl:w-[15%] max-w-[180px] h-[30vh] sm:h-[35vh] md:h-[40vh] mr-4 sm:mr-5 mb-4 sm:mb-9 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <img
              className="w-full h-[70%] object-cover rounded-t-lg"
              src={
                d.backdrop_path || d.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      d.backdrop_path || d.poster_path
                    }`
                  : noimage
              }
              alt={d.title || d.name || d.original_name || d.original_title}
              loading="lazy"
            />
            <div className="text-zinc-300 flex flex-col justify-center items-start p-1 h-[30%] overflow-hidden">
              <h1 className="text-xs sm:text-sm font-semibold leading-tight line-clamp-2">
                {(d.title || d.name || d.original_name || d.original_title)
                  .toUpperCase()}
              </h1>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-xl sm:text-3xl mt-5 text-white font-black text-center w-full">
          nothing to show!
        </h1>
      )}
    </div>
  );
};

export default HorizontalCards;