import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import TopList from './Components/TopList/TopList';
import BgImage from './assets/pngkey.png';
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

  const App = () => {
return (
<div style = {bgStyle} className="overflow-x-hidden">
  <div className='min-h-screen bg-white/50 backdrop-blur-3xl'>
    <Navbar />
    <Hero />
    <TopList />
    <Banner />
    <Services />
  </div>
  
  </div>
);
  };


export default App;
