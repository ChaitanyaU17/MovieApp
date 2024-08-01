/* eslint-disable react/prop-types */
//import React from 'react'
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="flex flex-wrap w-full h-full px-[5%] bg-[#1f1E24]">
      {data.map((c, i) => (
        <Link className="relative w-[25vh] mr-[5%] mb-[5%]" key={i}>
          <img
            className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
            src={`https://image.tmdb.org/t/p/original/${
              c.backdrop_path || c.profile_path || c.poster_path
            }`}
            alt=""
          />
          
          <h1 className="text-xl text-zinc-400 mt-2 font-semibold">
          {c.title || c.name || c.original_name || c.original_title}
          </h1>
          
        </Link>
      ))}
    </div>
  );
};

export default Cards;
