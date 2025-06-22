import React from 'react';
import Img2 from '../../assets/farfalle.jpg';
import Img1 from '../../assets/229320906.png';
import Img3 from '../..//assets/54999735.png';

const FoodData = [
    {
        image: Img2,
        rating: "⭐⭐⭐⭐⭐",
        price: "₦15000",
        name: "Materelli",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        image: Img1,
        rating: "⭐⭐⭐⭐⭐",
        price: "₦10000",
        name: "Hamburger",
         desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",   
    },
    {
        image: Img3,
        rating: "⭐⭐⭐⭐⭐",
        price: "₦20000",
        name: "Vegan Brunch",
         desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    }
];

const TopList = () => {
  return (
    <div className='container py-14 md:ml-30'>
    <div className='text-center mb-12'>
        <h1 className='text-4xl font-semibold'>Top List</h1>
        <p>Our top list</p>
    </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
           {FoodData.map((item, index) => (
            <div
                key={index}
                className='bg-white/50 p-5 sm:p-3 rounded-3xl hover:scale-110 transition duration-300'>
                    <img
                    src={item.image}
                    alt=''
                    className='w-60 sm:w-40 sm:h-40 mx-auto object-cover rounded-full img-shadow' />
                    <div className='space-y-2'>
                        <p className='text-red-500'>{item.rating}</p>
                        <p className='text-lg font-semibold'>{item.name}</p>
                        <p>{item.desc}</p>
                        <p className='text-lg font-semibold'>{item.price}</p>
                    </div>
            </div>
           ))}
             
        </div>
    </div>
  )
}

export default TopList