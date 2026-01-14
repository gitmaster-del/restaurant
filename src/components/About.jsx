import React from 'react'
import assets from '../assets/assets'
import { FaUtensils, FaWineGlassAlt } from 'react-icons/fa'

const About = () => {
  return (
    <div id='about' className='py-20 bg-white '>
        <div className='container mx-auto px-6'>
            <div className="text-center mb-12">
                <h1 className='text-3xl sm:text-4xl mb-4 font-bold'>Our Story</h1>
                <div className='w-20 h-1 bg-primary mx-auto'></div>
                </div>



                <div className='flex flex-col md:flex-row items-center gap-12'>
                    {/* image */}
                    <div className='md:w-1/2'>
                     <img className='w-full object-cover rounded-xl' src={assets.aboutImg} alt="" />
                    </div>

                    {/* content */}
                    <div className='md:w-1/2'>
                     <h1 className='text-3xl font-semibold text-dark mb-8'>The Culinary Journey</h1>
                     <p className='text-grey-700 mb-4'>Founded in 2022, Food Corner began as a small idea inspired by a deep love for food and hospitality. What started as a passion project soon grew into a place where flavors, freshness, and creativity come together. The goal from the beginning was simple—to serve quality food made with care, using fresh ingredients and authentic recipes.</p>
                     <p className='text-grey-700 mb-6'>Over time, Food Corner has evolved into a trusted name for people who appreciate good taste and consistent quality. Every dish reflects dedication, attention to detail, and a commitment to customer satisfaction, making Food Corner more than just a place to eat.</p>

                    {/* button */}
                     <div className='flex items-center space-x-4'>
                        <div className='flex items-center gap-2'>
                            <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center'>
                                <FaUtensils  className='text-white'/>
                            </div>
                            <span className='text-dark font-semibold'>Fine Dining</span>
                        </div>

                            <div className='flex items-center gap-2'>
                            <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center'>
                                <FaWineGlassAlt  className='text-white'/>
                            </div>
                            <span className='text-dark font-semibold'>Wine Pairing</span>
                        </div>
                     </div>
                    </div>

            </div>

        </div>
    </div>
  )
}

export default About