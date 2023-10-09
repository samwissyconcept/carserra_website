import React from "react";
import Car from "../assets/car.png";
import logo3 from "../assets/logo3.svg";

function About() {
  return (
    <div className="bg-white md:py-16 py-8">
      <div className="w-10/12 m-auto md:flex item-center justify-between">
        <div className=" md:pt-10 md:w-[50%] pb-4 md:pr-4 ">
          <img src={Car} alt="" />
        </div>

        <div className="border-[1px] md:w-[50%] lg:py-8 border-[#5941BB] bg-[#FAFAFA] ">
          <div className="w-[85%] m-auto py-8">
            <div>
              <h1 className="flex items-center pb-14 font-bold text-xl text-[#5941BB]">
                Why
                <img
                  src={logo3}
                  alt="carsera"
                  className="object-cover h-5 w-30"
                />
                ?
              </h1>
            </div>
            <p className="lg:pb-4">
              We’ve A Variety Of Market Details For Cars Like Suzuki, Toyota,
              Nissan, kia, Tesla, Ford And Honda.
            </p>
            <p className="lg:pb-4">
              You May Find Updated Market Price, Model And Complete
              Specifications Of Your Dream Car.
            </p>
            <p className="lg:pb-8 pb-4">So You May Be Able To Buy It.</p>
            <button className="bg-[#5941BB] hover:bg-[#55439c] text-white rounded py-2 px-4">
              Get Market Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
