import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer >
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
          <Link 
            to="/" 
            className='whitespace-nowrap self-center font-logo_font  text-[#27374D] text-sm  sm:text-xl  font-semibold '>
            <span className=' px-2  py-1  bg-[#27374D]  text-[#DDE6ED] rounded-lg'>AKGEC</span>
            -FC
          </Link>
          </div>
          <div className="grid grid-cols-2  gap-8 sm:gap-6 sm:grid-cols-3 ">
            <div>
              <h2 className="mb-6 text-sm font-semibold font-body_font text-[#27374D] uppercase">
                Resources
              </h2>
              <ul className="text-[#526D82] font-body_font ">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold font-body_font text-[#27374D] uppercase">
                Follow us
              </h2>
              <ul className="text-[#526D82] font-body_font ">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/iampriyanshu29"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/iampriyanshu29/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold font-body_font text-[#27374D] uppercase">
                Legal
              </h2>
              <ul className="text-[#526D82] font-body_font ">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © {year} -
            <a href="https://www.linkedin.com/in/iampriyanshu29/" className="hover:underline">
              <span className="text-gray-900 font-medium hover:text-[#27374D]"> Priyanshu Tiwari </span>
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link to="https://www.facebook.com/iampriyanshu29" className="text-gray-500 hover:text-[#27374D]">
              <FaFacebook
              style={{
                fontSize: '1.5rem', 
              }}
              />
            </Link>
            <Link to="https://www.instagram.com/iampriyanshu29" className="text-gray-500 hover:text-[#27374D]">
                <FaInstagram style={{
                  fontSize: '1.5rem', 
                }}/>
            </Link>
            <Link to="https://www.linkedin.com/in/iampriyanshu29/" className="text-gray-500 hover:text-[#27374D]">
                <AiFillLinkedin
                style={{
                  fontSize: '1.5rem', 
                }}
                />
            </Link>
            <Link to="#" className="text-gray-500 hover:text-[#27374D]">
             <FaGithub
             style={{
              fontSize: '1.5rem', 
            }}
             />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;