"use client";
import Image from "next/image";
import logo from "../img/logo.JPEG";
import { first } from "postcss";
////icon lucide
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
const linkes = [
  {
    title: "الرئيسية",
    url: "/",
  },
  {
    title: "من نحن",
    url: "/about",
  },
  {
    title: "تواصل معنا",
    url: "/contact",
  },

];
function Navbar() {
    const [open, setOpen] = useState(false);
  return (
    <nav
      className="w-full h-[10vh] bg-white/20 fixed top-0 left-0 right-0 z-50  backdrop-filter backdrop-blur-md "
    >
    <div
      className=" flex container m-auto justify-between items-center
    max-md:px-4 max-md:py-4   py-2    z-10 
    "
    >
      <Link
        href="/"
        className="text-3xl font-bold text-primary text-center flex justify-center items-center 

         max-md:text-xl
        "
        style={{ fontFamily: "Home" }}
      >
        أركان ||
        <Image
          src={logo}
          alt="logo"
          className="w-[70px] mt-2 -ml-2 
        max-md:w-[50px]
        max-sm:w-[40px]
        "
        />
      </Link>

      <div className="flex justify-between items-center gap-8 ">
        {linkes.map((link) => (
          <Link
            key={link.title}
            href={link.url}
            className="text-md  text-black hover:text-primary duration-500 hover:scale-110 hover:cursor-pointer max-md:hidden "
            style={{ fontFamily: "HomeScand" }}
          >
            {link.title}
          </Link>
        ))}
      </div>
      {/* ///////button menu  */}
      <button
        onClick={() => setOpen(!open)}
        className="text-xl text-black hover:text-primary duration-500 hover:scale-110 hover:cursor-pointer
        max-md:ml-36
        md:hidden
        "
      >
{ open ? <X data-aos="fade-down" size={40} />:       <Menu size={40} />}      </button>
    </div>
      {/* ///mobile menu */}
      {open && (
        <div data-aos="fade-down" className=" top-[10vh]  left-0 right-0 text-center bg-white  flex flex-col justify-center 
        items-center gap-8 z-30 py-4 duration-500
         fixed backdrop-filter backdrop-blur-lg
        ">
          {linkes.map((link) => (
            <Link
            data-aos="fade-down"
              key={link.title}
              href={link.url}
              className="text-md  text-black hover:text-primary hover:duration-500 hover:scale-110 hover:cursor-pointer "
              style={{ fontFamily: "HomeScand", fontSize: "20px" }}
            >
              {link.title}
            </Link>                

          ))}
        </div>
      )}
      </nav>
  );
}

export default Navbar;
