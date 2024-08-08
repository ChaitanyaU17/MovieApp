import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removeTv } from "../store/actions/tvActions";
import { useEffect } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "../components/Loading";
import HorizontalCards from "./partials/HorizontalCards";
import noimage from '/noimage.png';

const Tvdetails = () => {
  const { pathname } = useLocation();
  const { info } = useSelector((state) => state.tv);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(info);

  useEffect(() => {
    dispatch(asyncloadtv(id));

    return () => {
      dispatch(removeTv());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), 
      url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "10% 20%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative h-[220vh] w-screen px-[10%]"
    >
      {/* part 1 navigation */}
      <nav className="h-[8vh] w-full text-zinc-100 flex items-center pb-4 gap-10 text-lg">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] ri-arrow-go-back-fill font-bold"
        ></Link>

        <a className="font-semibold" target="_blank" href={info.detail.homepage}>
          Official TV Page <i className="ri-external-link-fill"></i>
        </a>
        <a
        className="font-semibold"
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          Wikipedia <i className="ri-earth-fill"></i>
        </a>
        <a
        className="flex items-center"
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          {/* IMDB<i className="ri-star-fill pl-1"></i> */}
          <button className="bg-yellow-400 px-2 mt-1 font-black text-xl text-black rounded">IMDb</button>
        </a>
        
      </nav>
      {/* <hr className="mb-5 border-none h-[2px] bg-white opacity-50 w-full " /> */}

      {/* part 2 poster and details */}
      <div className="w-full flex mb-[5%]">
        <img
          className="h-[50vh] w-[20%] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
          src={ info.detail.backdrop_path || info.detail.poster_path ? `https://image.tmdb.org/t/p/original/${
            info.detail.backdrop_path || info.detail.poster_path
          }` : noimage}
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
          <div className="flex flex-col text-lg text-white font-bold gap-x-3 mt-4">
            <div className="flex items-center gap-x-2 text-zinc-200">
              <h1>
                {info.detail.first_air_date.split("-")[0]}{" "}
                <span className="font-black ml-1">.</span>
              </h1>
              {/* <h1 >{info.detail.number_of_seasons}{' '}Seasons <span className="font-black ml-1">.</span></h1> */}
              <h1>
                {info.detail.number_of_seasons > 1 ? (
                  <span>
                    {info.detail.number_of_seasons} Seasons{' '}
                    <span className="font-black ml-1">.</span>
                  </span>
                ) : (
                  <span>
                    {info.detail.number_of_seasons} Season
                    <span className="ml-1 font-black">.</span>
                  </span>
                )}
              </h1>
              <h1>{info.detail.genres.map((g) => g.name).join(" | ")}</h1>
            </div>

            <h1 className="font-medium text-base my-1 ">
              {info.detail.tagline}
            </h1>
            <p className="font-normal text-opacity-60 text-base ">
              {info.detail.overview.slice(0, 300)}...
            </p>
            <h1 className="text-white text-opacity-80 my-2 text-base">
              <span className="text-white text-opacity-80 pr-4">Languages</span>{" "}
              {info.translations.join(" | ")}
            </h1>

            <div className="flex items-center gap-x-3 mt-2">
              <h1>IMDB</h1>
              <span className="w-[6vh] h-[6vh] text-md font-semibold bg-yellow-600 text-white rounded-full flex justify-center items-center">
                {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
              </span>
            </div>

            <Link
              className="mt-3 w-48 rounded-lg text-xl font-bold p-3 bg-zinc-400 bg-opacity-40 hover:bg-opacity-55"
              to={`${pathname}/trailer`}
            >
              <i className="ri-play-large-fill mr-2 "></i>
              Watch Trailer
            </Link>
          </div>
        </div>
      </div>

      {/* part 3 Seasons */}
      <h1 className="text-xl font-semibold text-zinc-300 italic">Seasons</h1>
      <HorizontalCards
        data={
          info.detail.seasons.length > 0 ? (
            info.detail.seasons
          ) : (
            <h1 className="text-3xl mt-5 text-white font-black text-center">
              Nothing To Show
            </h1>
          )
        }
      />

      {/* part 4 Recommendations */}
      <h1 className="text-xl font-semibold text-zinc-300 italic">
        Recommended
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />

      {/* part 5 available on platform */}
      <div className="w-[80%] flex flex-col gap-y-3 mt-[1%]">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-10 items-center text-white mt-4">
            <i className="text-md font-semibold text-zinc-300 ">Available On</i>
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
            <i className="text-md font-semibold text-zinc-300 ">
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
            <i className="text-md font-semibold text-zinc-300 ">
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

      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default Tvdetails;
