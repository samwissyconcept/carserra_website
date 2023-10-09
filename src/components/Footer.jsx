import React from "react";
import logo4 from "../assets/logo4.svg";

function Footer() {
  return (
    <div className="bg-[#5941BB]">
      <div className="w-10/12 m-auto text-[#FAFAFA] py-8">
        <div className="md:flex items-center justify-between ">
          <div className="flex justify-center">
            <img
              src={logo4}
              alt="logo"
              className="md:mr-8 object-cover h-13 w-47 "
            />
          </div>
          <div className="grid md:grid-cols-3 gap-4 pt-4 justify-between">
            <div className="support">
              <h1 className="font-bold pb-2">Find Support</h1>
              <ul>
                <li>info@carserra.com</li>
                <li>www.carserra.com</li>
                <li>admin@carserra.com</li>
              </ul>
            </div>
            <div className="find us">
              <h1 className="font-bold pb-2">Find Us On</h1>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div className="">
              <h1 className="font-bold pb-2">Find Specification</h1>
              <div className="flex items-center gap-4">
                <ul>
                  <li>Toyota</li>
                  <li>Honda</li>
                  <li>Tesla</li>
                </ul>
                <ul>
                  <li>Porsche</li>
                  <li>KIA</li>
                  <li>Mercedes</li>
                </ul>
                <ul>
                  <li>BMW</li>
                  <li>Audi</li>
                  <li>Nisan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#806CCE]">
        <div className="w-10/12 m-auto text-center text-[#FAFAFA] py-4">
          <p className=""> &copy; All Right Reserved Carserra 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
