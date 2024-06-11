"use client";

import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    gsap.to(".heading-portfolio-cta", {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".heading-portfolio-cta",
      },
    });
    gsap.to(".link-portfolio-cta", {
      opacity: 1,
      duration: 0.75,
      delay: 0.25,
      ease: "bounce.inOut",
      scrollTrigger: {
        trigger: ".link-portfolio-cta",
      },
    });
  });

  return (
    <section className="about-services_section py-64 relative flex items-center justify-center flex-col">
      <h1 className="heading-portfolio-cta opacity-0 text-dark_blue text-[60px] w-[925px] text-center mx-auto max-[1280px]:text-[50px] max-[980px]:text-[30px] max-[980px]:w-[700px] max-[768px]:text-[24px] max-[768px]:w-[500px] max-[525px]:text-[22px] max-[525px]:w-[300px] max-[350px]:w-[240px]">
        In this life, you don’t get what you deserve. Only what you strive for.
      </h1>

      <Link
        href={"/portfolio"}
        className="link-portfolio-cta opacity-0 text-white text-2xl bg-dark_blue rounded-[20px] w-[240px] h-[75px] hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center mx-auto mt-[40px] max-[980px]:text-lg max-[980px]:w-[180px] max-[980px]:h-[55px] max-[525px]:text-base max-[350px]:text-sm max-[350px]:w-[160px]"
      >
        See Our Portfolio
      </Link>
    </section>
  );
}
