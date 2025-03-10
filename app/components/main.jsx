"use client";
import React from "react";
import Image from "next/image";
import arkan from "../img/new-home.JPEG";
import arkanMain from "../img/main.JPEG";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import first from "../img/first.JPEG";
import Imge0 from "../img/new-image.JPEG";
import { motion } from "framer-motion";
import img1 from "../img/img1.JPEG";
import img2 from "../img/img2.webp";
import img3 from "../img/img3.webp"; 
import img4 from "../img/img4.webp";

const items = [
  { src: img1, alt: "ثوب أزرق" },
  { src: img2, alt: "ثوب أبيض" },
  { src: img3, alt: "رجل يرتدي شماغًا وثوبًا أبيض" },
  { src: img4, alt: "ثوب بني بتطريز ذهبي" },
];
 function Main() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
    AOS.refresh();
    window.addEventListener("resize", () => {
      AOS.refresh();
    });
  }, []);


  return (
    <>
      <div
        lang="ar"
        className={`m-auto flex justify-start items-start   w-full h-[90vh] bg-home  z-0 overflow-hidden `}
      >
        <Image
          src={arkan}
          alt="arkan"
          className="w-full h-[90vh]  brightness-35"
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between items-center gap-4 h-[30%]
       max-md:w-full
      "
        >
          <h1
            data-aos="fade-up"
            className="text-6xl  text-white w-[80%] text-center font-Home leading-tight *:
        max-md:text-4xl max-md:w-full 
        "
            style={{ fontFamily: "Home" }}
          >
            أركان<span className="text-primary"> ||</span> أناقة التراث العربي
          </h1>
          <h3
            data-aos="zoom-in"
            className="text-xl font-Home text-white w-full text-center "
            style={{ fontFamily: "HomeScand" }}
          >
            نقدم لكم أفضل الثياب العربية بأعلى جودة واهتمام بالتفاصيل
          </h3>
        </div>
      </div>
      {/* ///////2 section ////// */}
      <div className=" container m-auto flex flex-col md:flex-row h-full  p-6 overflow-hidden ">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-end gap-6 overflow-hidden">
          {/* Header */}
          <h1
            data-aos="fade-right"
            className="text-primary text-3xl  font-bold mb-4  md:text-left"
            style={{ fontFamily: "Home" }}
          >
            أركان||
            <span
              className=" text-black px-4"
              style={{ fontFamily: "HomeScand" }}
            >
              تراث وأناقة عربية
            </span>
          </h1>

          {/* Subtext */}
          <p
            data-aos="fade-right"
            className="text-gray-600 text-end font-bold mb-6 leading-relaxed md:w-[80%]"
            style={{ fontFamily: "HomeScand" }}
          >
            نحن في أركان نعتز بتقديم الثوب العربي كرمز للأناقة والهوية، مستلهمين
            من التراث السعربي لنقدم لعملائنا الأفضل دائمًا.
          </p>

          {/* Numbers Section */}
          <div
            data-aos="zoom-in"
            className="flex justify-center md:justify-start space-x-8"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-primary ">1200</h2>
              <p className="text-gray-600">طالب</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold ">150+</h2>
              <p className="">دورة</p>
            </div>
          </div>
        </div>

        {/* Right Section (Image Placeholder) */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6">
          <div className="relative w-100 bg-white rounded-lg shadow-lg flex items-center justify-center">
            {/* Logo Placeholder */}
            <Image
              data-aos="zoom-in"
              src={arkanMain}
              alt="arkan"
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* Buttons Placeholder (can be styled as images or icons) */}
            <div className="absolute bottom-4  flex space-x-2">
              <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      {/* ////////3 section ////// */}
      <section className="bg-primary py-12 overflow-hidden" dir="rtl">
        <div className="container mx-auto px-4">
          {/* Header */}
          <h2
            data-aos="zoom-in-down"
            className="text-4xl md:text-5xl  text-white text-center mb-4"
            style={{ fontFamily: "Home" }}
          >
            خدمات أركان المتنوعة
          </h2>

          {/* Subheader */}
          <p
            className="text-white text-center mb-12 opacity-80 font-mono text-lg shadow-2xl"
            style={{ fontFamily: "HomeScand" }}
          >
            نقدم خدمات تصميم وتصنيع الثوب العربي بأعلى معايير الجودة والاهتمام
            بالتفاصيل.
          </p>

          {/* Cards */}
          <div
            className="flex  justify-center items-center gap-8
         max-md:flex-col max-md:gap-10
        "
          >
            {/* Card 1 */}
            <div className="relative w-[40%] max-md:w-full ">
              <Image
                data-aos="fade-left"
                src={first}
                alt="Sewing machine representing educational achievements"
                className="w-140 h-88 object-cover rounded-lg max-md:w-full"
              />
              <div
                data-aos="flip-right"
                className=" w-[80%] h-[40%] absolute -bottom-8 left-2 right-2 bg-white p-6 rounded-b-lg shadow-md 
            "
              >
                <h3
                  className="text-lg font-bold text-primary mb-2 text-center"
                  style={{ fontFamily: "Home" }}
                >
                  تصميم الثوب
                </h3>
                <p className="text-black">
                  من خلال تصميم دورات تعليمية مخصصة، نجحنا في تمكين الطلاب من
                  تحقيق أهدافهم التعليمية وتطوير مهاراتهم.
                </p>
              </div>
            </div>
            <div className="relative w-[40%] max-md:w-full">
              <Image
                data-aos="fade-right"
                src={Imge0}
                alt="Sewing machine representing educational achievements"
                className=" w-140 h-88 object-cover rounded-lg max-md:w-full"
              />
              <div
                data-aos="flip-left"
                className=" w-[80%] h-[40%] absolute -bottom-8 left-2 right-2 bg-white p-6 rounded-b-lg shadow-md "
              >
                <h3
                  className="text-lg font-bold text-primary mb-2 text-center "
                  style={{ fontFamily: "Home" }}
                >
                  إنجازاتنا
                </h3>
                <p className="text-black">
                  نقدم خيارات تخصيص متنوعة لتلبية احتياجات عملائنا وضمان رضاهم
                  التام
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //////////4 section //////// */}
      <section className="py-12 bg-gray-100 text-center overflow-hidden">
      <h2 className="text-4xl font-bold text-gray-900">معرض أركان</h2>
      <p className="text-gray-600 mt-2">استمتع بأناقة الثوب العربي وتراثه الغني في معرضنا.</p>
      
      <div className=" container mx-auto flex flex-wrap justify-center   gap-6 mt-8 ">
        {items.map((item, index) => (
          <motion.div 
            key={index} 
            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer  place-items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="  overflow-hidden ">
            <Image
onClick={() => openModal(item.src, item.alt)}
src={item.src}
alt={item.alt}
className="w-[300px] h-[60vh] object-cover hover:scale-105 duration-500 ease-in-out"
/>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Main;
