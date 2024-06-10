"use client";

import { testimonials_data } from "@/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import TESTIMONIALS_DIAMOND from "@/assets/testimonials_diamond.svg";
import "./testimonials.css";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (active < 5) {
        setActive((prev) => prev + 1);
      } else {
        setActive(0);
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, [active]);

  return (
    <section className="py-[150px]">
      {/* Section Title */}
      <h1 className="relative text-dark_blue text-[55px] mb-20 max-[600px]:text-[35px] w-fit mx-auto max-[600px]:w-fit max-[600px]:mx-auto">
        Testimonials
        <div className="absolute w-[105px] h-[105px] rounded-full border-[12px] border-light_blue -top-7 min-[601px]:left-[-58px] max-[600px]:-left-[65px] -z-10 max-[380px]:hidden"></div>
      </h1>

      <div className="relative w-[500px] max-[768px]:w-max mx-auto">
        {/* Big Screens */}
        <div className="w-full mx-auto overflow-hidden">
          <div
            style={{
              translate: `-${active * 540}px`,
            }}
            className="flex items-center gap-[40px] pb-4 transition-all duration-500 ease-in-out max-[768px]:hidden"
          >
            {testimonials_data.map((o, idx) => (
              <div
                className="min-w-[500px] w-[500px] shadow-lg rounded-md overflow-hidden"
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
                <div className="p-5 h-[235px]">
                  <p className="font-sans font-semibold text-[18px] text-dark_blue leading-8 max-[768px]:text-[14px]">
                    {o.opinion}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Medium Screens */}
          <div
            style={{
              translate: `-${active * 260}px`,
            }}
            className="hidden max-[767px]:flex items-center gap-[20px] pb-4 transition-all duration-500 ease-in-out w-[240px]"
          >
            {testimonials_data.map((o, idx) => (
              <div
                className="min-w-[240px] w-[240px] shadow-lg rounded-md overflow-hidden"
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
                <div className="p-5 h-[360px]">
                  <p className="font-sans font-semibold text-[18px] text-dark_blue leading-8 max-[768px]:text-[14px]">
                    {o.opinion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bars */}
        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-x-3 w-fit mx-auto max-[380px]:-bottom-20">
          <div
            onClick={() => setActive(0)}
            className="bg-light_blue w-[46px] h-[13px] rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-dark_blue max-[768px]:w-[30px]"
          />
          <div
            onClick={() => setActive(1)}
            className="bg-light_blue w-[46px] h-[13px] rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-dark_blue max-[768px]:w-[30px]"
          />

          <div
            onClick={() => setActive(2)}
            className="bg-light_blue w-[46px] h-[13px] rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-dark_blue max-[768px]:w-[30px]"
          />

          <div
            style={{
              left: `${active * 58}px`,
            }}
            className="hidden min-[768px]:block absolute bg-dark_blue w-[46px] h-[13px] rounded-lg transition-all duration-300 ease-in-out"
          />

          <div
            style={{
              left: `${active * 42}px`,
            }}
            className="hidden max-[768px]:block absolute bg-dark_blue w-[30px] h-[13px] rounded-lg transition-all duration-300 ease-in-out"
          />

          <div
            onClick={() => setActive(3)}
            className="bg-light_blue w-[46px] h-[13px] rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-dark_blue max-[768px]:w-[30px]"
          />

          <div
            onClick={() => setActive(4)}
            className="bg-light_blue w-[46px] h-[13px] rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-dark_blue max-[768px]:w-[30px]"
          />
          <div
            onClick={() => setActive(5)}
            className="bg-light_blue w-[46px] h-[13px] rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-dark_blue max-[768px]:w-[30px]"
          />
        </div>

        {/* Previous and Next Buttons */}
        <button
          onClick={() =>
            setActive((prev) => {
              return prev > 0 ? prev - 1 : 0;
            })
          }
          disabled={active == 0}
          className="absolute -left-[80px] top-1/2 -translate-y-1/2 bg-light_blue rounded-full p-1 max-[768px]:-left-[40px] max-[380px]:top-[calc(100%+24px)] max-[380px]:left-[35%] max-[380px]:-translate-[35%] disabled:opacity-50"
        >
          <ChevronLeft
            size={40}
            className="text-dark_blue max-[768px]:!w-[25px] max-[768px]:!h-[25px]"
          />
        </button>
        <button
          onClick={() => {
            setActive((prev) => {
              return prev < 5 ? prev + 1 : 5;
            });
          }}
          className="absolute -right-[80px] top-1/2 -translate-y-1/2 bg-light_blue rounded-full p-1 max-[768px]:-right-[45px] max-[380px]:top-[calc(100%+24px)] max-[380px]:right-[35%] max-[380px]:translate-[35%] disabled:opacity-50"
          disabled={active == 5}
        >
          <ChevronRight
            size={40}
            className="text-dark_blue max-[768px]:!w-[25px] max-[768px]:!h-[25px]"
          />
        </button>
      </div>
    </section>
  );
}
