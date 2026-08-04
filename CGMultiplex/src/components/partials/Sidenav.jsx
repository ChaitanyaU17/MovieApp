import { useState } from 'react';
import { Link } from 'react-router-dom';
import movielogo from '/movielogo.png';

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="md:hidden size-9 fixed top-4 left-4 z-50 bg-[#6556cd] text-white p-2 rounded-lg shadow-lg"
        onClick={toggleSidenav}
      >
        {isOpen ? (
          <i className="ri-close-line text-xl"></i>
        ) : (
          <i className="ri-menu-line text-xl"></i>
        )}
      </button>

      <div
        className={`fixed top-0 left-0 h-full bg-[#1f1E24] border-r-2 border-zinc-400 p-4 z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:h-full md:border-r-2 md:w-[200px] lg:w-[250px] transition-transform duration-300 ease-in-out`}
      >
        <h1 className="text-xl md:text-lg lg:text-xl text-white font-bold mb-4">
          <div className="flex items-center">
            <img
              className="h-8 w-8 md:h-10 md:w-10 rounded object-cover mr-1"
              src={movielogo}
              alt="Movie Logo"
            />
            <span className="text-xl md:text-lg lg:text-2xl">
              <span className="text-[#6556cd] text-2xl md:text-xl lg:text-3xl">CG</span>Multiplex
            </span>
          </div>
        </h1>

        <nav className="flex flex-col text-zinc-400 text-base md:text-md gap-3">
          <h1 className="font-bold text-lg md:text-xl mt-6 mb-2">Explore</h1>
          <Link
            to="/trending"
            className="hover:bg-[#6556cd] hover:text-white p-2 rounded-lg duration-300"
            onClick={() => setIsOpen(false)}
          >
            <i className="mr-1.5 ri-fire-fill"></i>
            Trending
          </Link>
          <Link
            to="/popular"
            className="hover:bg-[#6556cd] hover:text-white p-2 rounded-lg duration-300"
            onClick={() => setIsOpen(false)}
          >
            <i className="mr-1.5 ri-bard-fill"></i>
            Popular
          </Link>
          <Link
            to="/movie"
            className="hover:bg-[#6556cd] hover:text-white p-2 rounded-lg duration-300"
            onClick={() => setIsOpen(false)}
          >
            <i className="mr-1.5 ri-movie-2-fill"></i>
            Movies
          </Link>
          <Link
            to="/tv"
            className="hover:bg-[#6556cd] hover:text-white p-2 rounded-lg duration-300"
            onClick={() => setIsOpen(false)}
          >
            <i className="mr-1.5 ri-tv-fill"></i>
            TV Shows
          </Link>
          <Link
            to="/people"
            className="hover:bg-[#6556cd] hover:text-white p-2 rounded-lg duration-300"
            onClick={() => setIsOpen(false)}
          >
            <i className="mr-1.5 ri-group-fill"></i>
            People
          </Link>
        </nav>

        <hr className="border-none h-[1px] bg-zinc-400 mt-4"></hr>

        <nav className="flex flex-col text-zinc-400 text-base md:text-md gap-3">
          <h1 className="text-lg md:text-xl font-bold mt-5 mb-2">Our Space</h1>
          <Link
            to="/about"
            className="hover:bg-[#6556cd] hover:text-white p-2 rounded-lg duration-300"
            onClick={() => setIsOpen(false)}
          >
            <i className="mr-2 ri-information-fill"></i>
            About
          </Link>
          <Link
            to="/contact"
            className="hover:bg-[#6556cd] hover:text-white p-2 rounded-lg duration-300"
            onClick={() => setIsOpen(false)}
          >
            <i className="mr-2 ri-phone-fill"></i>
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidenav;