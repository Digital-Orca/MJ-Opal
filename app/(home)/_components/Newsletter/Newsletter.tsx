"use client";

import Image from "next/image";
import NEWSLETTER_IMAGE from "@/assets/newsletter.svg";
import useSubscribeForNewsletters from "@/hooks/useSubscribeForNewsletter";
import { FormEvent } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const { email, setEmail, isLoading, sendMail } = useSubscribeForNewsletters();

  useGSAP(() => {
    gsap.fromTo(
      ".news-img",
      {
        y: -100,
        opacity: 0,
        scale: 0,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".news-img",
          start: "top center",
          end: "bottom center",
        },
      }
    );

    gsap.fromTo(
      ".news-text",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".news-text",
          start: "top center",
          end: "bottom center",
        },
      }
    );
  });

  return (
    <section className="container flex items-center justify-center px-5 gap-40 py-[225px] max-[768px]:pt-[150px] max-[768px]:pb-[0px] max-[768px]:flex-col max-[768px]:gap-20 max-[500px]:gap-10">
      <div className="news-img w-1/2 max-[768px]:w-[55%] max-[500px]:w-[80%]">
        <Image
          src={NEWSLETTER_IMAGE}
          alt="Newsletter Image"
          width={530}
          height={340}
        />
      </div>

      <div className="w-1/2 max-[768px]:w-[85%]">
        <h3 className="news-text text-[35px] text-dark_blue mb-1 max-[768px]:text-[25px] max-[768px]:text-center">
          Newsletter
        </h3>
        <p className="news-text font-sans font-semibold text-[#565656] text-[18px] opacity-80 max-[500px]:text-[16px] max-[768px]:text-center">
          Subscribe to our newsletter and stay updated
        </p>
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => sendMail(e)}
          className="max-[768px]:w-[65%] max-[768px]:mx-auto max-[500px]:w-[90%] mt-5"
        >
          <input
            type="email"
            className="news-text font-sans font-semibold text-dark_blue bg-white border-2 max-w-[375px] border-dark_blue rounded-lg p-2 mb-8 w-full focus:border-blue-800 transition placeholder:max-[768px]:text-[14px] max-[768px]:my-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
          />
          <button className="news-text text-white bg-dark_blue w-[140px] h-[50px] rounded-[15px] block hover:bg-opacity-85 transition-all duration-300 max-[768px]:mx-auto max-[768px]:w-[110px] max-[768px]:h-[50px] max-[768px]:text-[14px]">
            {isLoading ? "Loading..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
