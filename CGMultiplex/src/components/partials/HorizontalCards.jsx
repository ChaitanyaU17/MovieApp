/* eslint-disable react/prop-types */
import noimage from "/noimage.png";

import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  return (
    <div className="flex overflow-x-scroll  mb-5 p-5 w-[100%] overflow-y-hidden">
      {data.length > 0 ? (
        data.map((d, i) => (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[40%] sm:min-w-[30%] lg:min-w-[18%] sm:w-[120px] lg:w-[176px] w-[176px] h-[40vh] lg:h-[40vh] mr-5 mb-9"
          >
            <img
              className="w-full h-[100%] object-cover rounded-t-lg"
              src={
                d.backdrop_path || d.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      d.backdrop_path || d.poster_path
                    }`
                  : noimage
              }
              alt=""
            />
            <div className="text-zinc-300 items-center pl-1 pt-2 h-[45%]">
              <h1 className="text-sm font-semibold">
                {(d.title || d.name || d.original_name || d.original_title)
                  .slice(0, 20)
                  .toUpperCase()}
              </h1>
              {/* <p className="text-sm text-zinc-400">
              {d.overview?.slice(0, 50)}...
              <span className="text-zinc-300">more</span>
            </p> */}
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-3xl mt-5 text-white font-black text-center">
          nothing to show!
        </h1>
      )}
    </div>
  );
};

export default HorizontalCards;
