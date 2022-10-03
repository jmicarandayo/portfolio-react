import React from 'react'
import ChatApp from '../assets/chatApp.JPG'
import NetflixClone from '../assets/netflixClone.JPG'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#011627]'>
        <div className='max-w-[1024px] mx-auto px-4 flex flex-col h-full justify-center'>
            <div className='text-gray-300 pb-8'>
                <h1 className='border-b-4 border-[#FF6E7C] inline-block text-4xl font-bold'>Work</h1>
                <p className='py-4'>// Check out some of my recent work</p>
            </div>
            {/* Grid Items */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${ChatApp})`}} className='content-div shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto' >
                    {/* Hover Effect */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Simple Chat Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://chat-75de3.web.app/login" className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mx-2'>Demo</a>
                            <a href="https://github.com/jmicarandayo/react_chat_app.git" className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mx-2'>Code</a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${NetflixClone})`}} className='content-div shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto' >
                    {/* Hover Effect */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Neflix Clone Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://netflix-reactjs-83790.web.app/" className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mx-2'>Demo</a>
                            <a href="https://github.com/jmicarandayo/netflix_clone_reactjs" className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mx-2'>Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work