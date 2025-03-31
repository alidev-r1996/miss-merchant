import Image from "next/image";

export type FlipCardProps = {
    src: string;
    title: string;
    options: string[];
}

const FlipCard: React.FC<FlipCardProps> = ({options,src,title}) => {
    return ( 
        <div className="card col-span-1 aspect-square w-full rounded overflow-hidden">
            <div className="card__content text-center relative transition-transform duration-500 text-white font-bold cursor-p">
            <div className="col-span-1 relative aspect-square w-full rounded shadow overflow-hidden card__front">
              <Image alt="" fill src={src}/>
              <h2 className="absolute bottom-0 p-10 text-center bg-gradient-to-t from-slate-900 to-transparent text-white w-full font-bold text-xl md:text-3xl">{title}</h2>
            </div>
              <div className="card__back  absolute top-0 bottom-0 right-0 left-0 p-8 bg-white flex flex-col justify-around">
                <h2 className="md:text-3xl text-xl text-white w-3/4 shadow rounded p-2 mx-auto bg-blue-600">{title} </h2>
                <div className="flex flex-col gap-4 text-slate-700 md:text-lg text-base">
                  {options.map((i,index)=>{
                    return <p key={index}>{i}</p>
                  })}
                </div>
              </div>
            </div>
          </div>
     );
}
 
export default FlipCard;