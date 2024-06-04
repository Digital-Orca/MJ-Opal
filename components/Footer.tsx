"use client";

import Image from "next/image";
import FACEBOOK from "@/assets/facebook.svg";
import INSTAGRAM from "@/assets/instagram.svg";
import TWITTER from "@/assets/twitter.svg";
import LOGO from "@/assets/logo.svg";
import Link from "next/link";
import useSubscribeForNewsletters from "@/hooks/useSubscribeForNewsletter";
import { FormEvent } from "react";

export default function Footer() {
  const { email, setEmail, isLoading, sendMail } = useSubscribeForNewsletters();

  return (
    <footer className="relative container py-[40px] bg-dark_blue mt-10">
      <div className="relative grid grid-cols-5 text-white z-10 max-[768px]:gap-y-4">
        <div className="col-span-2 flex flex-col items-end max-[768px]:col-span-5">
          <h2 className="text-[35px] self-start w-3/4 ml-auto max-[1100px]:w-full max-[450px]:text-[25px]">
            Newsletter
          </h2>

          <form
            onSubmit={(e: FormEvent<HTMLFormElement>) => sendMail(e)}
            className="relative flex items-center w-3/4 mt-2 mb-5 max-[1100px]:w-full max-[768px]:w-3/4 max-[768px]:mr-auto max-[450px]:w-full"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              placeholder="Enter your email..."
              className="text-dark_blue pl-4 bg-body rounded-[15px] w-full h-[55px] max-[1100px]:h-[45px] max-[450px]:text-[12px] max-[450px]:h-[35px] max-[340px]:pl-2"
            />
            <button className="absolute top-0 right-0 h-[55px] px-5 bg-light_blue text-dark_blue border border-dark_blue text-[20px] rounded-[15px] transition-all duration-300 ease-out hover:bg-opacity-75 max-[1100px]:text-[14px] max-[1100px]:h-[45px] max-[450px]:h-[35px] max-[450px]:text-[12px] max-[340px]:px-3">
              {isLoading ? "Loading..." : "Subscribe"}
            </button>
          </form>

          <ul className="flex items-center gap-x-4 self-start w-3/4 ml-auto max-[1100px]:w-full">
            <li className="cursor-pointer transition-all duration-300 ease-out hover:opacity-70">
              <Image
                className="w-[25px] h-[25px]"
                src={FACEBOOK}
                alt="Facebook Logo"
                width={25}
                height={25}
              />
            </li>
            <li className="cursor-pointer transition-all duration-300 ease-out hover:opacity-70">
              <Image
                className="w-[25px] h-[25px]"
                src={INSTAGRAM}
                alt="Instagram Logo"
                width={25}
                height={25}
              />
            </li>
            <li className="cursor-pointer transition-all duration-300 ease-out hover:opacity-70">
              <Image
                className="w-[25px] h-[25px]"
                src={TWITTER}
                alt="Twitter Logo"
                width={25}
                height={25}
              />
            </li>
          </ul>
        </div>

        <div className="col-span-2 flex gap-x-16 justify-center mt-10 max-[768px]:col-span-3 max-[768px]:justify-start max-[768px]:gap-x-10 max-[450px]:gap-x-5 max-[450px]:mt-5 max-[340px]:col-span-5">
          <ul className="space-y-4 text-[18px] max-[768px]:text-[14px]">
            <li>
              <Link
                className="hover:text-light_blue hover:underline"
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-light_blue hover:underline"
                href={"/packagese"}
              >
                Packages
              </Link>
            </li>
          </ul>
          <ul className="space-y-4 text-[18px] max-[768px]:text-[14px]">
            <li>
              <Link
                className="hover:text-light_blue hover:underline"
                href={"/about"}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-light_blue hover:underline"
                href={"/contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center max-[768px]:col-span-2 max-[340px]:col-span-5 max-[340px]:items-start">
          <Image
            className="max-[900px]:w-[90px] max-[450px]:w-[60px]"
            src={LOGO}
            alt="MJ OPAL Logo"
            width={110}
            height={130}
          />
          <h1 className="text-[50px] text-center max-[1200px]:text-[40px] max-[900px]:text-[25px] max-[450px]:text-[16px] max-[340px]:text-left">
            MJ OPAL
          </h1>
        </div>
      </div>

      {/* 
      <div className="absolute bottom-0 left-0 right-0">
        <Image
          src={FOOTER_RECTANGLE}
          alt="Footer Rectangle Image"
          width={1440}
          height={420}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 -z-10">
        <Image
          src={FOOTER_RECTANGLE_2}
          alt="Footer Rectangle 2 Image"
          width={1440}
          height={420}
        />
      </div> */}
    </footer>
  );
}
