'use client'

import { Bars3Icon, LanguageIcon, MoonIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    


    return ( 
        <header
          className={`fixed top-0 left-0 z-[9999] min-w-screen flex items-center justify-between px-4 py-2 transition-all duration-300 ${
            isScrolled ? "bg-white shadow" : "bg-transparent"
          }`}
        >
          <p onClick={() => setShow(!show)} className="rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white cursor-pointer shadow size-10 p-1.5 md:hidden">
            <Bars3Icon />
            </p>
          <nav>
          
            <ul className={`${show? "flex": "hidden"} md:flex flex-col right-0 top-14 h-screen md:h-max md:flex-row bg-white/20 backdrop-blur-md md:bg-transparent w-full items-center absolute md:static`}>
              <Link href='#home' className="font-bold hover:scale-110 hover:text-blue-600 hover:translate-1 transition-all duration-200 cursor-pointer p-4 text-lg">خانه</Link>
              <Link href='#services' className="font-bold hover:scale-110 hover:text-blue-600 hover:translate-1 transition-all duration-200 cursor-pointer p-4 text-lg">خدمات</Link>
              <Link href='#ports' className="font-bold hover:scale-110 hover:text-blue-600 hover:translate-1 transition-all duration-200 cursor-pointer p-4 text-lg">بنادر </Link>
              <Link href='#faq' className="font-bold hover:scale-110 hover:text-blue-600 hover:translate-1 transition-all duration-200 cursor-pointer p-4 text-lg">سوالات متداول </Link>
              <Link href='#request_advise' className="font-bold hover:scale-110 hover:text-blue-600 hover:translate-1 transition-all duration-200 cursor-pointer p-4 text-lg">درخواست مشاوره </Link>
              <Link href='#contact_us' className="font-bold hover:scale-110 hover:text-blue-600 hover:translate-1 transition-all duration-200 cursor-pointer p-4 text-lg">تماس با ما</Link>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <p className="rounded-full shadow size-10 p-1.5">
              <LanguageIcon />
            </p>
            <p className="rounded-full shadow size-10 p-1.5">
              <MoonIcon />
            </p>
          </div>
        </header>
     );
}
 
export default Header;