import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Navbar, TextInput, Dropdown, Avatar } from "flowbite-react";
import { FaSearch, FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../redux/function/themeSlice";
import { IoSunnySharp } from "react-icons/io5";
import { signOutSucess } from "../../redux/function/userSlice";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const { currentTheme } = useSelector((state) => state.theme);
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = React.useState(false);

  const menuItems = [
    {
      name: "HOME",
      href: "/",
    },
    {
      name: "ABOUT",
      href: "/about",
    },
    {
      name: "FAMILY",
      href: "/family",
    },
    {
      name: "ACHIEVMENTS",
      href: "/achievments",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = async () => {
    try {
      const res = await fetch(`/api/auth/logout`, {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signOutSucess());
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleTheme = () => {
    console.log("Theme Changed!");
    dispatch(changeTheme());
  };

  return (
    // <Navbar className= 'dark:bg-neutral-950 dark:text-[#BFCDD9] '>
    //   <Link to="/" className={`whitespace-nowrap self-center font-logo_font text-${currentTheme === 'dark' ? '#BFCDD9' : '[#27374D]'} text-sm sm:text-xl font-semibold`}>
    //     <span className='px-2 py-1  dark:bg-[#364559] bg-[#27374D] text-[#DDE6ED] rounded-lg'>AKGEC</span>
    //     -FC
    //   </Link>

    //   <div className="flex gap-2 md:order-2">
    //     <Button
    //       className="w-12 h-10 hover:bg-gray-100 hover:text-gray-700 hidden border-0 sm:inline"
    //       color='#F5F5F'
    //       onClick={handleTheme}
    //     >
    //      {currentTheme === 'dark' ? <FaMoon /> : <IoSunnySharp />}
    //     </Button>

    //     <Button className="w-12 h-10 rounded-lg lg:hidden" color="gray">
    //       <FaSearch />
    //     </Button>

    //     <form className="border-[#DDE6ED]">
    //       <TextInput
    //         type="text"
    //         placeholder="Search ....."
    //         rightIcon={FaSearch}
    //         className="hidden lg:inline"
    //       />
    //     </form>

    //     {currentUser ? (
    //       <Dropdown
    //         className="relative inline-block rounded-lg text-left"
    //         arrowIcon={false}
    //         inline
    //         label={
    //           <Avatar
    //             alt="User"
    //             img={currentUser.message.user.coverImage}
    //             rounded
    //           />
    //         }
    //       >
    //         <Dropdown.Header className=' dark:bg-[#0F1926] bg-[#27374D] text-[#DDE6ED] font-heading_font p-4  -mt-1 border dark:border-[#0F1926] rounded-lg '>
    //           <div className="flex p-2 items-center">
    //             <Avatar
    //               alt="User"
    //               img={currentUser.message.user.coverImage}
    //               rounded
    //               className="mr-2"
    //             />
    //             <div>
    //               <span className="block text-lg font-bold">
    //                 {currentUser.message.user.username}
    //               </span>
    //               <span className="block text-sm">
    //                 {currentUser.message.user.email}
    //               </span>
    //             </div>
    //           </div>
    //         </Dropdown.Header>

    //         <Link to="/dashboard?tab=profile">
    //           <Dropdown.Item className='hover:bg-gray-100 hover:text-gray-700 p-4'>
    //             Profile
    //           </Dropdown.Item>
    //         </Link>

    //         <Dropdown.Divider />

    //         {currentUser.message.user.isAdmin  &&
    //         (<Link to="/dashboard?tab=createpost">
    //           <Dropdown.Item className='hover:bg-gray-100 hover:text-gray-700 p-4'>
    //             Post
    //           </Dropdown.Item>
    //         </Link>)
    //           }

    //         <Dropdown.Divider />

    //         <Dropdown.Item onClick={handleLogout} className={`hover:bg-gray-700 hover:text-${currentTheme === 'dark' ? 'red-500' : 'red-500'} p-4`}>
    //           Logout
    //         </Dropdown.Item>
    //       </Dropdown>
    //     ) : (
    //       <Link to="/signin">
    //         <Button className={`border-[#DDE6ED] ${currentTheme === 'dark' ? 'bg-#04080D text-[#BFCDD9] hover:text-[#27374D]' : 'bg-[#27374D] text-[#DDE6ED] hover:text-[#27374D]'} transition duration-100`} color="gray">
    //           Sign In
    //         </Button>
    //       </Link>
    //     )}

    //     <Navbar.Toggle className="lg:hidden" />
    //   </div>

    //   <Navbar.Collapse >
    //     <Navbar.Link  as="div" className='sm:text-center hover:bg-[#27374D] hover:text-[#DDE6ED] dark:hover:bg-gray-100 dark:hover:text-gray-700 p-4'>
    //       <Link to="/" className='ml-auto mr-auto block text-center ' >
    //         Home
    //       </Link>
    //     </Navbar.Link>
    //     <Navbar.Link  as="div" className=' hover:bg-[#27374D] hover:text-[#DDE6ED] dark:hover:bg-gray-100 dark:hover:text-gray-700 p-4'>
    //       <Link to="/about" className='ml-auto mr-auto block text-center '>
    //         About
    //       </Link>
    //     </Navbar.Link>
    //     <Navbar.Link  as="div" className=' hover:bg-[#27374D] hover:text-[#DDE6ED] dark:hover:bg-gray-100 dark:hover:text-gray-700 p-4'>
    //       <Link to="/family"className='ml-auto mr-auto block text-center '>
    //         Family
    //       </Link>
    //     </Navbar.Link>
    //     <Navbar.Link  as="div" className=' hover:bg-[#27374D] hover:text-[#DDE6ED] dark:hover:bg-gray-100 dark:hover:text-gray-700 p-4'>
    //       <Link to="/achievements" className='ml-auto mr-auto block text-center '>
    //         Achievements
    //       </Link>
    //     </Navbar.Link>

    //   </Navbar.Collapse>
    // </Navbar>
    <div className="relative w-full bg-gray-50 dark:bg-neutral-950 ">
      <div className="mx-auto flex max-w-7xl items-center justify-between  px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 ">
          <Link
            to="/"
            className={`whitespace-nowrap self-center font-logo_font text-[#BFCDD9] text-sm sm:text-xl font-semibold`}
          >
            <span className="px-2 py-1  dark:bg-[#364559] bg-[#27374D] text-[#DDE6ED] rounded-lg">
              AKGEC
            </span>
            -FC
          </Link>
        </div>
        <div className="hidden grow items-end lg:flex justify-center">
          <ul className="ml-12 inline-flex space-x-8 ">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="inline-flex items-end  text-md  text-left dark:text-[#BFCDD9] text-gray-900 font-heading_font hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex grow justify-center">
          <input
            className=" flex h-10 w-28 md:w-2/4 lg:w-3/4  rounded-md dark:bg-gray-200 bg-gray-700 px-3  py-2 text-sm dark:placeholder:text-gray-700 placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Serach..."
          ></input>
        </div>
        <div className=" flex gap-3 space-x-2 ">
          <div className="">
          
            <Button
              className="w-12 h-12 m-2  dark:hover:bg-gray-800 hover:bg-gray-200 hidden dark:text-gray-200 hover:text-gray-700  sm:inline"
              color="#F5F5F"
              onClick={handleTheme}
            >
              {currentTheme === "dark" ? <FaMoon /> : <IoSunnySharp />}
            </Button>
          </div>
          <div>
            {currentUser ? (
              <div className="relative inline-block">
                <img
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="h-12 m-2 w-12 rounded-full border border-gray-200 dark:border-gray-900 cursor-pointer"
                  src={currentUser.message.user.coverImage}
                  alt="User_Profile"
                />
                {showDropdown && (
                  <div className="absolute top-14 right-0 z-10 bg-gray-200  mt-2 dark:bg-gray-700 dark:text-gray-200 rounded-md shadow-md space-y-2">
                    <div className="flex gap-6 rounded-md w-auto bg-gray-700  dark:bg-gray-800 p-6 text-gray-200 items-center">
                      <div className=" h-12 w-12 rounded-full mr-2">
                        <img
                          alt="User"
                          src={currentUser.message.user.coverImage}
                          className="h-12 w-12 rounded-full mr-2"
                        />
                      </div>
                      <div>
                        <span className="block text-lg font-bold overflow-hidden overflow-ellipsis whitespace-nowrap max-w-[200px]">
                          {currentUser.message.user.username}
                        </span>
                        <span className="block text-sm">
                          {currentUser.message.user.email}
                        </span>
                      </div>
                    </div>
                    <Link to="/dashboard?tab=profile">
                      <div
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="hover:bg-gray-300 hover:text-gray-800 p-4 cursor-pointer"
                      >
                        Profile
                      </div>
                    </Link>

                    {currentUser.message.user.isAdmin && (
                      <Link to="/dashboard?tab=updatepost">
                        <div
                          onClick={() => setShowDropdown(!showDropdown)}
                          className="hover:bg-gray-300 border-t dark:border-gray-600 border-gray-300 hover:text-gray-800 p-4 cursor-pointer"
                        >
                          Post
                        </div>
                      </Link>
                    )}

                    <div
                      onClick={handleLogout}
                      className="hover:bg-gray-300 hover:text-red-500 p-4 dark:border-gray-600  border-t border-gray-300 cursor-pointer"
                    >
                      Logout
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                type="button"
                className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Sign In
              </button>
            )}
          </div>
        </div>

        <div className="lg:hidden dark:text-[#DDE6ED]">
          <IoMdMenu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-gray-200 dark:bg-neutral-900 shadow-xl ring-1  ring-black  ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <Link
                      to="/"
                      className={`whitespace-nowrap self-center font-logo_font text-[#BFCDD9] text-sm sm:text-xl font-semibold`}
                    >
                      <span className="px-2 py-1  dark:bg-[#364559] bg-[#27374D] text-[#DDE6ED] rounded-lg">
                        AKGEC
                      </span>
                      -FC
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <RxCross2 className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-heading_font   dark:text-[#65768C] text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}

                   <button
                                           className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                    onClick={handleTheme}
                   >
                                            <span className="ml-3 text-base font-heading_font   dark:text-[#65768C] text-gray-900">
                                            {currentTheme === "dark" ? "DARK-THEME" : "LIGHT-THEME"}
                                            </span>
              
                   </button>
                  </nav>
                </div>

               <div className="mt-4">
               {currentUser ? (
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Sign Out
                  </button>
                ) : (
                  <div className=" space-y-2">
                  
                    <Link 
                      to="/signin"
                    >
                        <button
                        onClick={() => setIsMenuOpen(false)}
                      type="button"
                      className="w-full rounded-md border dark:bg-gray-200  border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Sign In
                    </button>
                    </Link>
                    <Link 
                      to="/signup">

                    
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      type="button"
                      className="w-full rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-200 shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Sign Up
                    </button>
                    </Link>
                  </div>
                )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

("use client");
