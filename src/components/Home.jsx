import React from "react";
import logo2 from "../assets/logo2.svg";
import { FiSearch } from "react-icons/fi";

function Home() {
  return (
    <div className="py-8 bg-[#FAFAFA]">
      <div className="w-10/12 bg-[##FAFAFA] m-auto md:py-16 py-8 border-[1px] border-[#5941BB] ">
        <div className="w-[85%] m-auto">
          <p className="text-[#5941BB] font-semibold text-xl md:text-3xl pb-6">
            Finding a dream car is not that easy, but we made it easy for you in
            just one click you may able to get market details.
          </p>
          <img
            src={logo2}
            alt="Carsera"
            className="w-30 h-8 object-cover m-auto"
          />
          <form className="py-8">
            <div className="flex border border-[##5941BB] outline-[#5941BB]">
              <input
                type="search"
                className="w-full p-4 text-sm bg-[#FAFAFA] outline-[#5941BB] "
                placeholder="Find your dream car here..."
              />
              <button className="bg-[#806CCE]  px-4 py-2 text-white hover:bg-[#5941BB] transition duration-300">
                <FiSearch size={25} className="" />
              </button>
            </div>
          </form>
          <div className="border p-4  bg-[#FAFAFA]">
            <h1 className="pb-2 font-bold">Recent Searches:</h1>
            <ul className="md:flex md:gap-4">
              {/**Make them clickable */}
              <li>Tesla</li>
              <li>Juke</li>
              <li>Fortuner</li>
              <li>Thundra</li>
              <li>Elentra</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
