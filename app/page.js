
 "use client";
import Image from "next/image";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Main from "./components/main";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنيميشن بالمللي ثانية
      once: true, // اجعل الأنيميشن يحدث مرة واحدة فقط عند التمرير
    });
  }, []);
  return (
    <Main/>
  );
}
