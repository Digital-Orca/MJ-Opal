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
      y: 0,
      duration: 1,
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".heading-portfolio-cta",
        scrub: 1,
        start: "top 100%",
        end: "bottom 25%",
      },
    });
  });

  return (
    <section className="about-services_section py-40 relative flex items-center justify-center flex-col">
      <h1 className="heading-portfolio-cta opacity-0 -translate-y-[100px] text-dark_blue text-[60px] w-[925px] text-center mx-auto max-[1280px]:text-[50px] max-[980px]:text-[30px] max-[980px]:w-[700px] max-[768px]:text-[24px] max-[768px]:w-[500px] max-[525px]:text-[22px] max-[525px]:w-[300px] max-[350px]:w-[240px]">
        In this life, you don’t get what you deserve. Only what you strive for.
      </h1>

      <Link
        href={"/portfolio"}
        className="heading-portfolio-cta opacity-0 -translate-y-[100px] text-white text-2xl bg-dark_blue rounded-[20px] w-[240px] h-[75px] hover:bg-opacity-80 flex items-center justify-center mx-auto mt-12 max-[980px]:text-lg max-[980px]:w-[180px] max-[980px]:h-[55px] max-[525px]:text-base max-[350px]:text-sm max-[350px]:w-[160px]"
      >
        See Our Portfolio
      </Link>
    </section>
  );
}
