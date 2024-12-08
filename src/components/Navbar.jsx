import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants/index';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
 
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavber = () => {
       setMobileDrawerOpen(!mobileDrawerOpen);
    }

  return (
     <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700'>
        <div className="container px-4 mx-auto relative text-sm">
            <div className='flex justify-between items-center'>
                <div className="flex items-center flex-shrink-0">
                    <img className='h-10 w-10 mr-2' src={logo} />
                    <span className='text-xl tracking-tight'>White Devil</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item, idx) => (
                       <li key={idx}>
                          <a href={item.href}>{item.label}</a>
                       </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className='py-2 px-3 border rounded-sm'>
                        Sign in
                    </a>
                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                        Create an account
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavber}>
                        {mobileDrawerOpen ? <IoClose /> : <HiOutlineMenuAlt4 /> }
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
               <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                   <ul className=''>
                       {navItems.map((item, idx) => (
                          <li key={idx} className='py-4'>
                              <a href={item.href}>{item.label}</a>
                          </li>
                       ) )}
                   </ul>
                   <div className="flex space-x-6">
                       <a href="#" className='py-2 px-3 border rounded-sm'>Sign in</a>
                       <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an account</a>
                   </div>
               </div>
            )}
        </div>
     </nav>
  )
}

export default Navbar