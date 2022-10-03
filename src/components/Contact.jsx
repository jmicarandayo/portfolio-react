import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#011627] w-full h-screen flex justify-center items-center px-4'>
        <form action="https://getform.io/f/5176d9b7-85c6-41f8-91ea-7e3e4ac5edff" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='text-gray-300 pb-8'>
                <h1 className='text-4xl font-bold border-b-4 border-[#FF6E7C] inline-block'>Contact</h1>
                <p className='py-4'>// Submit the form below or shoot me an email - kingjustinemicarandayo@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' name='name' type="text" placeholder='Name'/>
            <input className='bg-[#ccd6f6] p-2 my-4' name='email' type="text" placeholder='Email'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className=' border-white border-2 hover:border-[#FF6E7C] hover:bg-[#FF6E7C] py-3 px-4 text-white mt-8 mx-auto'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact