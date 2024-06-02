"use client";

import { FAQS } from "@/constants";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import FAQ_DIAMOND from "@/assets/faq_diamond.svg";
import FAQ_RECTANGLE from "@/assets/faq_rectangle.svg";
import Image from "next/image";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative bg-light_blue h-[625px] pl-[120px] text-white pt-[28px] faq-section shadow-lg">
      <h1 className="text-[55px] mb-[30px]">FAQ</h1>

      <div className="space-y-5">
        {FAQS.map((faq, idx) => (
          <div key={faq.ques} className="space-y-[15px] text-[#F5F8FA] ml-4">
            <h3
              onClick={() => {
                if (active === idx) {
                  setActive(null);
                } else {
                  setActive(idx);
                }
              }}
              className="relative w-fit text-[32px] cursor-pointer flex items-center gap-x-2"
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
                height: active == idx ? "72px" : "0",
                transitionDuration: active == idx ? "500ms" : "0ms",
              }}
              className="w-[815px] h-0 overflow-hidden transition-all duration-500 ease-out pl-[42px]"
            >
              {faq.ans}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute right-0 bottom-0">
        <Image
          src={FAQ_DIAMOND}
          alt="FAQ Section - Diamond Image"
          height={500}
          width={330}
        />
      </div>

      <div className="absolute top-[505px] -z-10">
        <Image
          src={FAQ_RECTANGLE}
          alt="FAQ Rectangle Image"
          width={1440}
          height={100}
        />
      </div>
    </section>
  );
}
