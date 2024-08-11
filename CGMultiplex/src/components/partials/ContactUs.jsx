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
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-screen text-white flex flex-col md:flex-row items-center justify-center p-4 md:p-8"
    >
      <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-center px-4 md:px-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-go-back-fill cursor-pointer"
          ></i>
          {" "}CONTACT US!
        </h1>
        <h2 className="text-xl md:text-2xl mb-6">
          We can&apos;t solve your problem if you don&apos;t tell us about it!
        </h2>

        <form onSubmit={formHandler} className="w-full max-w-lg">
          <div className="flex flex-col gap-4 mb-4 text-black">
            <input
              className="w-full p-3 outline-none rounded-md border border-gray-300"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="w-full p-3 outline-none rounded-md border border-gray-300"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              className="w-full p-3 outline-none rounded-md border border-gray-300"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div className="bg-black mt-4 p-4 flex items-center border border-gray-400 rounded-md">
            <input
              type="checkbox"
              id="not-a-robot"
              className="form-checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label className="ml-2 font-semibold" htmlFor="not-a-robot">
              I&apos;m not a robot
            </label>
          </div>

          <button
            type="submit"
            className="bg-red-600 p-2 mt-4 text-lg font-semibold rounded-md"
          >
            SEND
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-4 md:px-8 text-center">
        <Link to='/'>
          <h1 className="text-4xl md:text-6xl font-bold flex items-center justify-center mb-4">
            <img
              className="h-16 md:h-20 w-16 md:w-20 rounded object-cover mr-2"
              src={movielogo}
              alt="Movie Logo"
            />
            <span className="text-[#6556cd] text-4xl md:text-5xl">CG</span>Multiplex
          </h1>
        </Link>
        <div className="text-2xl md:text-4xl flex items-center justify-center gap-4 mb-4">
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
