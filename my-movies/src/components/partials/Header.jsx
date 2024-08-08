import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Header = ({ data }) => {
  //console.log(data);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), 
        url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "10% 20%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      
      className="w-full h-[70vh] flex flex-col justify-end items-start p-[2%]"
    >

      <h1 className="w-[70%] text-3xl font-black text-white">
        {data.title || data.name || data.original_name || data.original_title}
      </h1>

      <p className="w-[70%] text-sm text-white mt-3 mb-3">
        {data.overview?.slice(0, 200)}.
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">more</Link>
      </p>

      <p className="text-white">
        <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
        {data.release_date || "No Information"}
        <i className="ml-5 text-yellow-500 ri-album-fill"></i>{" "}
        {data.media_type?.toUpperCase()}
      </p>

      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="p-2 bg-[#6556cd] rounded text-white mt-3">
        Watch Trailer
      </Link>

    </div>

  );
};

export default Header;
