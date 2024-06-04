"use client";

import Image from "next/image";
import HERO_IMAGE from "@/assets/hero.png";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh+140px)] max-[1140px]:h-[calc(75vh+140px)] pt-[280px] min-[841px]:pl-[100px] max-[840px]:pt-[230px] max-[340px]:pt-[210px]">
      <div className="text-[#565656] space-y-4 max-[840px]:flex max-[840px]:flex-col max-[840px]:items-center max-[980px]:px-4">
        <motion.h2
          initial={{
            translateX: "-100%",
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
            type: "tween",
          }}
          viewport={{ once: true }}
          className="text-[65px] max-[1140px]:text-[50px] max-[980px]:text-[40px] max-[500px]:text-[30px] max-[340px]:text-[22px]"
        >
          Grow, win and shine
        </motion.h2>

        <motion.p
          initial={{
            translateX: "-100%",
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
            type: "tween",
          }}
          viewport={{ once: true }}
          className="max-w-[600px] max-[980px]:max-w-[450px] leading-7 max-[500px]:text-[14px] max-[500px]:max-w-[400px] max-[500px]:text-center"
        >
          Like you, we&apos;ve faced challenges on the way. MJ Opal was born as
          a result of some setbacks despite our best efforts.
        </motion.p>

        <motion.p
          initial={{
            translateX: "-100%",
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
            type: "tween",
          }}
          viewport={{ once: true }}
          className="max-w-[500px] max-[980px]:max-w-[400px] leading-7 max-[500px]:text-[14px] max-[500px]:max-w-[350px] max-[500px]:text-center"
        >
          Determined to turn our experiences to serve your business&apos;s needs
          with our team to make you shine.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
            type: "tween",
          }}
          viewport={{ once: true }}
        >
          <Link
            href={"/packages"}
            className="block w-fit text-white px-8 py-3 rounded-md bg-dark_blue transition duration-500 ease-in-out hover:bg-opacity-85 max-[500px]:text-[14px] max-[500px]:px-6"
          >
            Let&apos;s Go
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          rotateZ: 45,
          x: "100%",
        }}
        animate={{
          opacity: 1,
          rotateZ: 0,
          x: 0,
        }}
        transition={{
          duration: 1,
          delay: 1,
          type: "tween",
        }}
        viewport={{ once: true }}
        className="max-[840px]:hidden absolute top-[140px] right-0"
      >
        <Image
          src={HERO_IMAGE}
          alt={"Hero Section Image"}
          width={450}
          height={400}
          className="max-[1140px]:w-[300px]"
        />
      </motion.div>
    </section>
  );
}
