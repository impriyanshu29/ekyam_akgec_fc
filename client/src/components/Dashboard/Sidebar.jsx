import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBox } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { set } from "mongoose";
import { signOutSucess } from "../../redux/function/userSlice";
import { useDispatch } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const [tab, setTab] = useState("");
  const [pathName, setPathName] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    const pathName = location.pathname;
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
    setPathName(pathName);
  }, [location.search]);

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
  return (
    <aside
      className={`flex md:h-screen shadow-md h-auto bg-gray-100 font-body_font  rounded-xl dark:bg-[#131314] dark:text-[#65768C]  w-full md:w-64 flex-col overflow-y-auto  px-5 py-8 ${
        currentTheme === "dark" ? "scrollbar-dark" : ""
      }`}
    >
       <style>
        {`
          .scrollbar-dark::-webkit-scrollbar {
            width: 10px;
          }

          .scrollbar-dark::-webkit-scrollbar-thumb {
            background-color: #4a5568;
            border-radius: 5px;
          }

          .scrollbar-dark::-webkit-scrollbar-track {
            background-color: #1a202c;
            border-radius: 5px;
          }
        `}
      </style>
    

      <div className="mt-6 text-center md:text-left flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6">
          <div className="space-y-3">
            <label className="px-3 text-center  text-xs font-semibold uppercase dark:text-[#BFCDD9] text-gray-900">
              Dashboard
            </label>
            <NavLink
              to="/dashboard?tab=profile"
              className={`flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 hover:underline ${
                tab === "profile" ? "bg-gray-200 text-gray-800" : ""
              }`}
            >
              <FaUser className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Profile</span>
            </NavLink>
            <NavLink
              to="/signin"
              className={`flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 hover:underline ${
                pathName === "/signin" ? "bg-gray-200 text-gray-800" : ""
              }`}
            >
              <FaSignOutAlt className="h-5 w-5" aria-hidden="true" />
              <span onClick={handleLogout} className="mx-2 text-sm font-medium">Sign Out</span>
            </NavLink>
          </div>
         
          <div className="hidden md:block space-y-3">
            <label className="px-3 text-xs font-semibold uppercase dark:text-[#BFCDD9]  text-gray-900">
              Content
            </label>
            <NavLink
              to="/"
              className={`flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 hover:underline ${
                pathName === "/" ? "bg-gray-200 text-gray-800" : ""
              }`}
            >
              <FaHome className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Home</span>
            </NavLink>
            <NavLink
              to="/about"
              className={`flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 hover:underline ${
                pathName === "/about" ? "bg-gray-200 text-gray-800" : ""
              }`}
            >
              <FaBox className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">About</span>
            </NavLink>
            <NavLink
              to="/dashboard?tab=profile"
              className={`flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 hover:underline ${
                pathName === "/blog" ? "bg-gray-200 text-gray-800" : ""
              }`}
            >
              <FaBookReader className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Blogs</span>
            </NavLink>
          </div>
        </nav>
        <div className="hidden md:block mt-6">
          <div className="mt-6 ">
            <NavLink
              to="/dashboard?tab=profile"
              className="flex items-center gap-x-2 "
            >
              <img
                className="h-7 w-7 rounded-full object-cover"
                src={currentUser.message.user.coverImage}
                alt="avatar"
              />
              <span className="text-sm dark:text-[#65768C] dark:hover:text-[#BFCDD9] font-medium text-gray-700">
                {currentUser.message.user.username}
              </span>
              <div className="text-sm font-medium dark:text-gray-700 dark:bg-gray-200 bg-[#27374D] text-[#DDE6ED] rounded-lg px-2 py-2 ">
                <span className="dark:text-[#65768C] dark:hover:text-[#BFCDD9]">
                  Admin
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
