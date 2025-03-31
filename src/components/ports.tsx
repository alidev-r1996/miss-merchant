import Image from "next/image";

export type PortProps= {
    src: string;
    title: string;
    options: string[];
}


const Port: React.FC<PortProps> = ({options,src,title}) => {
    return ( 
        <div className=" md:w-1/2  rounded shadow overflow-hidden p-8 bg-white flex flex-col gap-8 md:h-80 ">
            <div className="flex items-center gap-1 md:mb-8 mb-3">
                <Image src={src} alt="" width={50}  height={50}/>
                <p className="font-bold text-2xl">{title}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {options.map((i,index)=>{return <p key={index} className="p-2 md:text-base text-sm rounded-full shadow px-6 bg-slate-100 text-blue-600">{i}</p>})}
             
            </div>
          </div>
     );
}
 
export default Port;