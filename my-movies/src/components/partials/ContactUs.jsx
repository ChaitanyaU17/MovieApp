import {useState} from 'react'
import { useNavigate } from "react-router-dom";

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

      <form onSubmit={formHandler}>
        <div className="w-[50%] h-[50vh] ml-5 mt-4 text-black">
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

        <div className="bg-black mt-4 ml-5 p-5 w-[20%] flex justify-start items-center border border-zinc-400">
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

        <button type="submit" className="bg-red-600 ml-6 p-1 mt-3 text-xl font-semibold rounded-sm">
          SEND
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
