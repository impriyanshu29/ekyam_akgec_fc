import React from 'react'
import { Link,useLocation} from 'react-router-dom'
import {Button, Navbar, TextInput} from 'flowbite-react'
import { FaSearch } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";



function Header() {
    const path = useLocation().pathname
  return (
    <Navbar className='border-b-2 border-[#DDE6ED]'>
        <Link 
            to="/" 
            className='whitespace-nowrap self-center font-logo_font  text-[#27374D] text-sm  sm:text-xl  font-semibold '>
            <span className=' px-2  py-1  bg-[#27374D]  text-[#DDE6ED] rounded-lg'>AKGEC</span>
            -FC
        </Link>

        <div className='flex gap-2 md:order-2'>
        <Button className= "w-12 h-10 hidden border-0 sm:inline" color='gray' >
            <FaMoon/>
        </Button>


        <Button className= "w-12 h-10 rounded-lg  lg:hidden" color='gray' >
            <FaSearch/>
        </Button>

        <form  className='border-[#DDE6ED] ' >
            <TextInput 
            
                type="text"
                placeholder="Search ..... "
                rightIcon={FaSearch}
                className='hidden  lg:inline '
               
            />            
        </form>
        

        <Link to='/signup'>
            <Button className='border-[#DDE6ED] bg-[#27374D] text-[#DDE6ED] hover:text-[#27374D] transition duration-100'color='gray' >
                Sign Up
            </Button>
        </Link>

        

        <Navbar.Toggle className='lg:hidden' />
        </div>
        <Navbar.Collapse>
            <Navbar.Link active={path==="/"} as ={'div'} >
                <Link to='/'>
                    Home
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path==="/about"} as={'div'}>
            <Link to='/about'>
                    About
                </Link>
            </Navbar.Link>
        </Navbar.Collapse>

    </Navbar>
  )
}

export default Header