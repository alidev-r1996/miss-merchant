"use client";

export type AccordeonProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  index: number;
};

const Accordeon: React.FC<AccordeonProps> = ({
  id,
  title,
  children,
  index,
}) => {
  return (
    <div className="border-1 border-emerald-300 dark:border-slate-800 shadow rounded-lg overflow-hidden md:w-1/2 mx-auto">
      <input type="checkbox" id={id} className="peer/item1 hidden" />
      <label
        htmlFor={id}
        className={`${index % 2 == 0 ? "bg-teal-500 dark:bg-teal-700 text-white dark:text-slate-200" : "bg-white dark:bg-slate-800 text-teal-500"} block font-bold  md:text-xl cursor-pointer p-4 peer-checked/item1:bg-emerald-600  peer-checked/item1:text-white dark:peer-checked/item1:text-slate-200`}
      >
        {title}
      </label>
      <div className="overflow-hidden bg-white dark:bg-slate-200 text-slate-700 max-h-0 px-4 peer-checked/item1:max-h-64 md:peer-checked/item1:max-h-56 transition-all duration-300">
        {children}
      </div>
    </div>
  );
};

export default Accordeon;
