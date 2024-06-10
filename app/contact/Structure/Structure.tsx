"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { FormEvent, Suspense } from "react";
import EarthModel from "@/public/earth/Earth";
import useContactUs from "@/hooks/useContactUs";

export default function Structure() {
  const {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    message,
    setMessage,
    sendMail,
    isLoading,
  } = useContactUs();

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          type: "tween",
        }}
        className="relative -z-[9999999] bg-gradient-to-r from-[#154C79] to-[#56b3ff] flex items-center justify-center text-transparent bg-clip-text text-[60px] max-w-[1000px] mx-auto text-center px-5 max-[1024px]:text-[40px] max-[768px]:text-[28px] max-[340px]:text-[22px] -mb-28"
      >
        Just a quick form away from getting in touch with our team
      </motion.h1>

      <div className="flex items-center justify-center max-[1024px]:flex-col-reverse relative -z-[9999999]">
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
            delay: 1.5,
          }}
          viewport={{ once: true }}
          onSubmit={(e: FormEvent<HTMLFormElement>) => sendMail(e)}
          className="font-sans font-semibold space-y-4 flex flex-col items-end w-[90%] max-[1024px]:w-full max-[1024px]:items-center max-[768px]:-mt-32"
        >
          <div>
            <input
              className="text-dark_blue border border-light_blue rounded-md px-6 py-3 w-[350px] max-[460px]:w-[240px]"
              placeholder="Enter your name..."
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              className="text-dark_blue border border-light_blue rounded-md px-6 py-3 w-[350px] max-[460px]:w-[240px]"
              placeholder="Enter your phone number..."
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <input
              className="text-dark_blue border border-light_blue rounded-md px-6 py-3 w-[350px] max-[460px]:w-[240px]"
              placeholder="Enter your email..."
              type="email"
              required
              value={email}
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <textarea
              className="text-dark_blue border border-light_blue rounded-md px-6 py-3 min-h-[170px] w-[350px] max-[460px]:w-[240px]"
              placeholder="Enter your message..."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button className="text-white bg-dark_blue px-6 py-2 rounded-md">
            {isLoading ? "Loading..." : "Send"}
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
            delay: 1.5,
          }}
          viewport={{
            once: true,
          }}
          className="max-[530px]:hidden max-[530px]:mt-[40px] max-[430px]:mt-[70px] max-[1024px]:w-full w-[60%] relative -z-[9999999]"
        >
          <Canvas>
            <ambientLight intensity={1} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableDamping={false}
              enableRotate={false}
            />
            <Suspense fallback={null}>
              <EarthModel scale={1} />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
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
            delay: 1.5,
          }}
          viewport={{
            once: true,
          }}
          className="hidden max-[530px]:block max-[1024px]:w-full w-[60%] -mt-32 overflow-x-hidden"
        >
          <Canvas>
            <ambientLight intensity={1} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableDamping={false}
              enableRotate={false}
            />
            <Suspense fallback={null}>
              <EarthModel scale={0.6} />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        </motion.div>
      </div>
    </>
  );
}
