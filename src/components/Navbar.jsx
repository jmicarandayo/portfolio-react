import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from 'react-scroll'

const Navbar = () => {
    const [ open, setOpen ] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }
  return (
    <div className=' fixed w-full bg-[#011627] h-[80px] flex justify-between items-center px-4 text-gray-300'>
        <img src={logo} alt="Logo" />

        {/* Menu */}
        <ul className='hidden md:flex gap-8'>
            <li>
            <Link to="home" smooth={true} duration={500}>
            Home
            </Link>
            </li>
            <li>
            <Link to="about" smooth={true} duration={500}>
            About
            </Link>
            </li>
            <li>
            <Link to="skills" smooth={true} duration={500}>
            Skills
            </Link>
            </li>
            <li>
            <Link to="work" smooth={true} duration={500}>
            Work
            </Link>
            </li>
            <li>
            <Link to="contact" smooth={true} duration={500}>
            Contact
            </Link>
            </li>
        </ul>

        {/* Hamburger */}
        <div className='md:hidden hover:cursor-pointer z-10' onClick={handleClick}>
            {!open ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!open ? 'hidden' : 'bg-[#011627] absolute top-0 left-0 h-screen w-full flex items-center justify-center flex-col'}>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
            </Link>
        </li>
        </ul>

        <div className='hidden lg:flex fixed top-[35%] left-0'>
            <ul>
                <li className='flex justify-between items-center w-[160px] h-[60px] bg-blue-600 px-4 ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a href="https://www.linkedin.com/in/justine-micarandayo-2aa8a510b/" className='flex items-center justify-between w-full text-gray-200'>LinkedIn <FaLinkedin size={30}/></a>
                </li>
                <li className='flex justify-between items-center w-[160px] h-[60px] bg-[#333333] px-4 ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a href="https://github.com/jmicarandayo" className='flex items-center justify-between w-full text-gray-200'>Github <FaGithub size={30}/></a>
                </li>
                <li className='flex justify-between items-center w-[160px] h-[60px] bg-[#6fc2b0] px-4 ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a href="mailto:kingjustinemicarandayo@gmail.com" className='flex items-center justify-between w-full text-gray-200'>Email <HiOutlineMail size={30}/></a>
                </li>
                <li className='flex justify-between items-center w-[160px] h-[60px] bg-[#565f69] px-4 ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a href="/resume.pdf" className='flex items-center justify-between w-full text-gray-200'>Resume <BsFillPersonLinesFill size={30}/></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar