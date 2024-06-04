"use client";

import { FAQS } from "@/constants";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import FAQ_DIAMOND from "@/assets/faq_diamond.svg";
import FAQ_DIAMOND_LIGHT from "@/assets/faq_diamond_light.svg";
import FAQ_RECTANGLE from "@/assets/faq_rectangle.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative bg-dark_blue h-screen text-white pt-[28px] shadow-lg max-[880px]:h-[85vh] max-[440px]:h-[90vh] min-[1201px]:pl-[120px]">
      <motion.h1
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          type: "tween",
        }}
        viewport={{ once: true }}
        className="text-[55px] mb-[30px] max-[1200px]:text-center max-[1200px]:mb-[50px]"
      >
        FAQ
      </motion.h1>

      <div className="max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:items-center space-y-5">
        {FAQS.map((faq, idx) => (
          <motion.div
            initial={{
              opacity: 0,
              translateX: "-100%",
            }}
            whileInView={{
              opacity: 1,
              translateX: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.3 * idx,
              type: "tween",
            }}
            viewport={{ once: true }}
            key={faq.ques}
            className="space-y-[15px] text-[#F5F8FA] ml-4 w-fit"
          >
            <h3
              onClick={() => {
                if (active === idx) {
                  setActive(null);
                } else {
                  setActive(idx);
                }
              }}
              className="relative w-fit text-[28px] cursor-pointer flex items-center gap-x-2 max-[880px]:text-[22px] max-[440px]:text-[14px] max-[340px]:text-[12px]"
            >
              {/* Chevrons */}
              {idx === active ? <ChevronDown /> : <ChevronRight />}

              {faq.ques}

              {active === idx && (
                <span className="h-[2px] absolute -bottom-2 left-[42px] w-[calc(100%-42px)] bg-[#F5F8FA]"></span>
              )}
            </h3>
            <p
              style={{
                height: active == idx ? "105px" : "0",
                transitionDuration: active == idx ? "500ms" : "0ms",
              }}
              className="max-w-[815px] h-0 overflow-hidden transition-all duration-500 ease-out pl-[42px] pr-[20px] max-[880px]:text-[14px] max-[880px]:max-w-[500px] max-[340px]:text-[12px]"
            >
              {faq.ans}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="max-[1200px]:hidden max-[1200px]:absolute">
        <div className="absolute right-0 bottom-0">
          <Image
            src={FAQ_DIAMOND}
            alt="FAQ Section - Diamond Image"
            height={500}
            width={330}
          />
        </div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
            delay: 0.6,
            type: "tween",
          }}
          viewport={{ once: true }}
          className="absolute right-12 bottom-32"
        >
          <Image
            src={FAQ_DIAMOND_LIGHT}
            alt="FAQ Section - Diamond Light"
            height={500}
            width={330}
          />
        </motion.div>
      </div>

      <div className="absolute top-[525px] -z-10 max-[880px]:hidden">
        <Image
          src={FAQ_RECTANGLE}
          alt="FAQ Rectangle Image"
          width={1440}
          height={100}
        />
      </div>
    </section>
  );
}
