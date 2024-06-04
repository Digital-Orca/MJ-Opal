"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LOGO from "@/assets/logo.svg";
import Link from "next/link";

export default function MobileHeader() {
  return (
    <motion.header
      initial={{
        top: "calc(-100% + -55px)",
      }}
      animate={{
        top: 0,
      }}
      transition={{ duration: 1.5, type: "tween" }}
      className="hidden max-[640px]:container max-[430px]:px-0 max-[640px]:mx-auto max-[640px]:flex max-[430px]:flex-col max-[640px]:items-center max-[640px]:justify-between max-[430px]:justify-evenly absolute top-0 bg-dark_blue h-[140px] max-[530px]:h-[100px] max-[430px]:h-[140px] w-full z-[99999999]"
    >
      <div>
        <Image
          className="w-[100px] max-[530px]:w-[70px]"
          src={LOGO}
          width={100}
          height={100}
          alt="Mj Opal Logo"
        />
      </div>

      <nav className="text-white">
        <ul className="flex items-center gap-x-4 text-[18px] max-[530px]:text-[14px] max-[430px]:gap-x-3">
          <Link
            className="transition duration-300 ease-in-out hover:text-light_blue"
            href={"/"}
          >
            Home
          </Link>

          <Link
            className="transition duration-300 ease-in-out hover:text-light_blue"
            href={"/packages"}
          >
            Packages
          </Link>

          <Link
            className="transition duration-300 ease-in-out hover:text-light_blue"
            href={"/about"}
          >
            About us
          </Link>

          <Link
            className="transition duration-300 ease-in-out hover:text-light_blue"
            href={"/contact"}
          >
            Contact
          </Link>
        </ul>
      </nav>
    </motion.header>
  );
}
