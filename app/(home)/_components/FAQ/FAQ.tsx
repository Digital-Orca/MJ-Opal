"use client";

import { FAQS } from "@/constants";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import FAQ_DIAMOND from "@/assets/faq_diamond.svg";
import FAQ_DIAMOND_LIGHT from "@/assets/faq_diamond_light.svg";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  useGSAP(() => {
    gsap.to(".faq-fade-in", {
      opacity: 1,
      duration: 1.5,
      delay: 0.25,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".faq-fade-in",
        start: "top center",
      },
    });

    gsap.to(".faq-head", {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".faq-head",
        start: "top center",
      },
    });
  });

  return (
    <section className="relative bg-dark_blue text-white py-[40px] shadow-lg max-[880px]:h-[70vh] max-[440px]:h-[60vh] min-[1201px]:pl-[120px]">
      <h1 className="faq-fade-in opacity-0 text-[55px] mb-[30px] max-[1200px]:text-center max-[1200px]:mb-[50px]">
        FAQ
      </h1>

      <div className="max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:items-center space-y-5">
        {FAQS.map((faq, idx) => (
          <div
            key={faq.ques}
            className="faq-head opacity-0 -translate-x-full space-y-[15px] text-[#F5F8FA] ml-4 w-fit"
          >
            <h3
              onClick={() => {
                if (active === idx) {
                  setActive(null);
                } else {
                  setActive(idx);
                }
              }}
              className="relative w-fit text-[28px] cursor-pointer flex items-center gap-x-2 max-[880px]:text-[22px] max-[440px]:text-[14px]"
            >
              {/* Chevrons */}
              {idx === active ? <ChevronDown /> : <ChevronRight />}

              {faq.ques}

              {active === idx && (
                <span className="h-[2px] absolute -bottom-2 left-[42px] w-[calc(100%-42px)] bg-[#F5F8FA]"></span>
              )}
            </h3>
            <p
              style={{
                height: active == idx ? "105px" : "0",
                transitionDuration: active == idx ? "500ms" : "",
              }}
              className="font-sans font-semibold leading-7 max-w-[815px] h-0 overflow-hidden transition-all duration-500 ease-out pl-[42px] pr-[20px] max-[880px]:text-[14px] max-[880px]:max-w-[500px] max-[340px]:text-[12px]"
            >
              {faq.ans}
            </p>
          </div>
        ))}
      </div>

      <div className="max-[1200px]:hidden max-[1200px]:absolute">
        <div className="faq-fade-in opacity-0 absolute right-0 bottom-0">
          <Image
            src={FAQ_DIAMOND}
            alt="FAQ Section - Diamond Image"
            height={500}
            width={330}
          />
        </div>
        <div className="faq-fade-in opacity-0 absolute right-12 bottom-32">
          <Image
            src={FAQ_DIAMOND_LIGHT}
            alt="FAQ Section - Diamond Light"
            height={500}
            width={330}
          />
        </div>
      </div>
    </section>
  );
}
