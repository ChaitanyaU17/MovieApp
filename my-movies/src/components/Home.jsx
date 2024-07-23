import Sidenav from "./partials/Sidenav"
import Topnav from "./partials/Topnav"
import { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Header from "./partials/Header";

const Home = () => {
    document.title = 'MovieApp | Homepage'

    const[wallpaper, setWallpaper] = useState([]);

    const getHeaderWallpaper = async () =>  {
        try {
          const response = await axios.get(`/trending/all/day`);
          //console.log(response);
          const randomData = response.data.results[Math.floor(Math.random() * response.data.results.length)];
          
          setWallpaper(randomData);
        }  catch(err) {
          console.log('Error: ', err)
        }
      };

      useEffect(() => {
        !wallpaper || getHeaderWallpaper();
      }, []);
      
  return wallpaper ? (
    <>
    <Sidenav />
    <div className="w-[80%] h-full" >
    <Topnav />
    <Header data={wallpaper} />
    </div>
    </>
  ) : <h1>Loading...</h1>
}

export default Home
