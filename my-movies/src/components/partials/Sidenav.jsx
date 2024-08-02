// import React from "react";
import {Link} from 'react-router-dom';

const Sidenav = () => {

  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-4">
      <h1 className="text-2xl text-white font-bold ">
        <i className="text-[#6556cd] ri-tv-fill"></i>
        <span className="px-1">CGMultiplex</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-md gap-3 ">
        <h1 className=" font-bold text-xl mt-6 mb-2">Explore</h1>
        <Link to='/trending' className="hover:bg-[#6556cd] hover:text-white p-2 rounded-lg duration-300">
        <i className="mr-1.5 ri-fire-fill"></i>
          Trending
        </Link>
        <Link to='/popular' className="hover:bg-[#6556cd] hover:text-white p-2 rounded-lg duration-300">
        <i className="mr-1.5 ri-bard-fill"></i>
          Popular
        </Link>
        <Link to='/movie' className="hover:bg-[#6556cd] hover:text-white p-2 rounded-lg duration-300">
        <i className="mr-1.5 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link to='/tv' className="hover:bg-[#6556cd] hover:text-white p-2 rounded-lg duration-300">
        <i className="mr-1.5 ri-tv-fill"></i>
          TV Shows
        </Link>
        <Link to='/people' className="hover:bg-[#6556cd] hover:text-white p-2 rounded-lg duration-300">
        <i className="mr-1.5 ri-group-fill"></i>
          People
        </Link>
      </nav>


      <hr className='border-none h-[1px] bg-zinc-400 mt-4'></hr>

      <nav className="flex flex-col text-zinc-400 text-md gap-3">
        <h1 className="text-xl font-bold mt-5 mb-2">Our Space</h1>
        <Link to='/about' className="hover:bg-[#6556cd] hover:text-white p-2 rounded-lg duration-300">
        <i className="mr-2 ri-information-fill"></i>
          About
        </Link>
        <Link to='/contact' className="hover:bg-[#6556cd] hover:text-white p-2 rounded-lg duration-300">
        <i className="mr-2 ri-phone-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default Sidenav;
