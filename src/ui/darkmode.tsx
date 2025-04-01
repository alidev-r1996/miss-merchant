"use client";

import { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  LanguageIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/16/solid";
import Flag from "react-world-flags";
import { Countries } from "@/constants/contstant";
import Link from "next/link";

const DarkMode = ({ scroll }: { scroll: boolean }) => {
  const [language, setLanguage] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (
      window.matchMedia("(prefers-color-scheme: dark)").matches ||
      localStorage.getItem("theme") === "dark"
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const darkmodeHandler = () => {
    const currentTheme = theme === "dark" ? "light" : "dark";
    setTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex items-center gap-4 ">
      <div
        onClick={() => setLanguage(!language)}
        className={`${scroll ? "dark:shadow-[0_0_5px_#5f5c5c] hover:bg-blue-500 hover:text-white dark:text-slate-300" : "bg-white/20 backdrop-blur-md hover:text-blue-500 hover:bg-white"} ${language ? " !bg-blue-500 !text-white dark:!bg-blue-500 dark:!text-slate-100 " : ""} transition-all font-bold duration-200 rounded-full text-blue-600  shadow hover:text-blue-500 dark:hover:text-slate-100 w-max flex items-center justify-center pl-1 relative  cursor-pointer   dark:hover:bg-blue-500`}
      >
        <LanguageIcon className="size-9 p-2" />
        <p className="text-sm py-2">Language</p>
        <p
          className={`${language ? "rotate-180" : "rotate-0"} transition-all duration-200`}
        >
          <ChevronDownIcon className="size-9 py-2" />
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
                className="border border-gray-300 flex items-center justify-center cursor-pointer transition-all duration-300 bg-white/50 backdrop-blur-md  shadow p-2 rounded-full size-12 hover:bg-gray-50"
              >
                <Flag code={i.code} style={{ width: "30px", height: "20px" }} />
              </Link>
            );
          })}
        </div>
      </div>
      <div
        onClick={darkmodeHandler}
        className={`${scroll ? "dark:shadow-[0_0_5px_#5f5c5c] hover:!bg-blue-500 hover:text-white dark:text-slate-300" : "bg-white/20 backdrop-blur-md hover:text-blue-500 hover:bg-white"} overflow-hidden text-blue-600 cursor-pointer transition-colors duration-300 hover:bg-white dark:hover:bg-blue-500 hover:text-blue-500 dark:hover:text-slate-100 flex items-center justify-center relative rounded-full shadow size-9 p-2 `}
      >
        <MoonIcon
          className={`${theme == "dark" ? "top-1.5" : "top-20"} block absolute size-[70%] transition-all duration-300 `}
        />
        <SunIcon
          className={`${theme == "light" ? "top-1.5" : "top-20"} block absolute size-[70%] transition-all duration-300 `}
        />
      </div>
    </div>
  );
};

export default DarkMode;
