import { Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Trending from './components/partials/Trending';

function App() {
  return (
      <div className="flex bg-[#1f1E24] w-screen h-screen">
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='trending' element={ <Trending />} />
        </Routes>
      </div>
  )
}

export default App
