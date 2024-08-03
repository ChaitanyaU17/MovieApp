import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removeMovie } from "../store/actions/movieActions";
import { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Moviedetails = () => {
  const {pathname} = useLocation();
  const { info } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(info);

  useEffect(() => {
    dispatch(asyncloadmovie(id));

    return () => {
      dispatch(removeMovie());
    };
  }, []);

  return info ? (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), 
      url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "10% 20%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen w-screen px-[10%] "
    >
      {/* part 1 navigation */}
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] ri-arrow-left-fill"
        ></Link>

        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          IMDB
        </a>
      </nav>

      {/* part 2 poster and details */}
      <div className="w-full flex ">
        <img
          className="h-[50vh] w-[20%] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.backdrop_path || info.detail.poster_path
          }`}
          alt=""
        />

        {/* Movie title */}
        <div className="content text-white ml-[5%]">
          <h1 className="text-5xl font-black">
            {info.detail.title ||
              info.detail.name ||
              info.detail.original_name ||
              info.detail.original_title}

            {/* <small className="text-zinc-200">
              {" "}
              {info.detail.release_date.split("-")[0]}
            </small> */}
          </h1>

          {/* movie information */}
          <div className="flex flex-col text-zinc-300 font-bold gap-x-3 mt-2">
            <div className="flex items-center gap-x-3 text-zinc-200">
              <h1>{info.detail.release_date.split("-")[0]} .</h1>
              <h1>{info.detail.genres.map((g) => g.name).join(" | ")}</h1>
              <h1>
                {Math.floor(info.detail.runtime / 60)}h{" "}
                {info.detail.runtime % 60}m
              </h1>
            </div>

            <h1 className="font-medium text-base my-2 ">
              {info.detail.tagline}
            </h1>
            <p className="font-normal text-base ">{info.detail.overview}</p>
            <h1 className="text-zinc-300 my-2">
              <span className="text-zinc-400 pr-4">Languages</span>{" "}
              {info.translations.join(" ")}
            </h1>

            <div className="flex items-center gap-x-3 mt-2">
              <h1>IMDB</h1>
              <span className="w-[6vh] h-[6vh] text-md font-semibold bg-yellow-600 text-white rounded-full flex justify-center items-center">
                {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
              </span>
            </div>

            <Link
              className="mt-5 w-[23%] rounded-lg text-xl font-bold p-2 bg-[#6556cd] bg-opacity-40 hover:bg-opacity-55"
              to={`${pathname}/trailer`}
            >
              <i className="ri-play-large-fill mr-2"></i>
              Watch Trailer
            </Link>
          </div>
        </div>
      </div>

      {/* part 3 available on platform */}
      <div className="w-[80%] flex flex-col gap-y-5 mt-28">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-10 items-center text-white">
            <i className="text-lg font-semibold text-zinc-300 ">Available On</i>
            {info.watchproviders.flatrate.map((f, i) => (
              <img
                key={i}
                title={f.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${f.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-10 items-center text-white">
            <i className="text-lg font-semibold text-zinc-300 ">
              Available On Rent
            </i>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <i className="text-lg font-semibold text-zinc-300 ">
              Available To Buy
            </i>
            {info.watchproviders.buy.map((b, i) => (
              <img
                key={i}
                title={b.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${b.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
