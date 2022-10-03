import React from 'react'

const About = () => {
  return (
    <div name='about' className='bg-[#011627] h-screen w-full'>
        {/* Container */}
        <div className=' max-w-[1024px] mx-auto px-4 flex flex-col justify-center h-full text-gray-300' >
            <div className='grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8'>
                    <h1 className=' inline-block text-4xl font-bold border-b-4 border-[#FF6E7C]'>About</h1>
                </div>
                <div></div>
            </div>
            <div className='grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right'>
                    <p className='text-4xl font-bold'>Hi. I'm Justine, nice to meet you. Please take a look around</p>
                </div>
                <div>
                    <p> I have almost 1 year experience in building web applications and I am passionate about building excellent software that improves the lives of those around me. I love to work on web apllications using technologies like React, Tailwind, NodeJs and MongoDB. I have also worked on projects involving both front-end and back-end development.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About