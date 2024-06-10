"use client";

import Image from "next/image";
import HERO_IMAGE from "@/assets/hero.png";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-[841px]:h-[calc(100vh)] py-[280px] flex items-center max-[840px]:justify-center min-[841px]:pl-[100px] max-[840px]:pt-[370px]">
      <svg className="trail-container">
        <path d="" className="" style={{ stroke: "#8FBEDC" }}></path>
      </svg>
      <svg className="trail-container">
        <path d="" className="" style={{ stroke: "#154C79" }}></path>
      </svg>
      <svg className="trail-container">
        <path d="" className="" style={{ stroke: "#565656" }}></path>
      </svg>
      <svg className="trail-container">
        <path d="" className="" style={{ stroke: "#3974a5" }}></path>
      </svg>
      <svg className="trail-container">
        <path d="" className="" style={{ stroke: "#232a8a" }}></path>
      </svg>
      <svg className="trail-container">
        <path d="" className="" style={{ stroke: "#038ad8" }}></path>
      </svg>

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
          className="font-sans font-semibold max-w-[600px] text-[20px] max-[1050px]:max-w-[450px] leading-8 max-[500px]:text-[16px] max-[500px]:max-w-[400px] max-[1050px]:text-center max-[1050px]:mx-auto"
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
          className="font-sans font-semibold max-w-[500px] text-[20px] max-[1050px]:max-w-[450px] leading-8 max-[500px]:text-[16px] max-[500px]:max-w-[350px] max-[1050px]:text-center max-[1050px]:mx-auto"
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
            className="font-sans font-semibold block w-fit text-white px-9 py-[14px] rounded-md bg-dark_blue transition duration-500 ease-in-out hover:bg-opacity-85 max-[500px]:text-[14px] max-[500px]:px-6 mt-6"
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
        className="max-[840px]:hidden absolute top-[250px] right-0 max-[1200px]:top-[300px] max-[950px]:top-[350px]"
      >
        <Image
          src={HERO_IMAGE}
          alt={"Hero Section Image"}
          width={450}
          height={400}
          className="max-[1200px]:w-[350px] max-[950px]:w-[250px]"
        />
      </motion.div>
    </section>
  );
}
