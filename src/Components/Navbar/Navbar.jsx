import React from 'react';
import Passport from '../../assets/5177900.jpg';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return <div className='py-4'>
<div className="container flex justify-between">
    <div>
        <p className='text-lg font-semibold'>
            FOOD <span className='text-red-500'>EAT</span>
        </p>
    </div>

    <div className='flex justify-center items-center gap-10'>
        <ul className='gap-8 hidden sm:flex '>
            <li className='hover:border-b-2
            border-primary uppercase'>Home</li>
             <li className='hover:border-b-2
            border-primary uppercase'>Menu</li>
              <li className='hover:border-b-2
            border-primary uppercase'>About</li>
        </ul>
    </div>
            <div className='flex gap-4 items-center'>
            <img src={Passport} alt='' className='w-10 rounded-full'/>
            <IoIosArrowDown />
            </div>
</div>
  </div>;
};

export default Navbar;