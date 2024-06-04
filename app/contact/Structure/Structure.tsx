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
        viewport={{ once: true }}
        onSubmit={(e: FormEvent<HTMLFormElement>) => sendMail(e)}
        className="space-y-4 flex flex-col items-end w-[90%] max-[1024px]:w-full max-[1024px]:items-center max-[768px]:-mt-10"
      >
        <div>
          <input
            className="text-dark_blue  border border-light_blue rounded-md px-4 py-2 w-[300px] max-[460px]:w-[220px] placeholder:text-[14px]"
            placeholder="Enter your name..."
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            className="text-dark_blue  border border-light_blue rounded-md px-4 py-2 w-[300px] max-[460px]:w-[220px] placeholder:text-[14px]"
            placeholder="Enter your phone number..."
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <input
            className="text-dark_blue border border-light_blue rounded-md px-4 py-2 w-[300px] max-[460px]:w-[220px] placeholder:text-[14px]"
            placeholder="Enter your email..."
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <textarea
            className="text-dark_blue  border border-light_blue rounded-md px-4 py-2 min-h-[170px] w-[300px] max-[460px]:w-[220px] placeholder:text-[14px]"
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
          delay: 1,
        }}
        viewport={{
          once: true,
        }}
        className="max-[530px]:mt-[40px] max-[430px]:mt-[70px] max-[530px]:w-full w-[60%]"
      >
        <Canvas>
          <ambientLight intensity={1} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping={false}
            enableRotate={true}
          />
          <Suspense fallback={null}>
            <EarthModel />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </motion.div>
    </>
  );
}
