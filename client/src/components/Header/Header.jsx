import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Navbar, TextInput, Dropdown, Avatar } from 'flowbite-react';
import { FaSearch, FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../redux/function/themeSlice';
import { IoSunnySharp } from "react-icons/io5";
import { signOutSucess } from '../../redux/function/userSlice';


function Header() {
  const { currentUser } = useSelector(state => state.user);
  const { currentTheme } = useSelector(state => state.theme);
  const path = useLocation().pathname;
  const dispatch = useDispatch();

  const handleLogout = async() => {
    try {
      const res = await fetch(`/api/auth/logout`,{
        method:"POST", 
      })
      const data = await res.json();
      if(!res.ok){
        console.log(data.message);
      }
      else{
        dispatch(signOutSucess());
        window.location.href = '/';
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  const handleTheme = () => {
    console.log("Theme Changed!");
    dispatch(changeTheme());
  };

  return (
    <Navbar className= 'dark:bg-neutral-950 dark:text-[#BFCDD9] '>
      <Link to="/" className={`whitespace-nowrap self-center font-logo_font text-${currentTheme === 'dark' ? '#BFCDD9' : '[#27374D]'} text-sm sm:text-xl font-semibold`}>
        <span className='px-2 py-1  dark:bg-[#364559] bg-[#27374D] text-[#DDE6ED] rounded-lg'>AKGEC</span>
        -FC
      </Link>

      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hover:bg-gray-100 hover:text-gray-700 hidden border-0 sm:inline"
          color='#F5F5F'
          onClick={handleTheme}
        >
         {currentTheme === 'dark' ? <FaMoon /> : <IoSunnySharp />}
        </Button>

        <Button className="w-12 h-10 rounded-lg lg:hidden" color="gray">
          <FaSearch />
        </Button>

        <form className="border-[#DDE6ED]">
          <TextInput
            type="text"
            placeholder="Search ....."
            rightIcon={FaSearch}
            className="hidden lg:inline"
          />
        </form>

        {currentUser ? (
          <Dropdown
            className="relative inline-block rounded-lg text-left"
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User"
                img={currentUser.message.user.coverImage}
                rounded
              />
            }
          >
            <Dropdown.Header className=' dark:bg-[#0F1926] bg-[#27374D] text-[#DDE6ED] font-heading_font p-4  -mt-1 border dark:border-[#0F1926] rounded-lg '>
              <div className="flex p-2 items-center">
                <Avatar
                  alt="User"
                  img={currentUser.message.user.coverImage}
                  rounded
                  className="mr-2"
                />
                <div>
                  <span className="block text-lg font-bold">
                    {currentUser.message.user.username}
                  </span>
                  <span className="block text-sm">
                    {currentUser.message.user.email}
                  </span>
                </div>
              </div>
            </Dropdown.Header>

            <Link to="/dashboard?tab=profile">
              <Dropdown.Item className='hover:bg-gray-100 hover:text-gray-700 p-4'>
                Profile
              </Dropdown.Item>
            </Link>

            <Dropdown.Divider />

            {currentUser.message.user.isAdmin  &&
            (<Link to="/createpost">
              <Dropdown.Item className='hover:bg-gray-100 hover:text-gray-700 p-4'>
                Post
              </Dropdown.Item>
            </Link>)
              }

            <Dropdown.Divider />

            <Dropdown.Item onClick={handleLogout} className={`hover:bg-gray-700 hover:text-${currentTheme === 'dark' ? 'red-500' : 'red-500'} p-4`}>
              Logout
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signin">
            <Button className={`border-[#DDE6ED] ${currentTheme === 'dark' ? 'bg-#04080D text-[#BFCDD9] hover:text-[#27374D]' : 'bg-[#27374D] text-[#DDE6ED] hover:text-[#27374D]'} transition duration-100`} color="gray">
              Sign In
            </Button>
          </Link>
        )}

        <Navbar.Toggle className="lg:hidden" />
      </div>

      <Navbar.Collapse >
        <Navbar.Link  as="div" className='sm:text-center hover:bg-[#27374D] hover:text-[#DDE6ED] dark:hover:bg-gray-100 dark:hover:text-gray-700 p-4'>
          <Link to="/" className='ml-auto mr-auto block text-center ' >
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link  as="div" className=' hover:bg-[#27374D] hover:text-[#DDE6ED] dark:hover:bg-gray-100 dark:hover:text-gray-700 p-4'>
          <Link to="/about" className='ml-auto mr-auto block text-center '>
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link  as="div" className=' hover:bg-[#27374D] hover:text-[#DDE6ED] dark:hover:bg-gray-100 dark:hover:text-gray-700 p-4'>
          <Link to="/family"className='ml-auto mr-auto block text-center '>
            Family
          </Link>
        </Navbar.Link>
        <Navbar.Link  as="div" className=' hover:bg-[#27374D] hover:text-[#DDE6ED] dark:hover:bg-gray-100 dark:hover:text-gray-700 p-4'>
          <Link to="/achievements" className='ml-auto mr-auto block text-center '>
            Achievements
          </Link>
        </Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
