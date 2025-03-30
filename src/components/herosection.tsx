import Image from "next/image";

const Herosection = () => {
    return ( 
        <div id="home" className="relative min-h-screen w-full snap-start">
          <Image src="/images/hero-section.webp" fill alt="" priority/>
          <div className=" flex flex-col gap-8 absolute bottom-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 bg-slate-700/30 rounded-lg  text-center p-20 text-white whitespace-nowrap"> 
            <h1 className="font-bold md:text-6xl text-l sm:text-xl">در دنیای تجارت بین‌الملل همراه شما هستیم!</h1>
            <p className="md:text-2xl text-sm font-bold text-slate-200">همراه شما در تمام مراحل واردات کالا </p>
           </div>
        </div>
     );
}
 
export default Herosection;