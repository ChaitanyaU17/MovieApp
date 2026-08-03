/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import noimage from "/noimage.png";

const Cards = ({ data, title }) => {
  // Helper function to truncate text based on length
  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    // Use responsive grid for better layout on different screen sizes
    // gap-4 for consistent spacing between cards
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4 md:p-8 bg-[#1f1E24]">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className="relative block w-full aspect-[2/3] rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          key={i}
        >
          {/* Image with improved object-fit and responsiveness */}
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
            loading="lazy" // Add lazy loading for images
          />

          {/* Title with responsive truncation */}
          <h1 className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black via-black/70 to-transparent text-white text-xs sm:text-sm font-bold truncate">
            {/* Truncate based on screen size (example: 20 chars for small, 30 for medium, etc.) */}
            <span className="hidden sm:inline">
              {truncateText(c.title || c.name || c.original_name || c.original_title, 30)}
            </span>
            <span className="sm:hidden">
              {truncateText(c.title || c.name || c.original_name || c.original_title, 20)}
            </span>
          </h1>

          {/* Vote average with responsive positioning and size */}
          {c.vote_average && (
            <div className="absolute top-2 right-2 w-8 h-8 md:w-10 md:h-10 text-xs md:text-sm font-semibold bg-yellow-600 text-white rounded-full flex justify-center items-center p-1">
              {/* Ensure number is formatted for display */}
              {Math.round(c.vote_average * 10)}%
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;