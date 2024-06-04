"use client";

import { Globe } from "@/components/Globe";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    Globe && (
      <main className="flex items-center justify-center pt-[80px] max-[1024px]:flex-col-reverse max-[1024px]:pt-[80px] max-[530px]:pt-[0px]">
        <motion.form
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
            delay: 1,
          }}
          className="space-y-4 flex flex-col items-end w-[90%] max-[1024px]:w-full max-[1024px]:items-center max-[768px]:-mt-10"
        >
          <div>
            <input
              className="border border-light_blue rounded-md px-4 py-2 w-[300px] max-[460px]:w-[220px] placeholder:text-[14px]"
              placeholder="Enter your name..."
              type="text"
            />
          </div>
          <div>
            <input
              className="border border-light_blue rounded-md px-4 py-2 w-[300px] max-[460px]:w-[220px] placeholder:text-[14px]"
              placeholder="Enter your phone number..."
              type="tel"
            />
          </div>
          <div>
            <input
              className="border border-light_blue rounded-md px-4 py-2 w-[300px] max-[460px]:w-[220px] placeholder:text-[14px]"
              placeholder="Enter your email..."
              type="email"
            />
          </div>
          <div>
            <textarea
              className="border border-light_blue rounded-md px-4 py-2 min-h-[170px] w-[300px] max-[460px]:w-[220px] placeholder:text-[14px]"
              placeholder="Enter your message..."
            />
          </div>

          <button className="text-white bg-dark_blue px-6 py-2 rounded-md">
            Send
          </button>
        </motion.form>

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
            delay: 1,
          }}
          className="w-full flex items-center justify-center"
        >
          <Globe />
        </motion.div>
      </main>
    )
  );
}
