import { services } from "@/constants/contstant";
import FlipCard from "./flipcard";

const Services = () => {
    return ( 
        <div id="services" className="w-full min-h-screen  snap-y snap-start snap-mandatory pt-32 p-4">
          <h1 className="font-bold text-2xl mb-16 text-center">خدمات</h1>
          <div className="md:grid flex flex-col grid-cols-4 grid-rows-2  w-full gap-4 p-4">
          {services.map((i,index)=>{
            return <FlipCard key={index} {...i} />
          })}
          </div>
        </div>
     );
}
 
export default Services;