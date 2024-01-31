import React from 'react'
import { Link,useLocation} from 'react-router-dom'
import {Button, Navbar, TextInput} from 'flowbite-react'
import { FaSearch } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";



function Header() {
    const path = useLocation().pathname
  return (
    <Navbar className='border-b-4'>
        <Link 
            to="/" 
            className='whitespace-nowrap self-center text-[#A4A6A1] text-sm sm:text-xl  font-semibold '>
            <span className='px-2 py-1 bg-gradient-to-r from-[#202426] via-[#383D40] to-[#6F7372] rounded-lg'>AKGEC</span>
            -FC
        </Link>


        <form>
            <TextInput
                type="text"
                placeholder="Search ..... "
                rightIcon={FaSearch}
                className='hidden  lg:inline'
            />            
        </form>

        <Button className= "w-12 h-10 lg:hidden" color='gray' pill>
            <FaSearch/>
        </Button>

        <div className='flex gap-2 md:order-2'>
        <Button className= "w-12 h-10 hidden sm:inline" color='gray' pill>
            <FaMoon/>
        </Button>

        <Link to='/signin'>
            <Button color='gray' >
                Sign In
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