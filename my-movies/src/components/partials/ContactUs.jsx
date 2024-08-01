import {useState} from 'react'
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen text-white">
      <h1 className="text-4xl p-5">
        <i
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] ri-arrow-left-fill"
        ></i>
        {"  "}CONTACT US!
      </h1>
      <h2 className="text-2xl pl-5">
        We can&apos;t solve your problem if you don&apos;t tell us about it!
      </h2>

      <div className="w-[50%] h-[50vh] ml-5 mt-4 text-black">
        <p className="h-[29%]">
          <input
            className="w-full h-[90%] p-5 outline-none"
            type="text"
            placeholder="Your Name"
          />
        </p>
        <p className="h-[29%]">
          <input className="w-full h-[90%] p-5 outline-none" type="email" placeholder="Email" />
        </p>
        <p className="h-[42%]">
          <textarea
            className="w-full h-full p-5 outline-none"
            type="text"
            placeholder="Message"
          />
        </p>
      </div>

      <div className='bg-black mt-4 ml-5 p-5 w-[20%] flex justify-start items-center'>
      <input
        type="checkbox"
        id="not-a-robot"
        className='size-7'
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label className='ml-2 font-semibold' htmlFor="not-a-robot">I&apos;m not a robot</label>
      </div>

      <button className="bg-red-600 ml-6 p-1 mt-3 text-xl font-semibold rounded-sm">SEND</button>
    </div>
  );
}

export default ContactUs;
