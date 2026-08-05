import {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import movielogo from '/movielogo.png';
import people from '/people.jpg'; // Using 'people' for background as in original

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
      // In a real application, you would send this data to a backend
      // console.log({ name, email, message });
      setName('');
      setEmail('');
      setMessage('');
      setIsChecked(false);
    } else {
      alert('Please confirm you are not a robot to send your message.');
    }
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div 
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), 
        url(${people})`, // Darker gradient for better text contrast
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="min-h-screen w-screen text-white flex flex-col items-center justify-center p-4 md:p-8"
    >
      <div className="bg-[#1f1E24] bg-opacity-90 rounded-lg shadow-xl p-6 md:p-10 max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 z-10"> {/* Added grid layout, max-w, opacity */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex items-center">
            <i
              onClick={() => navigate(-1)}
              className="hover:text-[#6556cd] ri-arrow-go-back-fill cursor-pointer text-2xl md:text-3xl mr-3" // Responsive icon size
            ></i>
            CONTACT US!
          </h1>
          <h2 className="text-lg md:text-xl mb-6 text-zinc-300">
            We can&apos;t solve your problem if you don&apos;t tell us about it!
          </h2>

          <form onSubmit={formHandler} className="w-full space-y-4"> {/* Added space-y */}
            <input
              className="w-full p-3 bg-zinc-700 outline-none rounded-md border border-zinc-600 focus:border-[#6556cd] text-white placeholder-zinc-400 transition-colors duration-200"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="w-full p-3 bg-zinc-700 outline-none rounded-md border border-zinc-600 focus:border-[#6556cd] text-white placeholder-zinc-400 transition-colors duration-200"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              className="w-full p-3 bg-zinc-700 outline-none rounded-md border border-zinc-600 focus:border-[#6556cd] text-white placeholder-zinc-400 transition-colors duration-200 min-h-[120px]" // Min-height for textarea
              placeholder="Your Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <div className="bg-zinc-800 p-3 flex items-center border border-zinc-600 rounded-md">
              <input
                type="checkbox"
                id="not-a-robot"
                className="form-checkbox h-5 w-5 text-[#6556cd] bg-zinc-700 border-zinc-500 rounded focus:ring-[#6556cd]" // Custom checkbox styling
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label className="ml-3 font-semibold text-base md:text-lg" htmlFor="not-a-robot">
                I&apos;m not a robot
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition-colors duration-200 p-3 mt-4 text-lg font-semibold rounded-md uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed" // Added disabled styles
              disabled={!isChecked} // Disable button if not checked
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
        
        {/* Right side with logo and social links */}
        <div className="flex flex-col items-center justify-center text-center p-4 lg:border-l lg:border-zinc-700">
          <Link to='/' className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold flex items-center justify-center">
              <img
                className="h-14 w-14 md:h-16 md:w-16 rounded object-cover mr-3"
                src={movielogo}
                alt="Movie Logo"
              />
              <span className="text-[#6556cd] text-4xl md:text-5xl lg:text-6xl">CG</span>Multiplex
            </h1>
          </Link>
          <p className="text-lg md:text-xl text-zinc-300 mb-6">Connect with us on social media!</p>
          <div className="text-3xl md:text-4xl flex items-center justify-center gap-5"> {/* Responsive icon sizes */}
            <a
              href="https://www.linkedin.com/in/chaitanya-umbarkar-323470239/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6556cd] transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6556cd] transition-colors duration-200"
              aria-label="X (Twitter) Profile"
            >
              <i className="ri-twitter-x-fill"></i>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6556cd] transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <i className="ri-github-fill"></i>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6556cd] transition-colors duration-200"
              aria-label="Instagram Profile"
            >
              <i className="ri-instagram-fill"></i>
            </a>

            <a
              href="https://t.me/CGMultiplex/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6556cd] transition-colors duration-200"
              aria-label="Telegram Channel"
            >
              <i className="ri-telegram-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;