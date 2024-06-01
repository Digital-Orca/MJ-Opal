"use client";

import Image from "next/image";
import Link from "next/link";
import LOGO from "@/public/assets/logo.svg";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{
        y: "calc(-100% + -55px)",
      }}
      animate={{
        y: 0,
      }}
      transition={{ duration: 1.5, type: "just" }}
      className="relative bg-light_blue h-[140px] bg-opacity-40"
    >
      <nav className="bg-dark_blue text-white flex items-center justify-between pt-[40px] pb-[20px]">
        <ul className="flex items-center justify-evenly flex-1 text-[18px]">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Packages</Link>
        </ul>

        <ul className="flex items-center justify-evenly flex-1 text-[18px]">
          <Link href={"/"}>About us</Link>
          <Link href={"/"}>Contact</Link>
        </ul>
      </nav>

      <div className="flex items-center justify-center absolute left-1/2 top-[55px] -translate-x-1/2 bg-body rounded-full w-[125px] h-[125px] p-[6px]">
        <Image
          className="w-full"
          src={LOGO}
          width={125}
          height={125}
          alt="Mj Opal Logo"
        />
      </div>
    </motion.header>
  );
}
