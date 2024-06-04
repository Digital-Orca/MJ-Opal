'use client';

import Image from "next/image";
import LOGO from "@/assets/logo.svg";
import ABOUT from "@/assets/about.svg";
import ABOUT_2 from "@/assets/about-2.png";
import { motion } from "framer-motion";

export default function Structure() {
  return (
    <>
      <motion.div
        initial={{
          translateY: -50,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          type: "tween",
        }}
        viewport={{ once: true }}
      >
        <h1 className="bg-gradient-to-r from-[#154C79] to-[#278CDF] flex items-center justify-center text-transparent bg-clip-text text-[60px] max-[1024px]:text-[50px]">
          MJ{" "}
          <span className="ml-3">
            <Image
              className="w-[60px] max-[1024px]:w-[50px]"
              src={LOGO}
              alt="MJ Opal Logo"
              width={60}
              height={60}
            />
          </span>{" "}
          PAL
        </h1>

        <p className="text-[#565656] max-w-[750px] leading-8 mx-auto text-center mt-6 mb-12 max-[1024px]:max-w-[700px] max-[725px]:px-5 max-[725px]:text-[15px] max-[450px]:text-[14px]">
          It all started when we gave E-commerce a shot and it all went wrong!
          Couple of years ago, we launched our E-commerce store. Despite our
          efforts, we didn&apos;t get the conversion rates of our dreams so we
          decided to quit.
        </p>
      </motion.div>

      <div className="px-[100px] max-[768px]:px-[20px] text-[#565656]">
        <div className="flex items-center justify-between max-[768px]:flex-col">
          <motion.div
            initial={{
              translateX: "-100%",
              opacity: 0,
            }}
            whileInView={{
              translateX: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              type: "spring",
              bounce: 0.3,
            }}
            viewport={{ once: true }}
            className="w-[45%] max-[768px]:w-full"
          >
            <Image
              className="w-full"
              src={ABOUT}
              alt="About Section Image-1"
              width={400}
              height={400}
            />
          </motion.div>

          <motion.div
            initial={{
              translateX: "100%",
              opacity: 0,
            }}
            whileInView={{
              translateX: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              type: "spring",
              bounce: 0.3,
            }}
            viewport={{ once: true }}
            className="w-[50%] space-y-3 max-[768px]:w-full"
          >
            <h3 className="max-w-[500px] text-[24px] max-[1024px]:text-[18px] leading-8 max-[768px]:mt-4 max-[768px]:text-center max-[450px]:text-[16px]">
              You would think that we just left E-commerce and went to a 9-5 job
              right?
            </h3>

            <p className="leading-[26px] max-w-[500px] max-[1024px]:text-[14px] max-[450px]:text-[12px] max-[768px]:text-center">
              But no, we invested in our efforts and time to discover what we
              did wrong. We learnt from our mistakes and we decided to help
              businesses of any level to avoid these mistakes with the help of
              our skilled team.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="px-[100px] max-[768px]:px-[20px] text-[#565656] mt-12 flex items-center justify-between max-[768px]:flex-col-reverse">
        <motion.div
          initial={{
            translateX: "-100%",
            opacity: 0,
          }}
          whileInView={{
            translateX: 0,
            opacity: 1,
          }}
          transition={{
            duration: 2,
            type: "spring",
            bounce: 0.3,
          }}
          viewport={{
            once: true,
          }}
          className="w-[50%] space-y-3 max-[768px]:w-full"
        >
          <p className="max-w-[500px] leading-[26px] max-[1024px]:text-[14px] max-[450px]:text-[12px] max-[768px]:mt-6 max-[768px]:text-center">
            This experience inspired us with our famous quote Grow Win Shine,
            every online business should keep on dreaming for success and
            uniqueness. But the struggle is real, picture a digital battleground
            where every click counts, businesses juggle standing out, shifting
            algorithms, and privacy rules—all with daily challenges. It&apos;s
            the adrenaline rush of online entrepreneurship! But no worries, we
            got you your insulin injections to make you shine. Get the
            conversion rates of your dreams in less than 28 days, all is
            guaranteed!
          </p>
        </motion.div>

        <motion.div
          initial={{
            translateX: "100%",
            opacity: 0,
          }}
          whileInView={{
            translateX: 0,
            opacity: 1,
          }}
          transition={{
            duration: 2,
            type: "spring",
            bounce: 0.3,
          }}
          viewport={{
            once: true,
          }}
          className="w-[45%] max-[768px]:w-full"
        >
          <Image
            className="w-full object-cover rounded-md max-[768px]:w-full"
            src={ABOUT_2}
            alt="About Section Image-2"
            width={400}
            height={400}
          />
        </motion.div>
      </div>
    </>
  );
}
