'use client'

import { Bars3Icon, LanguageIcon, MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import Flag from 'react-world-flags'


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [show, setShow] = useState(false)
    const t = useTranslations('Header');
    const [language, setLanguage] = useState(false)
    const [theme, setTheme] = useState("light")
  

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 100);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      


    return ( 
        <header
          className={`sticky  top-0 z-[9999] w-full flex items-center  justify-between px-4 py-2 transition-all duration-300 ${
            isScrolled ? "bg-white shadow" : "bg-transparent"
          }`}
        >
          <p onClick={() => setShow(!show)} className="rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white cursor-pointer shadow size-10 p-1.5 md:hidden">
            <Bars3Icon />
            </p>
          <nav>
          
            <ul className={`${show? "flex": "hidden"} md:flex flex-col right-0 top-14 h-screen md:h-max md:flex-row bg-white/20 backdrop-blur-md md:bg-transparent w-full items-center absolute md:static`}>
              <Link href='#home' className="font-bold hover:scale-110 hover:text-blue-600 hover:translate-1 transition-all duration-200 cursor-pointer p-4 text-lg">{t('home')}</Link>
              <Link href='#services' className="font-bold hover:scale-110 hover:text-blue-600 hover:translate-1 transition-all duration-200 cursor-pointer p-4 text-lg">{t('services')}</Link>
              <Link href='#ports' className="font-bold hover:scale-110 hover:text-blue-600 hover:translate-1 transition-all duration-200 cursor-pointer p-4 text-lg">{t('ports')} </Link>
              <Link href='#faq' className="font-bold hover:scale-110 hover:text-blue-600 hover:translate-1 transition-all duration-200 cursor-pointer p-4 text-lg">{t('faq')}  </Link>
              <Link href='#request_advise' className="font-bold hover:scale-110 hover:text-blue-600 hover:translate-1 transition-all duration-200 cursor-pointer p-4 text-lg">{t('advice')}  </Link>
              <Link href='#contact_us' className="font-bold hover:scale-110 hover:text-blue-600 hover:translate-1 transition-all duration-200 cursor-pointer p-4 text-lg">{t('contact')}  </Link>
            </ul>
          </nav>
          <div className="flex items-center gap-4 ">
            <div onClick={()=>setLanguage(!language)} className="rounded-full shadow size-10 p-1.5 relative bg-slate-300/50 cursor-pointer hover:bg-white">
              <LanguageIcon />
              <div className={`${language ? "h-72": "h-0"} flex transition-all duration-300 flex-col gap-2 absolute top-14 -left-1 overflow-hidden`}>
              {/* Iran Flag */}
              <Link scroll={false} onClick={()=>setLanguage(false)} href='/fa' title="Iran" className="border border-gray-300 flex items-center justify-center cursor-pointer transition-all duration-300 bg-slate-300/50 backdrop-blur-md  shadow p-2 rounded-full size-12 hover:bg-gray-50">
                <Flag code="IR" style={{ width: '30px', height: '20px' }} />
              </Link>
              
              {/* English Flag (Use "GB" for the UK flag, for English-speaking countries) */}
              <Link scroll={false} onClick={()=>setLanguage(false)} href='/en' title="English" className="border border-gray-300 flex items-center justify-center cursor-pointer transition-all duration-300 bg-slate-300/50 backdrop-blur-md  shadow p-2 rounded-full size-12 hover:bg-gray-50">
                <Flag code="GB" style={{ width: '30px', height: '20px' }} />
              </Link>
              
              {/* India Flag */}
              <Link scroll={false} onClick={()=>setLanguage(false)} href='/hi-IN' title="India" className="border border-gray-300 flex items-center justify-center cursor-pointer transition-all duration-300 bg-slate-300/50 backdrop-blur-md  shadow p-2 rounded-full size-12 hover:bg-gray-50">
                <Flag code="IN" style={{ width: '30px', height: '20px' }} />
              </Link>

              {/* China Flag */}
              <Link scroll={false} onClick={()=>setLanguage(false)} href='/zh-CN' title="China" className="border border-gray-300 flex items-center justify-center cursor-pointer transition-all duration-300 bg-slate-300/50 backdrop-blur-md  shadow p-2 rounded-full size-12 hover:bg-gray-50">
                <Flag code="CN" style={{ width: '30px', height: '20px' }} />
              </Link>

              {/* Dubai Flag (Use UAE flag for Dubai) */}
              <Link scroll={false} onClick={()=>setLanguage(false)} href='/ar-AE' title="Arabic" className="border border-gray-300 flex items-center justify-center cursor-pointer transition-all duration-300 bg-slate-300/50 backdrop-blur-md  shadow p-2 rounded-full size-12 hover:bg-gray-50">
                <Flag code="AE" style={{ width: '30px', height: '20px' }} />
              </Link>

              </div>
            </div>
              <div onClick={()=>setTheme(theme == "dark"? "light": "dark")} className="overflow-hidden cursor-pointer transition-colors duration-300 hover:bg-white flex items-center justify-center relative rounded-full shadow size-10 p-1.5 bg-slate-300/50">
                
                  <MoonIcon className={`${theme == "dark" ? "top-1.5" : "top-20"} block absolute size-[70%] transition-all duration-300 `}/>
                
                  <SunIcon className={`${theme == "light" ? "top-1.5" : "top-20"} block absolute size-[70%] transition-all duration-300 `}/>
               
              </div>
          </div>
        </header>
     );
}
 
export default Header;