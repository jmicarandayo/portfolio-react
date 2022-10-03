import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'
import ReactJs from '../assets/react.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#011627] h-screen w-full'>
        <div className='max-w-[1024px] mx-auto px-4 flex flex-col justify-center h-full text-gray-300'>
            <div className=''>
                <h1 className='inline-block text-4xl font-bold border-b-4 border-[#FF6E7C]'>Expereince</h1>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center '>
                <div className='py-8 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Html} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='py-8 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Css} alt="HTML icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='py-8 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt="HTML icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='py-8 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactJs} alt="HTML icon" />
                    <p className='my-4'>ReactJS</p>
                </div>
                <div className='py-8 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                    <p className='my-4'>NodeJS</p>
                </div>
                <div className='py-8 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                    <p className='my-4'>MongoDB</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills