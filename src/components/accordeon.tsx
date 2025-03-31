"use client"

export type AccordeonProps = {
  id: string,
  title: string;
  children: React.ReactNode;
  index: number;
}

const Accordeon: React.FC<AccordeonProps> = ({id,title,children,index}) => {
    return ( 
        <div className="border-1 border-emerald-300 shadow rounded-lg overflow-hidden md:w-1/2 mx-auto">
          <input type="checkbox" id={id} className="peer/item1 hidden" />
          <label
            htmlFor={id}
            className={`${(index%2) == 0 ? "bg-teal-500 text-white": "bg-white text-teal-500"} block font-bold  md:text-xl cursor-pointer p-4 peer-checked/item1:bg-emerald-600  peer-checked/item1:text-white`}
          >{title}
          </label>
          <div className="overflow-hidden bg-white max-h-0 px-4 peer-checked/item1:max-h-64 md:peer-checked/item1:max-h-56 transition-all duration-300">{children}
          </div>
        </div>
     );
}
 
export default Accordeon;