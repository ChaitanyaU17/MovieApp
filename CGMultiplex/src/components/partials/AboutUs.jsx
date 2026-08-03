import aboutus from "/aboutus.jpg";
import movielogo from "/movielogo.png";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), 
        url(${aboutus})`, // Darker gradient for better text contrast
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // Keep background fixed on scroll
      }}
      className="relative min-h-screen w-screen px-4 py-8 md:px-[10%] text-white flex flex-col justify-between" // Added py-8, flex-col, justify-between
    >
      <i
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 md:top-6 md:left-6 hover:text-[#6556cd] text-2xl md:text-3xl ri-arrow-go-back-fill cursor-pointer z-10" // Responsive icon size, z-index
      ></i>
      
      <div className="flex flex-col items-center max-w-4xl mx-auto my-auto text-center z-10"> {/* Centered content */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
          ABOUT <span className="text-[#6556cd] text-5xl md:text-6xl lg:text-7xl">CG</span>MULTIPLEX
        </h1>

        <div className="space-y-6 text-base md:text-lg lg:text-xl leading-relaxed"> {/* Adjusted text sizes and line-height */}
          <h2 className="text-xl md:text-2xl font-semibold">
            Welcome to CGMultiplex Movies, your number one source for all things
            entertainment. We&apos;re dedicated to giving you the very best of
            movies, with a focus on quality, variety, and customer satisfaction.
          </h2>

          <h2 className="text-lg md:text-xl font-bold">Our Story</h2>
          <p className="text-sm md:text-base">
            Founded in 2023, CGMultiplex Movies has come a long way from its
            beginnings. When we first started out, our passion for bringing the
            best movies to viewers drove us to do intense research and gave us the
            impetus to turn hard work and inspiration into a booming online
            streaming service. We now serve customers all over the world and are
            thilled to be a part of the entertainment industry.
          </p>

          <div className="flex flex-col md:flex-row justify-around items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 text-center text-sm md:text-base">
            <div className="md:w-1/3">
              <h2 className="text-lg md:text-xl font-bold mb-2">What We Offer</h2>
              <p>We offer a wide range of movies across various genres and categories, ensuring there's something for everyone.</p>
            </div>

            <div className="md:w-1/3">
              <h2 className="text-lg md:text-xl font-bold mb-2">Our Mission</h2>
              <p>
                Our mission is to provide the best, most accessible, and immersive movie-watching experience to
                our audience worldwide.
              </p>
            </div>

            <div className="md:w-1/3">
              <h2 className="text-lg md:text-xl font-bold mb-2">Get in Touch</h2>
              <p>
                If you have any questions, feedback, or comments, please don&apos;t hesitate to <Link to="/contact" className="text-[#6556cd] hover:underline">contact us</Link>. We'd love to hear from you!
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center pt-8"> {/* Adjusted padding */}
            <img
              className="h-10 w-10 md:h-12 md:w-12 rounded object-cover mr-2" // Responsive logo size
              src={movielogo}
              alt="Movie Logo"
            />
            <h1 className="text-xl md:text-2xl font-bold">
              The <span className="text-[#6556cd] text-2xl md:text-3xl">CG</span>Multiplex Team
            </h1>
          </div>
        </div>
      </div>

      <footer className="w-full text-center text-sm md:text-base text-zinc-400 mt-8 z-10"> {/* Added mt-8 for spacing */}
        <p>&copy; {new Date().getFullYear()} CGMultiplex Movies. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;