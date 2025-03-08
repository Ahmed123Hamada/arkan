import React from "react";
import Aos from "aos";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";

function Footer() {
  return (
    <div className="bg-footer  text-amber-50  h-full flex flex-col justify-center items-center py-18 gap-8
    ">
      <div
        className="container m-auto  flex justify-between items-center
         max-md:flex-col max-md:items-end max-md:gap-8 max-md:px-8
        "
        style={{ fontFamily: "HomeScand" }}
      >
        {/* //////email */}         
        <div
         data-aos='fade-right'
        className="flex flex-col  justify-end items-start gap-4 
        max-md:items-end
        ">
          <h1 className="text-xl font-bold text-end">أدخل بريدك الإلكتروني هنا</h1>
          <input
            type="mail"
            className=" outline-none border border-primary py-2 px-4 "
          />
          <button className="bg-primary text-white py-2 px-4 rounded-4xl ">
            ارسل الطلب ألان
          </button>
        </div>
        {/* ////contact */}
        <div
                 data-aos='zoom-in'

        className="flex flex-col  justify-start items-start gap-8 
                max-md:items-end

        ">
          <h1 className=" font-bold text-xl">تواصل معنا</h1>
          <h2 className="">+201008659909</h2>
          <h2 className="font-bold">info@arkan.com</h2>
        </div>
        {/* ///arkan// */}
        <div
                  data-aos='fade-left'
        className="flex flex-col  justify-start items-start gap-8 
        
        max-md:items-end
        ">
          <h1 className="font-bold text-4xl"
           style={{ fontFamily: "Home" }}
          >اركان</h1>
          <p className="text-md font-sans text-end"lang="ar">نحن نقدم أفضل الثياب العربية لعملائنا.</p>
          <div className=" flex justify-between items-center gap-4">
            <a href="/">
             <Linkedin/>
            </a>
            <a href="/">
             <Facebook/>
            </a>
            <a href="/">
            <X/>
                </a>
            <a href="/">
            <Instagram/>
            </a>
          </div>
        </div>
      </div>
      {/* //////All Rights/// */}
      <div
            className=" text-md font-sans flex justify-center items-center  gap-4 ">
        <p>© 2024. All rights reserved.<span className="font-bold">@Ahmed Hamada</span></p>
      </div>
    </div>
  );
}

export default Footer;
