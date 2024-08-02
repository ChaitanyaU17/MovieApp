import { Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Trending from './components/Trending';
import Popular from './components/Popular';
import Movie from './components/Movie';
import Tvshows from './components/Tvshows';
import People from './components/People';
import AboutUs from './components/partials/AboutUs';
import ContactUs from './components/partials/ContactUs';

function App() {
  return (
      <div className="flex bg-[#1f1E24] w-screen h-screen">
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='trending' element={ <Trending />} />
          <Route path='/popular' element={ <Popular /> } />
          <Route path='/movies' element={ <Movie /> } />
          <Route path='/tvshows' element={ <Tvshows /> } />
          <Route path='/people' element={ <People /> } />
          <Route path='/about' element={ <AboutUs /> } />
          <Route path='/contact' element={ <ContactUs /> } />
        </Routes>
      </div>
  )
}

export default App
