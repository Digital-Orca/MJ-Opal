"use client";

import Image from "next/image";
import NEWSLETTER_IMAGE from "@/assets/newsletter.svg";
import useSubscribeForNewsletters from "@/hooks/useSubscribeForNewsletter";
import { FormEvent } from "react";

export default function Newsletter() {
  const { email, setEmail, isLoading, sendMail } = useSubscribeForNewsletters();

  return (
    <section className="container flex items-center justify-center px-5 gap-40 py-[130px] max-[1024px]:pb-[60px] max-[820px]:pb-[0px] max-[768px]:flex-col max-[768px]:gap-20 max-[768px]:pt-[100px] max-[500px]:gap-10">
      <div className="w-1/2 max-[768px]:w-[55%] max-[500px]:w-[80%]">
        <Image
          src={NEWSLETTER_IMAGE}
          alt="Newsletter Image"
          width={530}
          height={340}
        />
      </div>

      <div className="w-1/2 max-[768px]:w-[85%]">
        <h3 className="text-[35px] text-dark_blue mb-1 max-[768px]:text-[25px] max-[768px]:text-center">
          Newsletter
        </h3>
        <p className="text-[#565656] opacity-80 max-[768px]:text-[14px] max-[768px]:text-center">
          Subscribe to our newsletter and stay updated
        </p>
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => sendMail(e)}
          className="max-[768px]:w-[65%] max-[768px]:mx-auto max-[500px]:w-[90%]"
        >
          <input
            type="email"
            className="text-dark_blue bg-body border-2 max-w-[375px] border-dark_blue rounded-lg p-2 my-10 w-full focus:border-blue-800 transition placeholder:max-[768px]:text-[14px] max-[768px]:my-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
          />
          <button className="text-white bg-dark_blue w-[140px] h-[50px] rounded-[15px] block hover:bg-opacity-85 transition-all duration-300 max-[768px]:w-[110px] max-[768px]:h-[35px] max-[768px]:text-[14px]">
            {isLoading ? "Loading..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
