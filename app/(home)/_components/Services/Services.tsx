"use client";

import {
  services_we_provide_center,
  services_we_provide_left,
  services_we_provide_right,
} from "@/constants";
import "./services.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  useGSAP(() => {    
    if (window.innerWidth >= 941) {
      gsap.fromTo(
        ".center-services",
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          delay: 1,
          ease: "power3.inOut",
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".center-services",
            start: "top 85%",
            end: "bottom 15%",
            scrub: 1,
            snap: {
              duration: { min: 1.5, max: 3 },
              delay: 0.5,
            },
          },
        }
      );
    } else {
      gsap.fromTo(
        ".center-services-sm",
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          delay: 1,
          ease: "power3.inOut",
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".center-services-sm",
            start: "top 80%",
            end: "bottom 25%",
            scrub: 1,
            snap: {
              duration: { min: 1.5, max: 3 },
              delay: 0.5,
            },
          },
        }
      );
    }
  });

  return (
    <section className="services_we_provide flex items-center justify-center w-full max-[1368px]:!aspect-[1860/1060] max-[1368px]:!aspect-[2260/1460] max-[940px]:h-[70vh]">
      <div className="flex items-center justify-between max-[940px]:justify-center w-full text-white px-10">
        <div className="max-[940px]:hidden flex flex-col gap-y-8">
          {services_we_provide_left.map((service) => (
            <span className="center-services uppercase" key={service}>
              {service}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-y-8 max-[940px]:text-[12px] max-[400px]:text-[11px]">
          {services_we_provide_center.map((service, idx) => (
            <span
              style={{
                fontSize: `${
                  idx == 0
                    ? "1.25em"
                    : idx == 1
                    ? "1.5625em"
                    : idx == 2
                    ? "1.875em"
                    : idx == 3
                    ? "2.5em"
                    : idx == 4
                    ? "1.875em"
                    : idx == 5
                    ? "1.5625em"
                    : "1.25em"
                }`,
                opacity: `${
                  idx == 0
                    ? "60%"
                    : idx == 1
                    ? "80%"
                    : idx == 2
                    ? "90%"
                    : idx == 3
                    ? "100%"
                    : idx == 4
                    ? "90%"
                    : idx == 5
                    ? "80%"
                    : "60%"
                }`,
                color: `${idx == 3 && "#BDE2F3"}`,
              }}
              className="center-services center-services-sm uppercase text-center mx-auto w-fit"
              key={service}
            >
              {service}
            </span>
          ))}
        </div>

        <div className="max-[940px]:hidden flex flex-col gap-y-8">
          {services_we_provide_right.map((service) => (
            <span
              className="center-services uppercase text-right"
              key={service}
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
