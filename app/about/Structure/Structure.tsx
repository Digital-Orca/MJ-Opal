"use client";

import Image from "next/image";
import LOGO from "@/assets/logo.svg";
import ABOUT from "@/assets/about.svg";
import ABOUT_2 from "@/assets/about-2.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Structure() {
  useGSAP(() => {
    gsap.fromTo(
      ".about-headings",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.inOut",
      }
    );

    gsap.fromTo(
      ".about-text-1",
      {
        opacity: 0,
        x: "100%",
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".about-text-1",
        },
      }
    );

    gsap.fromTo(
      ".about-text-2",
      {
        opacity: 0,
        x: "-100%",
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".about-text-2",
        },
      }
    );

    gsap.fromTo(
      ".about-image-1",
      {
        opacity: 0,
        x: "-100%",
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".about-image-1",
        },
      }
    );

    gsap.fromTo(
      ".about-image-2",
      {
        opacity: 0,
        x: "100%",
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".about-image-2",
        },
      }
    );
  });

  return (
    <>
      <div className="about-headings mb-16">
        <h1 className="bg-gradient-to-br from-[#154C79] to-[#56b3ff] flex items-center justify-center text-transparent bg-clip-text text-[60px] max-[1024px]:text-[50px]">
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

        <p className="font-sans font-semibold text-[22px] px-4 max-w-[1400px] text-[#565656] w-full leading-8 mx-auto text-center mt-6 max-[1024px]:text-[20px] max-[450px]:text-[16px]">
          It all started when we gave E-commerce a shot and it all went wrong!
          Couple of years ago, we launched our E-commerce store. Despite our
          efforts, we didn&apos;t get the conversion rates of our dreams so we
          decided to quit.
        </p>
      </div>

      <div className="px-[100px] max-[1024px]:px-[30px] max-[768px]:px-[20px] text-[#565656]">
        <div className="flex items-center justify-between max-[768px]:flex-col">
          <div className="about-image-1 w-[45%] max-[768px]:w-full">
            <Image
              className="w-full"
              src={ABOUT}
              alt="About Section Image-1"
              width={400}
              height={400}
            />
          </div>

          <div className="about-text-1 w-[50%] space-y-5 max-[768px]:w-full">
            <h3 className="max-w-[600px] max-[768px]:max-w-max max-[768px]:mx-auto text-[28px] max-[1024px]:text-[18px] leading-8 max-[768px]:mt-4 max-[768px]:text-center max-[450px]:text-[16px]">
              You would think that we just left E-commerce and went to a 9-5 job
              right?
            </h3>

            <p className="font-sans font-semibold leading-9 text-[18px] max-[1140px]:text-[16px] max-[1140px]:leading-8 max-[900px]:leading-7 max-w-[600px] max-[768px]:max-w-max max-[450px]:leading-[26px] max-[450px]:text-[15px] max-[768px]:text-center">
              But no, we invested in our efforts and time to discover what we
              did wrong. We learnt from our mistakes and we decided to help
              businesses of any level to avoid these mistakes with the help of
              our skilled team.
            </p>
          </div>
        </div>
      </div>

      <div className="px-[100px] max-[1024px]:px-[30px] max-[768px]:px-[20px] text-[#565656] mt-12 flex items-center justify-between max-[768px]:flex-col-reverse">
        <div className="w-[50%] space-y-3 max-[768px]:w-full">
          <p className="about-text-2 font-sans font-semibold w-full leading-9 text-[20px] max-[1140px]:text-[18px] max-[1140px]:leading-8 max-[900px]:text-[16px] max-[900px]:leading-7 max-[450px]:text-[15px] max-[450px]:leading-[26px] max-[768px]:mt-6 max-[768px]:text-center">
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
        </div>

        <div className="about-image-2 w-[45%] max-[768px]:w-full">
          <Image
            className="w-[80%] ml-auto object-cover rounded-md max-[1250px]:w-full aspect-square"
            src={ABOUT_2}
            alt="About Section Image-2"
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  );
}
