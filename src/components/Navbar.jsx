import React from "react";
import { IoMenu } from "react-icons/io5";
import { FaShopware } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="w-full z-30 top-0 py-1">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <IoMenu className="w-5 h-5" />
        </label>
        <input type="checkbox" className="hidden" id="menu-toggle" />
        <div
          id="menu"
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
        >
          <div>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li>
                <a
                  href="#"
                  className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="order-1 md:order-2">
            <a href="#" className="flex items-center tracking-wide no-underline font-bold hover:no-underline text-gray-800 text-xl">
                <FaShopware className="h-6 w-6"/>
                EMMILEX
            </a>
        </div>

        <div className="order-2 md:order-3 flex items-center" id="nav-content">
            <a href="#" className="inline-block no-underline hover:text-black">
            <FiUser className="w-6 h-6"/>
            </a>
            <a href="#" className="pl-3 inline-block no-underline hover:text-black">
            <IoCartOutline className="w-6 h-6"/>
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
