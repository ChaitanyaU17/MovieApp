//import React from 'react'
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
    const navigate = useNavigate();
  return (
    <div className="w-screen h-screen text-white">
      <h1 className="text-4xl p-5"><i
              onClick={() => navigate(-1)}
              className="hover:text-[#6556cd] ri-arrow-left-fill"
            ></i>{'  '}CONTACT US!</h1>
      <h2 className="text-2xl pl-5">We can&apos;t solve your problem if you don&apos;t tell us about it!</h2>

      <div className="w-[50%] h-[60vh] ml-5 mt-4 border border-zinc-400">

      </div>
    </div>
  )
}

export default ContactUs;
