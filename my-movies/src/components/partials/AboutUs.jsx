import about from "/about.jpg";
import movielogo from "/movielogo.png";

const AboutUs = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), 
      url(${about})`,
        backgroundPosition: "10% 20%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative h-screen w-screen px-[10%] text-white"
    >
      <h1 className="text-center pt-10 font-black text-5xl">
        ABOUT CGMULTIPLEX
      </h1>

      <div className="text-center text-base pt-5">
        <h2 className="text-lg py-3">
          Welcome to CGMultiplex Movies, your number one source for all things
          entertainment. We&apos;re dedicated to giving you the very best of
          movies, with a focus on quality, variety, and customer satisfaction.
        </h2>

        <h2 className="text-lg py-3 font-bold">Our Story</h2>
        <p>
          Founded in 2023, CGMultiplex Movies has come a long way from its
          beginnings. When we first started out, our passion for bringing the
          best movies to viewers drove us to do intense research and gave us the
          impetus to turn hard work and inspiration into a booming online
          streaming service. We now serve customers all over the world and are
          thrilled to be a part of the entertainment industry.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-start md:items-center space-y-5 md:space-y-0 md:space-x-10">
          <div className="md:w-1/3">
            <h2 className="text-lg py-3 font-bold">What We Offer</h2>
            <p>We offer a wide range of movies across various genres.</p>
          </div>

          <div className="md:w-1/3">
            <h2 className="text-lg font-bold py-3">Our Mission</h2>
            <p>
              Our mission is to provide the best movie-watching experience to
              our audience.
            </p>
          </div>

          <div className="md:w-1/3">
            <h2 className="text-lg py-3 font-bold">Get in Touch</h2>
            <p>
              If you have any questions or comments, please don&apos;t hesitate
              to contact us.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-7">
          <img
            className="h-14 w-14 rounded object-cover"
            src={movielogo}
            alt="Movie Logo"
          />
          <h1 className="text-xl p-4 font-bold">
            The CGMultiplex Movies Team
          </h1>
        </div>
      </div>

      <footer className="text-center pt-16">
        <p>&copy; 2024 CGMultiplex Movies. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
