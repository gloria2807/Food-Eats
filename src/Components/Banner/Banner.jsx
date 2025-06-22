import React from 'react';
import BannerImg from '../../assets/pngkey.png';

const Banner = () => {
  return (
    <div>
        <div className='container py-14 md:ml-30'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                <div className='flex justify-center items-center'>
                    <img src={BannerImg} alt='' />
                </div>
            <div className='flex flex-col justify-center'>
                <h1 className='text-3xl font-semibold'>Food Is Always Good</h1>
                <p className='py-4 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit laudantium ad quibusdam culpa itaque minima eos ratione provident tempore ullam consectetur magnam mollitia facere, beatae quidem atque. Sit, quaerat quis!</p>
            </div>
             </div>
        </div>
    </div>
  )
}

export default Banner