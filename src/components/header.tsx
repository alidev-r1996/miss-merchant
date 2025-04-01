"use client";

import {
  Bars3Icon,
  ChevronDownIcon,
  LanguageIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import Flag from "react-world-flags";
import { motion } from "framer-motion";
import { Countries, heaerItems } from "@/constants/contstant";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const t = useTranslations("Header");
  const [language, setLanguage] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2 }}
      className={`sticky  -top-0 z-[9999] w-full flex items-center  justify-between px-4 py-2 transition-all duration-300 ${
        isScrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >

      <motion.p
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShow(!show)} 
        className="rounded-full transition-all duration-300 bg-white/20 text-blue-600 backdrop-blur-md hover:bg-blue-500 hover:text-white cursor-pointer shadow size-10 p-1.5 md:hidden"
      >
        {!show ? 
          <Bars3Icon /> : <XMarkIcon />
        }
      </motion.p>

      <nav>
        <ul className={`${show ? "flex" : "hidden"} md:flex flex-col right-0 bg-white/40 backdrop-blur-xs md:backdrop-blur-none md:bg-transparent top-14 h-screen md:h-max md:flex-row w-full items-center absolute md:static`}>
          {heaerItems.map((i) => {
            return (
              <li
                key={i.id}
                onClick={() => setShow(false)}
                className={`${isScrolled ? "md:hover:text-white" : "md:bg-white/20 backdrop-blur md:text-blue-600  "} md:ml-4 md:my-0 my-2 hover:bg-blue-500 hover:text-white  p-1 rounded-full text-center hover:translate-1 transition-all duration-200 cursor-pointer`}
              >
                <Link
                  href={i.href}
                  className="font-bold hover:scale-110  p-4 text-lg"
                >
                  {t(i.title)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      
      <div className="flex items-center gap-4 ">
        <div
          onClick={() => setLanguage(!language)}
          className={`${isScrolled ? "" : "bg-white/20 backdrop-blur-md "} ${language ? " !bg-white" : ""} rounded-full text-blue-600 shadow w-max flex items-center justify-center pl-1 relative  cursor-pointer hover:bg-white`}
        >
          <LanguageIcon className="size-9 p-2"/>
          <p className="text-sm py-2">Language</p>
          <p className={`${language ? "rotate-180" : "rotate-0"} transition-all duration-200`}>
            <ChevronDownIcon className="size-9 py-2"/>
          </p>
          <div
            className={`${language ? "h-72" : "h-0"} flex transition-all duration-300 flex-col gap-2 absolute top-14 right-0 overflow-hidden`}
          >
            {Countries.map((i) => {
              return (
                <Link
                  key={i.id}
                  scroll={false}
                  onClick={() => setLanguage(false)}
                  href={i.href}
                  title={i.title}
                  className="border border-gray-300 flex items-center justify-center cursor-pointer transition-all duration-300 bg-slate-300/50 backdrop-blur-md  shadow p-2 rounded-full size-12 hover:bg-gray-50"
                >
                  <Flag
                    code={i.code}
                    style={{ width: "30px", height: "20px" }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
          className={`${isScrolled ? "" : "bg-white/20 backdrop-blur-md "} overflow-hidden text-blue-600 cursor-pointer transition-colors duration-300 hover:bg-white flex items-center justify-center relative rounded-full shadow size-9 p-2 `}
        >
          <MoonIcon
            className={`${theme == "dark" ? "top-1.5" : "top-20"} block absolute size-[70%] transition-all duration-300 `}
          />

          <SunIcon
            className={`${theme == "light" ? "top-1.5" : "top-20"} block absolute size-[70%] transition-all duration-300 `}
          />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
