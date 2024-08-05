import { useDispatch, useSelector } from "react-redux";
import { asyncloadpeople, removePeople } from "../store/actions/peopleActions";
import { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Loading from "../components/Loading";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "../components/partials/Dropdown";

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
    <div className="px-[5%] h-screen w-screen overflow-y-scroll">
      {/* part 1 navigation */}
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-x-5 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] ri-arrow-go-back-fill"
        ></Link>
      </nav>

      <div className="w-full flex ">
        {/* part 2 left poster and details */}
        <div className="w-[20%]">
          <img
            className="h-[50vh] w-full object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500 w-[100%]" />

          {/* social media handles */}
          <div className="text-2xl text-white flex gap-x-10 ">
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

          {/* personal info */}
          <h1 className="text-xl font-semibold my-5 text-zinc-300">
            Personal Info
          </h1>

          <h1 className="text-xl font-semibold text-zinc-300">Know For</h1>
          <h1 className="text-xl font-semibold text-zinc-300">
            {info.detail.known_for_department}
          </h1>

          <h1 className="text-xl font-semibold text-zinc-300 mt-3">Gender</h1>
          <h1 className="text-xl font-semibold text-zinc-300">
            {info.detail.gender === 2 ? "male" : "female"}
          </h1>

          <h1 className="text-xl font-semibold text-zinc-300 mt-3">Birthday</h1>
          <h1 className="text-xl font-semibold text-zinc-300">
            {info.detail.birthday}
          </h1>

          {info.detail.deathday && (
            <>
              <h1 className="text-xl font-semibold text-zinc-300 mt-3">
                Deathday
              </h1>
              <h1 className="text-xl font-semibold text-zinc-300">
                {info.detail.deathday}
              </h1>
            </>
          )}

          <h1 className="text-xl font-semibold text-zinc-300 mt-3">
            Place Of Birth
          </h1>
          <h1 className="text-xl font-semibold text-zinc-300">
            {info.detail.place_of_birth}
          </h1>

          <h1 className="text-xl font-semibold text-zinc-300 mt-3">
            Also Known As
          </h1>
          <h1 className="text-xl font-semibold text-zinc-300">
            {info.detail.also_known_as.join(", ")}
          </h1>
        </div>

        {/* part 3 right details and information */}
        <div className="w-[80%] ml-[4%]">
          <h1 className="text-5xl font-black text-zinc-300">
            {info.detail.name}
          </h1>

          <h1 className="text-xl font-bold mt-5 text-zinc-300">Biography</h1>
          <p className="text-lg font-normal text-zinc-300 my-3">
            {info.detail.biography}
          </p>

          <h1 className="text-xl font-bold mt-5 text-zinc-300">
            Movies <i className="ri-arrow-right-wide-line"></i>
          </h1>
          <HorizontalCards data={info.combinedcredits.cast} />

          <div className="w-full flex justify-between">
            <h1 className="text-xl font-bold mt-5 text-zinc-300">Acting</h1>

            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>

          {/* background image apply while editing CGMultiplex*/}

          <div
            className="list-disc text-zinc-300 w-full h-[50vh] overflow-x-hidden overflow-y-auto 
          shadow-[rgba(255,255,255,.3)] shadow-xl my-7 border border-zinc-700 p-5"
          >
            {info[category + "credits"].cast.map((c, i) => (
              <li
                key={i}
                className="hover:text-white duration-300 cursor-pointer p-2"
              >
                <Link to={`/${category}/details/${c.id}`}>
                  <span className="font-bold text-xl">
                    🎬{" "}
                    {c.title || c.name || c.original_name || c.original_title}
                  </span>
                  <span className="block ml-6">
                    {c.character && (
                      <>
                        <i className="ri-emoji-sticker-line text-[20px] mr-2"></i>{" "}
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
