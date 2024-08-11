import aboutus from "/aboutus.jpg";
import movielogo from "/movielogo.png";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), 
      url(${aboutus})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative h-screen w-screen px-4 md:px-[5%] text-white"
    >
      <i
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 hover:text-[#6556cd] text-2xl ri-arrow-go-back-fill cursor-pointer"
      ></i>
      <div className="flex justify-center items-start h-full">
        <div className="text-center pt-4">
          <h1 className="text-4xl md:text-5xl font-black pb-4">
            ABOUT <span className="text-[#6556cd] text-5xl md:text-6xl">CG</span>MULTIPLEX
          </h1>

          <div className="text-base md:text-lg">
            <h2 className="text-xl md:text-lg py-3">
              Welcome to CGMultiplex Movies, your number one source for all things
              entertainment. We&apos;re dedicated to giving you the very best of
              movies, with a focus on quality, variety, and customer satisfaction.
            </h2>

            <h2 className="text-base md:text-base py-3 font-bold">Our Story</h2>
            <p className="pb-5 text-sm">
              Founded in 2023, CGMultiplex Movies has come a long way from its
              beginnings. When we first started out, our passion for bringing the
              best movies to viewers drove us to do intense research and gave us the
              impetus to turn hard work and inspiration into a booming online
              streaming service. We now serve customers all over the world and are
              thrilled to be a part of the entertainment industry.
            </p>

            <div className="flex flex-col md:flex-row justify-center text-sm items-center md:items-start space-y-5 md:space-y-0 md:space-x-10">
              <div className="md:w-1/3 text-center md:text-left">
                <h2 className="text-base md:text-base py-3 font-bold">What We Offer</h2>
                <p>We offer a wide range of movies across various genres.</p>
              </div>

              <div className="md:w-1/3 text-center md:text-left">
                <h2 className="text-base md:text-base py-3 font-bold">Our Mission</h2>
                <p>
                  Our mission is to provide the best movie-watching experience to
                  our audience.
                </p>
              </div>

              <div className="md:w-1/3 text-center md:text-left">
                <h2 className="text-base md:text-base py-3 font-bold">Get in Touch</h2>
                <p>
                  If you have any questions or comments, please don&apos;t hesitate
                  to contact us.
                </p>
              </div>
            </div>

            Uncomment and adjust as needed
            <div className="flex justify-center items-center pt-10">
              <img
                className="h-12 w-10 md:h-10 md:w-14 rounded object-cover"
                src={movielogo}
                alt="Movie Logo"
              />
              <h1 className="text-lg md:text-xl px-4 font-bold">
                The <span className="text-[#6556cd] text-2xl md:text-3xl">CG</span>Multiplex
                Movies Team
              </h1>
            </div>
           
          </div>
        </div>
      </div>

      <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-sm md:text-base">
        <p>&copy; 2024 CGMultiplex Movies. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
