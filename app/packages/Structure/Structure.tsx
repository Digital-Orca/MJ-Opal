"use client";

import { packages } from "@/constants";
import { CircleCheck, CircleX } from "lucide-react";
import SERVICE_WAVE from "@/assets/service_wave.svg";
import Image from "next/image";
import CUSTOMIZE_2 from "@/assets/customize_2.svg";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Structure() {
  return (
    <>
      <motion.h1
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 1.5,
          type: "tween",
        }}
        viewport={{ once: true }}
        className="text-dark_blue text-[45px] pt-[220px] text-center max-[1024px]:text-[35px] max-[768px]:text-[25px]"
      >
        YOUR GOALS, OUR SERVICES
      </motion.h1>

      <div className="container mx-auto grid xl:grid-cols-4 min-[561px]:grid-cols-2 gap-x-6 gap-y-4 mt-10">
        {packages.map((p, idx) => (
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              delay: (packages.length - idx) * 0.5,
              type: "tween",
            }}
            viewport={{ once: true }}
            key={`${idx} - ${p.name}`}
            className="relative border border-dark_blue rounded-md h-fit overflow-hidden"
          >
            <div className="absolute xl:-top-6 lg:-top-36 md:-top-16 inset-x-0 -z-10 max-[970px]:-top-16 max-[850px]:-top-10 max-[750px]:-top-4 max-[630px]:top-0 max-[560px]:-top-24 max-[490px]:-top-14 max-[420px]:-top-6 max-[370px]:top-0">
              <Image
                className="w-full"
                src={SERVICE_WAVE}
                alt="Service Wave Image"
                width={200}
                height={100}
              />
            </div>

            <div className="pl-5 pt-5 space-y-2">
              <h4 className="text-sm text-dark_blue">For {p.scale}</h4>
              <h2 className="text-xl text-dark_blue">{p.name}</h2>
            </div>

            <div className="pl-5 mt-20">
              <h3 className="text-dark_blue">What&apos;s included:</h3>

              <div className="text-dark_blue mt-4 space-y-4">
                {p.services.map((s, idx) => (
                  <div
                    key={`${idx} - ${s}`}
                    className="flex items-center gap-x-2"
                  >
                    <div className="w-7 h-7">
                      <CircleCheck size={28} className="text-dark_blue" />
                    </div>
                    <span className="text-base">{s}</span>
                  </div>
                ))}
              </div>

              <div className="text-red-600 opacity-80 mt-4 space-y-4">
                {p?.no_services?.map((s, idx) => (
                  <div
                    key={`${idx} - ${s}`}
                    className="flex items-center gap-x-2"
                  >
                    <div className="w-7 h-7">
                      <CircleX size={28} className="text-red-600 opacity-80" />
                    </div>
                    <span className="text-base">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href={"/contact"} className="text-white w-fit bg-dark_blue px-6 py-3 rounded-md block mx-auto my-4 mt-6 transition duration-300 ease-in hover:bg-opacity-85">
              Get Started
            </Link>
          </motion.div>
        ))}
      </div>

      <section className="container mx-auto max-[680px]:px-4 bg-light_blue py-16 mt-10 flex max-[680px]:flex-col-reverse items-center justify-center gap-20">
        <div className="max-[680px]:text-center">
          <motion.h4
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
            className="text-body text-xl"
          >
            For you, Customize your page
          </motion.h4>

          <motion.h2
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              type: "tween",
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="text-dark_blue text-2xl my-3"
          >
            You can ask for any service you want
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              type: "tween",
              delay: 1,
            }}
            viewport={{ once: true }}
            className="text-body text-2xl max-w-[500px]"
          >
            customize your own success plan using our service
          </motion.p>

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
              delay: 1.5,
            }}
            viewport={{ once: true }}
          >
            <Link
              href={"/contact"}
              className="block w-fit max-[680px]:mx-auto mt-6 text-white bg-dark_blue px-6 py-3 rounded-md transition duration-300 ease-in hover:bg-opacity-85"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

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
          <Image
            className="min-w-[250px]"
            src={CUSTOMIZE_2}
            alt="Customize SVG Image - 2"
            width={250}
            height={250}
          />
        </motion.div>
      </section>
    </>
  );
}
