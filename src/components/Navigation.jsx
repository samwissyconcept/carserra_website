import React from "react";
{
  /*import { Link } from "react-router-dom";*/
}
import { BiSolidDownArrow } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiSolidUpArrow } from "react-icons/bi";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navigation() {
  const [open, setOpen] = useState(false);

  const switches = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="h-16 bg-white text-[#000000] font-bold relative md:py-4 py-2">
      <div className="w-10/12 m-auto">
        {/**Desktop view */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-8 lg:text-xl  justify-between">
            {/**Remember to add link function to listed items */}
            <li>News</li>
            <li className="flex items-center gap-2">
              Find a car
              {open ? (
                <BiSolidDownArrow size={15} onClick={() => setOpen(false)} />
              ) : (
                <BiSolidUpArrow size={15} onClick={() => setOpen(true)} />
              )}
            </li>
            <li>
              <img src={logo} alt="Carsera" className="object-cover h-8 w-30" />
            </li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        {/**Mobile view */}
        <div className="md:hidden absolute top-5 right-7" onClick={() => {}}>
          {open ? (
            <AiOutlineClose size={20} onClick={() => setOpen(false)} />
          ) : (
            <AiOutlineMenu size={20} onClick={() => setOpen(true)} />
          )}
        </div>
        <div className="md:hidden">
          <div className="font-bold text-xs text-[#000000] mb-4">
            <img
              src={logo}
              alt="Carsera"
              className=" w-30 h-8 object-cover m-auto"
            />
          </div>
          {open && (
            <div className="md:hidden bg-[#020107] py-4">
              <ul className="flex flex-col gap-5 font-bold">
                {/**Remember to add link function to listed items */}
                <li className=" text-white p-2 rounded cursor-pointer bg-[#000000] hover:bg-[#000000] transition duration-300">
                  News
                </li>
                <li className="flex items-center text-xl text-white p-2 rounded cursor-pointer bg-[#000000] hover:bg-[#000000] transition duration-300">
                  Find a car
                  <BiSolidDownArrow />
                </li>
                <li className=" text-white p-2 rounded cursor-pointer bg-[#000000] hover:bg-[#000000] transition duration-300">
                  About Us
                </li>
                <li className=" text-white p-2 rounded cursor-pointer bg-[#000000] hover:bg-[#000000] transition duration-300">
                  Contact
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
