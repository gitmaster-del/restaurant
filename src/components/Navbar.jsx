import React, { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='shadow-md sticky top-0 z-50 backdrop-blur-3xl'>

        <div className='container mx-auto px-6 sm:px-8 md:px-12 lg:px-24'>
         <div className='flex justify-between items-center py-8'>    
          {/* logo */}
          <div className='flex items-center text-2xl font-bold'>
            <img src="./logo2.png" alt="logo" className='w-12 h-12'/>
            <h1 className='text-primary'>
                Food
                <span className='text-accent'> Corner</span>
            </h1>
          </div>

          {/* nav links */}
          <nav className='hidden md:flex items-center space-x-6 text-dark'>
           <a className='font-semibold hover:text-primary' href="#home">Home</a>
           <a className='font-semibold hover:text-primary' href="#about">About</a>
           <a className='font-semibold hover:text-primary' href="#menu">Menu</a>
           <a className='font-semibold hover:text-primary' href="#reservation">Reservation</a>
           <a className='font-semibold hover:text-primary' href="#contact">Contact</a>
          </nav>

          {/* mobile menu button */}
          <div className='md:hidden'>
              {
                showMenu?
                <FaXmark onClick={()=>setShowMenu(!showMenu)} className='text-xl cursor-pointer'/>:
                <FaBars onClick={()=>setShowMenu(!showMenu)} className='text-xl cursor-pointer' />  
              }
          </div>
          
        </div>      
        </div>

       
            {
                showMenu && (
           <div className='md:hidden flex flex-col items-center space-y-6 py-20 h-screen'>
           <a onClick={()=>setShowMenu(!showMenu)} className='font-semibold' href="#home">Home</a>
           <a onClick={()=>setShowMenu(!showMenu)} className='font-semibold' href="#about">About</a>
           <a onClick={()=>setShowMenu(!showMenu)} className='font-semibold hover:text-primary' href="#menu">Menu</a>
           <a onClick={()=>setShowMenu(!showMenu)} className='font-semibold hover:text-primary' href="#reservation">Reservation</a>
           <a onClick={()=>setShowMenu(!showMenu)} className='font-semibold hover:text-primary' href="#contact">Contact</a>
           </div>
                )
            }
        

    </div>
  )
}

export default Navbar