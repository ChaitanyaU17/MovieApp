import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading"; // Your existing loading component

// Lazy load components for route-based code splitting
const Home = React.lazy(() => import("./components/Home"));
const Trending = React.lazy(() => import("./components/Trending"));
const Popular = React.lazy(() => import("./components/Popular"));
const Movie = React.lazy(() => import("./components/Movie"));
const Tvshows = React.lazy(() => import("./components/Tvshows"));
const People = React.lazy(() => import("./components/People"));
const AboutUs = React.lazy(() => import("./components/partials/AboutUs"));
const ContactUs = React.lazy(() => import("./components/partials/ContactUs"));
const Tvdetails = React.lazy(() => import("./components/Tvdetails"));
const Moviedetails = React.lazy(() => import("./components/Moviedetails"));
const Peopledetails = React.lazy(() => import("./components/Peopledetails"));
const Trailer = React.lazy(() => import("./components/partials/Trailer"));
const Notfound = React.lazy(() => import("./components/Notfound"));

function App() {
  return (
    // Apply min-h-screen to ensure the background covers the full height
    <div className="flex bg-[#1f1E24] min-h-screen w-screen">
      {/* Suspense fallback for lazy-loaded components */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movie" element={<Movie />} />
          {/* Nested routes for movie details and trailer */}
          <Route path="/movie/details/:id" element={<Moviedetails />}>
            <Route path="/movie/details/:id/trailer" element={<Trailer />} />
          </Route>
          <Route path="/tv" element={<Tvshows />} />
          {/* Nested routes for TV details and trailer */}
          <Route path="/tv/details/:id" element={<Tvdetails />}>
            <Route path="/tv/details/:id/trailer" element={<Trailer />} />
          </Route>
          <Route path="/people" element={<People />} />
          <Route path="/people/details/:id" element={<Peopledetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;