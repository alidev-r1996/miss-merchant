"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

const Herosection = () => {
  const t = useTranslations("herosection");
  return (
    <div id="home" className="relative min-h-screen w-full snap-start">
      <Image src="/images/hero-section.webp" fill alt="" priority />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-8 absolute bottom-1/2 left-1/2 translate-y-1/2 w-full -translate-x-1/2 bg-slate-700/30 rounded-lg text-center py-10 p-4 md:p-20 text-white md:whitespace-nowrap"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-bold md:text-6xl text-l sm:text-xl"
        >
          {t("slogan")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="md:text-2xl text-sm font-bold text-slate-200"
        >
          {t("text")}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Herosection;
