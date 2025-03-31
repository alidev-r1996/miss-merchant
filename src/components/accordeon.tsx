
export type AccordeonProps = {
  id: string,
  title: string;
  children: React.ReactNode;
}

const Accordeon: React.FC<AccordeonProps> = ({id,title,children}) => {
    return ( 
        <div className="border border-emerald-300 shadow rounded-lg overflow-hidden">
          <input type="checkbox" id={id} className="peer/item1 hidden" />
          <label
            htmlFor={id}
            className="block font-bold md:text-xl cursor-pointer p-4 bg-gray-200 peer-checked/item1:bg-emerald-600  peer-checked/item1:text-white"
          >{title}
          </label>
          <div className="overflow-hidden max-h-0 px-4 peer-checked/item1:max-h-64 md:peer-checked/item1:max-h-56 transition-all duration-300">{children}
          </div>
        </div>
     );
}
 
export default Accordeon;