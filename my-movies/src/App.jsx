import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import Tvshows from "./components/Tvshows";
import People from "./components/People";
import AboutUs from "./components/partials/AboutUs";
import ContactUs from "./components/partials/ContactUs";
import Tvdetails from "./components/Tvdetails";
import Moviedetails from "./components/Moviedetails";
import Peopledetails from "./components/Peopledetails";

function App() {
  return (
    <div className="flex bg-[#1f1E24] w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />} />
        <Route path="/tv" element={<Tvshows />} />
        <Route path="/tv/details/:id" element={<Tvdetails />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/details/:id" element={<Peopledetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
