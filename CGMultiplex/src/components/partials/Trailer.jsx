import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import Notfound from "../Notfound";

const Trailer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname; 
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);

  return (
    <div className="absolute bg-[rgba(0,0,0,0.9)] z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center text-white p-4">
      <Link
        onClick={() => navigate(-1)}
        className="absolute hover:text-[#6556cd] ri-close-fill text-3xl top-4 right-4 md:text-4xl"
      ></Link>

      {ytvideo ? (
        <ReactPlayer
          controls
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
          width="100%"
          height="100%"
          style={{ maxWidth: '1000px', maxHeight: '600px' }}
        />
      ) : (
        <Notfound />
      )}
    </div>
  );
}

export default Trailer;
