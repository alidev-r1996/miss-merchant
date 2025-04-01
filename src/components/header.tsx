"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { heaerItems } from "@/constants/contstant";
import DarkMode from "@/ui/darkmode";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const t = useTranslations("Header");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2 }}
      className={`sticky  -top-0 z-[9999] w-full flex items-center  justify-between px-4 py-2 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-slate-800 shadow" : "bg-transparent"
      }`}
    >
      <motion.p
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShow(!show)}
        className={`${isScrolled ? "dark:shadow-[0_0_5px_#5f5c5c] hover:bg-blue-500 hover:text-white dark:text-slate-300" : "bg-white/20 backdrop-blur-lg hover:text-blue-500 hover:bg-white"} ${show && "!bg-rose-500  !text-white"} transition-all font-bold duration-200 rounded-full text-blue-600  shadow hover:text-blue-500 dark:hover:text-slate-100 p-1.5 flex items-center justify-center pl-1 relative  cursor-pointer   dark:hover:bg-blue-500 md:hidden size-9`}
      >
        {!show ? <Bars3Icon /> : <XMarkIcon />}
      </motion.p>

      <nav>
        <ul
          className={`${show ? "flex" : "hidden"} md:flex flex-col right-0 text-slate-800 md:dark:text-slate-200 bg-white/40 backdrop-blur-sm md:backdrop-blur-none md:bg-transparent top-14 h-screen md:h-max md:flex-row w-full items-center absolute md:static`}
        >
          {heaerItems.map((i) => {
            return (
              <li
                key={i.id}
                onClick={() => setShow(false)}
                className={`${isScrolled ? "md:hover:text-white" : "md:bg-white/20 backdrop-blur md:text-blue-600  "} md:ml-4 md:my-0 my-2 hover:bg-blue-500 hover:text-white dark:hover:text-slate-100  p-1 rounded-full text-center hover:translate-1 transition-all duration-200 cursor-pointer`}
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
      <DarkMode scroll={isScrolled} />
    </motion.header>
  );
};

export default Header;
