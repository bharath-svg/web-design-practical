import React, { useState } from "react";
import Hamburger from "hamburger-react";
import logo from "../images/Vector.png";
import logo1 from "../images/Layer 1 (2) 1.png";

const Navbar = () => {
  let Links = [
    { name: "Find Workers", link: "/" },
    { name: "Find Jobs", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Resource", link: "/" },
    { name: "Contacts", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
        text-gray-800"
        >
          <span className="font-[Poppins] text-indigo-600 mr-1 pt-2 w-8 h-8">
            <img src={logo} alt="logo" />
          </span>
          <div className="font-[Poppins] text-indigo-600 ml-2 pt-6 w-14 h-14">
            <img src={logo1} alt="logo1" />
          </div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <Hamburger toggled={open} toggle={setOpen} />
        </div>

        <ul
          className={`md:flex md:items-center  justify-items-start md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-l md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <div>
            <button
              className="text-gray-800 hover:text-gray-400 duration-500 font-[Poppins] py-2 px-1  border-indigo-600 rounded md:ml-8"
            >
              Login
            </button>
            <button
              className="text-black mx-2 px-6 font-[Poppins] py-2 border-solid border-2 border-indigo-600 rounded md:ml-8 hover:bg-indigo-400 
    duration-500"
            >
              Open an account
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
