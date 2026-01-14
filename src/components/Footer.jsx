import React from 'react'
import { FaFacebook, FaInstagram, FaLocationArrow, FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='py-20 bg-secondary'>
    <div className='container mx-auto px-6 '>

     <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>

      {/* first column */}
      <div>
        <h1 className='text-xl font-semibold mb-4'>Food
          <span className='text-primary'> Corner</span>
        </h1>
        <p>Experience the first culinary journey in the heart of city</p>
        
      </div>

      {/* 2nd column */}
      <div>
        <h1 className='text-xl text-dark font-semibold mb-4'>Quick Links</h1>
        <ul className='space-y-2'>
          <li>
            <a href="#home">Home</a>
          </li>
           <li>
            <a href="#about">About</a>
          </li>
           <li>
            <a href="#menu">Menu</a>
          </li>
           <li>
            <a href="#reservation">Reservation</a>
          </li>
         
        </ul>
      </div>


      {/* 3rd column */}
      <div>
        <h1 className='text-xl text-dark font-semibold mb-4'>Contact Info</h1>
        <ul className='space-y-4'>
          <li>
            Chandigarh,1ndia
          </li>
          <li>(+91) 98765-43210</li>
          <li>info@gmail.com</li>
        </ul>
      </div>


      {/* 4th column */}
      <div>
      <h1 className='text-xl text-dark font-semibold mb-4'>Follow Us</h1>
      <div className='flex items-center gap-4 mb-6'>
          <div className='w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full'>
            <FaInstagram className='text-2xl'/>
          </div>
          <div className='w-10 h-10  bg-primary text-white flex items-center justify-center rounded-full'>
            <FaFacebook className='text-2xl'/>
          </div>
           <div className='w-10 h-10  bg-primary text-white flex items-center justify-center rounded-full'>
            <FaLinkedin className='text-2xl'/>
          </div>
      </div>
      
      
      </div>

     </div>



     <div className='border-t py-6 mt-6 border-gray-300 '>
          <p className='text-dark/50 text-center'>©  2025 Food Corner. All Rights Reserved.</p>
         </div>


    </div>
    </div>
  )
}

export default Footer