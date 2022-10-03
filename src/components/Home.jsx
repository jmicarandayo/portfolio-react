import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='bg-[#011627] h-screen w-full'>
        <div className=' max-w-[1024px] mx-auto px-4 flex flex-col justify-center h-full'>
            <p className=' text-[#FF6E7C]'>Hi, my name is</p>
            <h1 className=' text-[#ccd6f6] font-bold text-4xl sm:text-7xl'>Justine Micarandayo</h1>
            <h2 className='text-[#8892b0] font-bold text-4xl sm:text-7xl'>I'm a Front End Developer.</h2>
            <p className='my-4 text-[#8892b0] max-w-[700px]'>I'm a front-end developer specializing in building (occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive front-end web applications.</p>
            <div>
              <Link to="work" smooth={true} duration={500}>
                <button className='text-white px-6 py-3 border-2 flex items-center my-2 group hover:bg-[#FF6E7C] hover:border-[#FF6E7C]'>View Work
                <span className='ml-4 group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight />
                </span>
                </button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Home