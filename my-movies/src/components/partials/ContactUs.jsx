import {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import movielogo from '/movielogo.png';
import people from '/people.jpg';

const ContactUs = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    if (isChecked) {
      alert(`Thank you, ${name}! Your message has been received.`);
      setName('');
      setEmail('');
      setMessage('');
      setIsChecked(false);
    } else {
      alert('Please confirm you are not a robot.');
    }
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div 
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), 
    url(${people})`,
      backgroundPosition: "10% 20%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
    className="w-screen h-screen text-white flex items-center gap-x-12">
      <div className="w-[50%] h-full">
        <h1 className="text-4xl p-5">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-go-back-fill"
          ></i>
          {"  "}CONTACT US!
        </h1>
        <h2 className="text-2xl pl-5">
          We can&apos;t solve your problem if you don&apos;t tell us about it!
        </h2>

        <form onSubmit={formHandler}>
          <div className="w-full h-[50vh] ml-5 mt-4 text-black">
            <p className="h-[29%]">
              <input
                className="w-full h-[90%] p-5 outline-none"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </p>
            <p className="h-[29%]">
              <input
                className="w-full h-[90%] p-5 outline-none"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </p>
            <p className="h-[42%]">
              <textarea
                className="w-full h-full p-5 outline-none"
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </p>
          </div>

          <div className="bg-black mt-4 ml-5 p-5 w-[50%] flex justify-start items-center border border-zinc-400">
            <input
              type="checkbox"
              id="not-a-robot"
              className="size-7"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label className="ml-2 font-semibold" htmlFor="not-a-robot">
              I&apos;m not a robot
            </label>
          </div>

          <button
            type="submit"
            className="bg-red-600 ml-6 p-1 mt-3 text-xl font-semibold rounded-sm"
          >
            SEND
          </button>
        </form>
      </div>
      <div className=" w-[50%] h-full pl-5 text-white pt-36">
        <Link to='/'>
        <h1 className="text-6xl text-white font-bold ">
          <div className="flex items-center pl-14">
            <img
              className="h-20 w-20 rounded object-cover "
              src={movielogo}
              alt="Movie Logo"
            />
            <span className="px-1 ">
              <span className="text-[#6556cd] text-7xl">CG</span>Multiplex
            </span>
          </div>
        </h1>
        </Link>
        <div className="text-4xl flex items-center justify-center pt-14 gap-x-4">
          <a
            href="https://www.linkedin.com/in/chaitanya-umbarkar-323470239/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>

          <a
            href="https://x.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-twitter-x-fill"></i>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-github-fill"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-instagram-fill"></i>
          </a>

          <a
            href="https://t.me/CGMultiplex/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-telegram-fill"></i>
          </a>
          
          
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
