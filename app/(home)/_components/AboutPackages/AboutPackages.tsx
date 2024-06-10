"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section className="about-services_section py-64 relative flex items-center justify-center flex-col">
      <motion.h1
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
        className="text-dark_blue text-[60px] w-[925px] text-center mx-auto max-[1280px]:text-[50px] max-[980px]:text-[30px] max-[980px]:w-[700px] max-[768px]:text-[22px] max-[768px]:w-[500px] max-[525px]:text-[18px] max-[525px]:w-[300px] max-[350px]:w-[240px]"
      >
        In this life, you don’t get what you deserve. Only what you strive for.
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
