import FormCosultant from "@/components/form";
import { Ports, services } from "@/constants/contstant";
import FlipCard from "@/components/flipcard";
import Accordeon from "@/components/accordeon";
import Port from "@/components/ports";
import Header from "@/components/header";
import { IoLogoWechat, IoLogoWhatsapp, IoMailOutline  } from "react-icons/io5";
import Herosection from "@/components/herosection";


export default function Home() {

  
  return (
    <div className="bg-slate-100 min-h-screen max-w-screen snap-y snap-mandatory scroll-smooth">
      <main dir="rtl" className="w-full">
        <Header />
        <Herosection />

        <div id="services" className="w-full min-h-screen  snap-y snap-start snap-mandatory pt-32 p-4">
          <h1 className="font-bold text-2xl mb-16 text-center">خدمات</h1>
          <div className="md:grid flex flex-col grid-cols-4 grid-rows-2  w-full gap-4 p-4">
          {services.map((i,index)=>{
            return <FlipCard key={index} {...i} />
          })}
          </div>
        </div>

        <div id="ports" className="w-full min-h-screen  snap-y snap-start snap-mandatory pt-32 p-4">
          <h1 className="font-bold text-2xl mb-10 text-center">بنادر اصلی همکار</h1>
            <div className="flex flex-col md:flex-row justify-center items-center mx-auto w-full  md:w-2/3 gap-4 p-4">
            {Ports.map((i,index)=>{
              return <Port key={index} {...i} />
            })}
            </div>
        </div>


        <div id="faq" className="w-full min-h-screen  snap-y snap-start snap-mandatory pt-32 p-4">
          <h1 className="font-bold text-2xl mb-10 text-center">سوالات متداول </h1>
          <div className="flex flex-col gap-5">
          <Accordeon id="item1"/>
          <Accordeon id="item2"/>
          <Accordeon id="item3"/>
          <Accordeon id="item4"/>
          </div>
        </div>


        
        <div id="request_advise" className="w-full h-max snap-y snap-start snap-mandatory  p-4">
          <h1 className="font-bold text-2xl mb-10 text-center"> درخواست مشاوره</h1>
          <FormCosultant />
        <h1 className="font-bold text-2xl mb-10 text-center mt-20">تماس با ما </h1>

        <div id="contact_us" className="flex flex-col md:flex-row items-center justify-center gap-1 md:mb-0">
          <div className="flex items-center rounded shadow group px-4 whitespace-nowrap transition-all duration-300 hover:bg-green-500 hover:text-white cursor-pointer">
            <p className="font-bold w-0 whitespace-nowrap overflow-hidden group-hover:w-32 transition-all duration-300">00989028679502</p>
            <p className="size-16 flex items-center justify-center p-2">
              <IoLogoWechat className="size-full"/>
            </p>
           </div>

           <div className="flex items-center rounded shadow group px-4 whitespace-nowrap transition-all duration-300 hover:bg-rose-500 hover:text-white cursor-pointer">
              <p className="font-bold w-0 whitespace-nowrap overflow-hidden group-hover:w-52 transition-all duration-300 text-sm">Mahdiyehnaderi1377@gmail.com</p>
              <p className="size-16 flex items-center justify-center p-2 ">
                <IoMailOutline className="size-full"/>
              </p>
            </div>
            
           <div className="flex items-center rounded shadow group px-4 whitespace-nowrap transition-all duration-300 hover:bg-green-500 hover:text-white cursor-pointer">
              <p className="font-bold w-0 whitespace-nowrap overflow-hidden group-hover:w-32 transition-all duration-300">00989028679502</p>
              <p className="size-16 flex items-center justify-center p-2 ">
                <IoLogoWhatsapp className="size-full"/>
              </p>
            </div>


        </div>
        </div>

        <div className="w-full h-max snap-y snap-start snap-mandatory  p-4"></div>
        
        
      <footer className="w-full bg-slate-800 text-white font-bold text-sm p-4 mt-28 text-center snap-y snap-center snap-mandatory">
        <p>تمامی حقوقی این وبسایت متعلق به <strong className="text-rose-600 px-2">مهدیه نادری</strong> می‌باشد.</p>
      </footer>
      </main>
    </div>
  );
}
