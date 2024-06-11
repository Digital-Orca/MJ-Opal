"use client";

import Image from "next/image";
import HERO_IMAGE from "@/assets/hero.png";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

export default function Hero() {
  useGSAP(() => {
    gsap.to(".heading-hero", {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(".paragraph-hero", {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(".hero-img", {
      x: 0,
      opacity: 1,
      duration: 1,
      rotateZ: 0,
      ease: "power2.inOut",
    });

    gsap.to(".link-hero", {
      opacity: 1,
      delay: 1,
      ease: "power2.out",
    });
  });

  return (
    <section className="hero-section relative min-[841px]:h-[calc(100vh)] py-[280px] flex items-center max-[840px]:justify-center min-[841px]:pl-[100px] max-[840px]:pt-[370px]">
      <div className="hero-content text-[#565656] space-y-4 max-[840px]:flex max-[840px]:flex-col max-[840px]:items-center max-[980px]:px-4">
        <h2 className="heading-hero -translate-x-full opacity-0 text-[65px] max-[1140px]:text-[50px] max-[980px]:text-[40px] max-[500px]:text-[30px] max-[340px]:text-[22px]">
          Grow, win and shine
        </h2>

        <p className="paragraph-hero -translate-x-full opacity-0 font-sans font-semibold max-w-[600px] text-[20px] max-[840px]:text-center max-[1050px]:max-w-[450px] leading-8 max-[500px]:text-[16px] max-[500px]:max-w-[400px] max-[1050px]:mx-auto">
          Like you, we&apos;ve faced challenges on the way. MJ Opal was born as
          a result of some setbacks despite our best efforts.
        </p>

        <p className="paragraph-hero -translate-x-full opacity-0 font-sans font-semibold max-w-[500px] text-[20px] max-[840px]:text-center max-[1050px]:max-w-[450px] leading-8 max-[500px]:text-[16px] max-[500px]:max-w-[350px] max-[1050px]:mx-auto">
          Determined to turn our experiences to serve your business&apos;s needs
          with our team to make you shine.
        </p>

        <Link
          href={"/packages"}
          className="link-hero !mt-8 opacity-0 font-sans font-semibold block w-fit text-white px-9 py-[14px] rounded-md bg-dark_blue transition duration-500 ease-in-out hover:bg-opacity-85 max-[500px]:text-[14px] max-[500px]:px-6"
        >
          Let&apos;s Go
        </Link>
      </div>

      <div className="hero-img opacity-0 max-[840px]:hidden absolute top-[250px] right-0 max-[1200px]:top-[300px] max-[950px]:top-[350px]">
        <Image
          src={HERO_IMAGE}
          alt={"Hero Section Image"}
          width={450}
          height={400}
          className="max-[1200px]:w-[350px] max-[950px]:w-[250px]"
        />
      </div>
    </section>
  );
}
