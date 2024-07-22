import { Link } from "react-router-dom"

const Topnav = () => {
  return (
    <div className="w-full h-[10vh] relative flex justify-center items-center ">
      <i className="text-zinc-400 text-2xl ri-search-line"></i>
      <input className="w-[50%] mx-10 p-2 text-md outline-none border-none bg-transparent text-zinc-200" type='text' placeholder="search any movie" />
      <i className="text-zinc-400 text-2xl ri-close-large-line"></i>

      <div className="absolute top-[90%] w-[50%] h-[50vh] bg-zinc-200 overflow-auto">
        <Link className="hover:text-zinc-900 hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-full p-5 flex justify-start items-center border-b-2 border-zinc-100">
        <img src="" alt="" />
        <span>Hello Everyone</span>
        </Link>
        <Link className="hover:text-zinc-900 hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-full p-5 flex justify-start items-center border-b-2 border-zinc-100">
        <img src="" alt="" />
        <span>Hello Everyone</span>
        </Link>
        <Link className="hover:text-zinc-900 hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-full p-5 flex justify-start items-center border-b-2 border-zinc-100">
        <img src="" alt="" />
        <span>Hello Everyone</span>
        </Link>
        <Link className="hover:text-zinc-900 hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-full p-5 flex justify-start items-center border-b-2 border-zinc-100">
        <img src="" alt="" />
        <span>Hello Everyone</span>
        </Link>
        <Link className="hover:text-zinc-900 hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-full p-5 flex justify-start items-center border-b-2 border-zinc-100">
        <img src="" alt="" />
        <span>Hello Everyone</span>
        </Link>
        
      </div>
    </div>
  )
}

export default Topnav
