import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navData } from "../data/content";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-sm max-w-[1400px] w-full fixed z-10">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="flex items-center font-bold font-fredoka text-2xl text-[#161F6D]">
          <h1>Online Palaba</h1>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {navData.links.map((item, index) => (
            <li key={index} className="md:ml-8 text-sm font-bold md:my-0 my-7">
              <Link
                to={item.href}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
                className="text-gray-500 hover:text-gray-800 hover:border-b-2 hover:border-gray-800 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="md:ml-20 text-sm font-bold md:my-0 my-7">
            <Link
              to={navData.btnRef}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <button className="flex items-center justify-center bg-[#161F6D] hover:bg-[#1F2B97] text-white py-2 px-8 rounded transition duration-300">
                {navData.btnText}
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
