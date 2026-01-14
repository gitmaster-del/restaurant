import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div id='home' className='relative h-screen bg-cover bg-center w-full' style={{backgroundImage:`url(${assets.heroImg})`}}>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='container mx-auto px-6 h-full flex items-center z-10 relative'>
            <div className='text-white max-w-2xl'>
                <h2 className='text-5xl mb-4 font-bold'>
                    Experience Fine Dining
                </h2>
                <p className='text-xl mb-8'>Indulge in our equisite culinary creations crafted with passion and the finest ingredients.</p>
                <a className='bg-primary hover:bg-red-800 text-white font-bold px-8 py-3 rounded-full cursor-pointer transition duration-300 transform hover:scale-105' href="#reservation">Book a Table</a>

            </div>

        </div>
    </div>
  )
}

export default Hero