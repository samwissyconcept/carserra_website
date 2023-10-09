import React from "react";
import Suzuki from "../assets/feature/suziki.png";
import Tesla from "../assets/feature/tesla.png";
import Toyota from "../assets/feature/toyota.png";
import Audi from "../assets/feature/audi.png";
import BMW from "../assets/feature/bmw.png";
import KIA from "../assets/feature/kia.png";
import Benz from "../assets/feature/benz.png";
import Porsche from "../assets/feature/porsche.png";

function Features() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="w-10/12 m-auto">
        <div className="pb-8">
          <h1 className="font-bold text-xl text-[#5941BB] text-left">
            Featured Market:
          </h1>
        </div>
        <div className="border-[1px] border-[#5941BB] bg-[##FAFAFA]  py-16">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-8 justify-center">
            <div className="border w-[80px] h-[80px] border-[#5941BB] bg-white flex items-center justify-center m-auto rounded">
              <img src={Suzuki} alt="suzuki" className="w-10/12" />
            </div>
            <div className="border w-[80px] h-[80px] border-[#5941BB] bg-white flex items-center justify-center m-auto rounded">
              <img src={Tesla} alt="tesla" className="w-10/12" />
            </div>
            <div className="border w-[80px] h-[80px] border-[#5941BB] bg-white flex items-center justify-center m-auto rounded">
              <img src={Toyota} alt="toyota" className="w-10/12" />
            </div>
            <div className="border w-[80px] h-[80px] border-[#5941BB] bg-white flex items-center justify-center m-auto rounded">
              <img src={Audi} alt="audi" className="w-10/12" />
            </div>
            <div className="border w-[80px] h-[80px] border-[#5941BB]  bg-white flex items-center justify-center m-auto rounded">
              <img src={BMW} alt="bmw" className="w-10/12" />
            </div>
            <div className="border w-[80px] h-[80px] border-[#5941BB] bg-white flex items-center justify-center m-auto rounded">
              <img src={KIA} alt="kia" className="w-10/12" />
            </div>
            <div className="border w-[80px] h-[80px] border-[#5941BB] bg-white flex items-center justify-center m-auto rounded">
              <img src={Benz} alt="benz" className="w-8/12" />
            </div>
            <div className="border w-[80px] h-[80px] border-[#5941BB] bg-white flex items-center justify-center m-auto rounded">
              <img src={Porsche} alt="porsche" className="w-8/12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
