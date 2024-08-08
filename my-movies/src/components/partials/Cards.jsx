/* eslint-disable react/prop-types */
//import React from 'react'
import { Link } from "react-router-dom";
import noimage from "/noimage.png";

const Cards = ({ data, title }) => {
  //console.log(data);
  return (
    <div className="flex flex-wrap w-full h-full pt-5 px-[2%] bg-[#1f1E24] ">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className="relative w-[25vh] mr-[2%] mb-[5%]"
          key={i}
        >
          <img
            className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded"
            src={
              c.backdrop_path || c.profile_path || c.poster_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.backdrop_path || c.profile_path || c.poster_path
                  }`
                : noimage
            }
            alt=""
          />

          <h1 className="text-sm text-zinc-300 mt-2 font-bold">
            {(c.title || c.name || c.original_name || c.original_title).length >
            20
              ? (
                  c.title ||
                  c.name ||
                  c.original_name ||
                  c.original_title
                ).slice(0, 17) + "..."
              : c.title || c.name || c.original_name || c.original_title}
          </h1>

          {c.vote_average && (
            <div className="absolute right-[-10%] bottom-[24%] w-[5vh] h-[5vh] text-sm font-semibold bg-yellow-600 text-white rounded-full flex justify-center items-center">
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
