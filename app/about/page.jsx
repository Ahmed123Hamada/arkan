 
 'use client';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import Image from "next/image"; 
import firstimg from "../img/first.JPEG"
import scand from "../img/img2.webp"
function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center text-center p-8 mt-[10vh]">
    <h1 className="text-4xl font-bold text-gray-800 mb-4 overflow-hidden p-4" data-aos="fade-up">
      من نحن
    </h1>
    <p className="text-lg text-gray-600 max-w-2xl mb-8 overflow-hidden" data-aos="fade-up">
      نحن نقدم تصاميم فريدة تعكس التراث العربي بأعلى معايير الجودة والاهتمام بالتفاصيل.
    </p>
    <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl overflow-hidden">
      <div className="bg-white p-4 shadow-lg rounded-lg overflow-hidden" data-aos="fade-right">
        <Image
          src={firstimg}
          alt="تصميم الثوب"
          className="rounded-lg mb-4 h-[40vh]"
        />
        <h2 className="text-2xl font-semibold text-gray-700 p-2">تصميم الثوب</h2>
        <p className="text-gray-600">نقدم تصاميم فريدة تعكس التراث العربي وتناسب جميع الأذواق والمناسبات.</p>
      </div>
      <div className="bg-white p-4 shadow-lg rounded-lg overflow-hidden" data-aos="fade-left">
        <Image
          src={scand}
          alt="تصنيع الثوب"
          className="h-[40vh] rounded-lg mb-4"
        />
        <h2 className="text-2xl font-semibold text-gray-700 p-2">تصنيع الثوب</h2>
        <p className="text-gray-600">نقدم خيارات تخصيص متنوعة لتلبية احتياجات عملائنا وضمان رضاهم التام.</p>
      </div>
    </div>
  </div>
  )
}

export default About;