import { useDispatch, useSelector } from "react-redux";
import { asyncloadpeople, removePeople } from "../store/actions/peopleActions";
import { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Loading from "../components/Loading";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "../components/partials/Dropdown";
import peoplebackground from '/peopleback.jpg';

const Peopledetails = () => {
  const { pathname } = useLocation();
  const { info } = useSelector((state) => state.people);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [category, setCategory] = useState("movie");

  console.log(info);

  useEffect(() => {
    dispatch(asyncloadpeople(id));

    return () => {
      dispatch(removePeople());
    };
  }, [id]);

  return info ? (
    <div className="px-4 md:px-[5%] h-screen w-screen overflow-y-scroll">
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-x-3 sm:gap-x-5 text-lg md:text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] ri-arrow-go-back-fill font-bold text-xl sm:text-2xl md:text-3xl"
        ></Link>
      </nav>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[30%] mb-4 md:mb-0">
          <img
            className="h-[50vh] md:h-[50vh] object-contain shadow-lg"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
            
          />

          <div className="text-xl sm:text-2xl md:text-3xl text-white mt-3 flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-box-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://twitter.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>

          <hr className="mt-2 mb-5 border-none h-[2px] bg-zinc-600 w-full" />

          <div className="text-white">
            <h1 className="text-xl sm:text-2xl font-bold my-3 sm:my-5">Personal Info</h1>

            <h1 className="text-base sm:text-lg font-bold mt-2">
              Known For{' '}
              <span className="font-semibold">{info.detail.known_for_department}</span>
            </h1>

            <h1 className="text-base sm:text-lg font-bold mt-2">
              Gender <span className="font-semibold">{info.detail.gender === 2 ? "Male" : "Female"}</span>
            </h1>

            <h1 className="text-base sm:text-lg font-bold mt-2">
              Birthday <span className="font-semibold">{info.detail.birthday}</span>
            </h1>

            {info.detail.deathday && (
              <h1 className="text-base sm:text-lg font-bold mt-2">
                Deathday <span className="font-semibold">{info.detail.deathday}</span>
              </h1>
            )}

            <h1 className="text-base sm:text-lg font-bold mt-2">
              Place Of Birth <span className="font-semibold">{info.detail.place_of_birth}</span>
            </h1>

            <h1 className="text-base sm:text-lg font-bold mt-2">
              Also Known As
            </h1>
            <p className="text-sm sm:text-base font-semibold leading-relaxed">
              {info.detail.also_known_as.join(", ")}
            </p>
          </div>
        </div>

        <div className="w-full md:w-[70%] ml-0 md:ml-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-300">
            {info.detail.name}
          </h1>

          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 sm:mt-5 text-zinc-300">Biography</h1>
          <p className="text-sm sm:text-base md:text-xl font-normal text-zinc-300 my-2 sm:my-3 leading-relaxed">
            {info.detail.biography}
          </p>

          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 sm:mt-5 text-zinc-300">
            Movies <i className="ri-arrow-right-wide-line"></i>
          </h1>
          <HorizontalCards data={info.combinedcredits.cast} />

          <div className="w-full flex flex-col md:flex-row justify-between mt-5">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-300">Acting</h1>

            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>

          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), 
                url(${peoplebackground})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="text-white w-full h-[40vh] sm:h-[50vh] mt-4 sm:mt-7 p-3 sm:p-5 border border-zinc-700 shadow-xl overflow-y-auto"
          >
            {info[category + "credits"].cast.map((c, i) => (
              <li
                key={i}
                className="hover:text-zinc-300 duration-300 cursor-pointer p-1 sm:p-2"
              >
                <Link to={`/${category}/details/${c.id}`}>
                  <span className="font-bold text-base sm:text-lg md:text-xl leading-tight block">
                    🎬{" "}
                    {c.title || c.name || c.original_name || c.original_title}
                  </span>
                  <span className="block ml-4 sm:ml-6 text-sm sm:text-base">
                    {c.character && (
                      <>
                        <i className="ri-emoji-sticker-line text-base sm:text-lg mr-1 sm:mr-2"></i>{" "}
                        {`Character Name: ${c.character}`} 
                      </>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Peopledetails;