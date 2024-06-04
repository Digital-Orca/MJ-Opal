"use client";

import DiamondCanvas from "@/components/DiamondCanvas";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative h-screen flex items-center justify-center flex-col select-none">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          type: "tween",
        }}
        viewport={{ once: true }}
        className="absolute -top-40 max-[1200px]:-top-24 max-[980px]:-top-20 max-[525px]:-top-10 max-[350px]:-top-6 left-1/2 -translate-x-1/2"
      >
        <DiamondCanvas />
      </motion.div>
      <motion.h1
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 0.5,
          type: "tween",
        }}
        viewport={{ once: true }}
        className="!text-dark_blue text-[60px] w-[925px] text-center mx-auto mt-32 max-[1280px]:text-[50px] max-[980px]:text-[30px] max-[980px]:w-[700px] max-[768px]:text-[22px] max-[768px]:w-[500px] max-[525px]:text-[18px] max-[525px]:w-[300px] max-[350px]:w-[240px] max-[350px]:text-[14px]"
      >
        IN THIS LIFE, YOU DON’T GET WHAT YOU DESERVE. ONLY WHAT YOU
      </motion.h1>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 1,
          type: "tween",
        }}
        viewport={{ once: true }}
      >
        <Link
          href={"/packages"}
          className="text-white text-2xl bg-dark_blue rounded-[20px] w-[240px] h-[75px] hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center mx-auto mt-[40px] max-[980px]:text-lg max-[980px]:w-[180px] max-[980px]:h-[55px] max-[525px]:text-base max-[350px]:text-sm max-[350px]:w-[160px]"
        >
          See All Packages
        </Link>
      </motion.div>
    </section>
  );
}
