"use client";

import Image from "next/image";
import LOGO from "@/assets/logo.svg";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{
        top: "calc(-100% + -55px)",
      }}
      animate={{
        top: 0,
      }}
      transition={{ duration: 1.5, type: "tween" }}
      className="max-[640px]:hidden absolute top-0 bg-light_blue h-[140px] w-full z-[99999999]"
    >
      <nav className="bg-dark_blue text-white flex items-center justify-between pt-[40px] pb-[20px]">
        <ul className="flex items-center justify-evenly flex-1 text-[18px]">
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
        </ul>

        <ul className="flex items-center justify-evenly flex-1 text-[18px]">
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

      <Link href={"/"} className="flex items-center justify-center absolute left-1/2 top-[55px] -translate-x-1/2 bg-white rounded-full w-[125px] h-[125px] p-[6px]">
        <Image
          className="w-auto h-auto"
          src={LOGO}
          width={125}
          height={125}
          alt="Mj Opal Logo"
          priority
        />
      </Link>
    </motion.header>
  );
}
