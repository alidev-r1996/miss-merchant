'use client'

import { useTranslations } from "next-intl";
import { useState } from "react";
import { IoLogoWechat, IoLogoWhatsapp, IoMailOutline } from "react-icons/io5";

const Contact = () => {
    const t = useTranslations('Header')
    const [social, setSocial] = useState({email: false, wechat: false, whatsapp: false})


  return (
    <>
      <h1 className="font-bold text-2xl mb-10 text-center mt-20">
       {t('contact')}
      </h1>

      <div
        id="contact-us"
        className="flex flex-col md:flex-row items-center justify-center gap-1 md:mb-0"
      >
        <div onClick={() => setSocial(prev => ({ ...prev, wechat: !prev.wechat }))} className={`${social.wechat && "bg-green-500 text-white"} bg-white text-slate-700 flex items-center rounded shadow group px-4 whitespace-nowrap transition-all duration-300 hover:bg-green-500 hover:text-white active:bg-green-500 active:text-white focus:bg-green-500 focus:text-white cursor-pointer`}>
          <p className={`${social.wechat ? "w-32" : "w-0"} font-bold w-0 whitespace-nowrap overflow-hidden  group-focus:w-32 transition-all duration-300`}>
            00989028679502
          </p>
          <p className="size-16 flex items-center justify-center p-2">
            <IoLogoWechat className="size-16 flex items-center justify-center p-2" />
          </p>
        </div>

        <div onClick={() => setSocial(prev => ({ ...prev, email: !prev.email }))} className={`${social.email && "bg-rose-500 text-white"} bg-white text-slate-700 flex items-center rounded shadow group px-4 whitespace-nowrap transition-all duration-300 hover:bg-rose-500 hover:text-white active:bg-rose-500 active:text-white focus:bg-rose-500 focus:text-white cursor-pointer`}>
          <p className={`${social.email ? "w-56" : "w-0"} font-bold w-0 whitespace-nowrap overflow-hidden transition-all duration-300 text-sm`}>
            Mahdiyehnaderi1377@gmail.com
          </p>
          <p className="size-16 flex items-center justify-center p-2 ">
            <IoMailOutline className="size-16 flex items-center justify-center p-2" />
          </p>
        </div>

        <div onClick={() => setSocial(prev => ({ ...prev, whatsapp: !prev.whatsapp }))} className={`${social.whatsapp && "bg-green-500 text-white"} bg-white text-slate-700 flex items-center rounded shadow group px-4 whitespace-nowrap transition-all duration-300 hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white active:bg-green-500 active:text-white cursor-pointer`}>
          <p className={`${social.whatsapp ? "w-32" : "w-0"} font-bold w-0 whitespace-nowrap overflow-hidden  transition-all duration-300`}>
            00989028679502
          </p>
          <p className="size-16 flex items-center justify-center p-2 ">
            <IoLogoWhatsapp className="size-16 flex items-center justify-center p-2" />
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
