"use client"

import Image from "next/image";
import {motion} from "framer-motion"

export type PortProps= {
    src: string;
    title: string;
    options: string[];
    index: number
}


const Port: React.FC<PortProps> = ({options,src,title, index}) => {
    return ( 
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
            className="md:w-1/2 rounded shadow overflow-hidden p-8 bg-white flex flex-col gap-8 md:h-80"
        >
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-1 md:mb-8 mb-3"
            >
                <Image src={src} alt="" width={50} height={50}/>
                <p className="font-bold text-2xl">{title}</p>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, staggerChildren: 0.5, delayChildren: 0.2 }}
                className="flex flex-wrap gap-4"
            >
                {options.map((i,index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 * index }}
                        className="p-2 md:text-base text-sm rounded-full shadow px-6 bg-slate-100 text-blue-600"
                    >
                        {i}
                    </motion.p>
                ))}
            </motion.div>
        </motion.div>
    );
}
 
export default Port;