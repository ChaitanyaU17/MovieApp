import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Header = ({ data }) => {
  console.log(data);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), 
        url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-[50vh] flex flex-col justify-end p-[5%]"
    >
      <h1 className="w-[70%] text-3xl font-black text-white">
        {data.title || data.name || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] text-sm text-white mt-3">
        {data.overview?.slice(0, 200)}...
        <Link className="text-blue-400">more</Link>
      </p>
      <p className="text-white">
      <i className="text-yellow-500 ri-megaphone-fill"></i> {data.release_date}
      <i className="text-yellow-500 ri-album-fill"></i> {data.media_type}
      </p>
    </div>
  );
};

export default Header;
