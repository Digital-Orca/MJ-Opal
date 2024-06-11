"use client";

import { testimonials_data } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import TESTIMONIALS_DIAMOND from "@/assets/testimonials_diamond.svg";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";
import { A11y, Autoplay, FreeMode } from "swiper/modules";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function Test() {
  useGSAP(() => {
    gsap.from(".testimonials", {
      y: -100,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".testimonials",
        start: "top center",
        end: "bottom center",
      },
    });
  });

  return (
    <div className="testimonials container mx-auto pt-[150px] max-[768px]:px-4">
      <Swiper
        modules={[FreeMode, Autoplay, A11y]}
        breakpoints={{
          279: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        grabCursor={true}
        effect="fade"
        autoplay={{
          disableOnInteraction: false,
          delay: 10000,
        }}
        className="!p-5 max-[768px]:!px-0"
      >
        {testimonials_data.map((o, idx) => (
          <SwiperSlide
            className="w-[500px] shadow-lg rounded-md overflow-hidden"
            key={`${idx + 1} - ${o.personName}`}
          >
            <div className="testimonials-background flex items-center justify-between">
              <h3 className="text-dark_blue text-[30px] max-[768px]:text-[22px]">
                {o.personName}
              </h3>

              <Image
                className="w-[75px] max-[768px]:w-[50px]"
                src={TESTIMONIALS_DIAMOND}
                alt="Testimonials Diamond Image"
                width={75}
                height={65}
              />
            </div>
            <div className="p-5 h-[235px] max-[1024px]:h-[285px] max-[767px]:h-[190px] max-[580px]:h-[230px] max-[470px]:h-[290px] max-[390px]:h-[330px] max-[368px]:h-[360px] max-[350px]:h-[415px] max-[300px]:min-h-[415px]">
              <p className="font-sans font-semibold text-[18px] text-dark_blue leading-8">
                {o.opinion}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
