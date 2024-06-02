import { testimonials_data } from "@/constants";
import Image from "next/image";
import TESTIMONIALS_DIAMOND from "@/assets/testimonials_diamond.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./testimonials.css";

export default function Testimonials() {
  return (
    <section className="h-screen pt-[150px] pl-[130px]">
      {/* Section Title */}
      <h1 className="relative text-dark_blue text-[55px] mb-[50px]">
        Testimonials{" "}
        <div className="absolute w-[105px] h-[105px] rounded-full border-[12px] border-light_blue -top-7 -left-12 -z-10"></div>
      </h1>

      <div className="relative flex items-center gap-[80px]">
        {testimonials_data.map((o, idx) => (
          <div
            className="w-[500px] shadow-lg rounded-md overflow-hidden"
            key={`${idx + 1} - ${o.personName}`}
          >
            <div className="testimonials-background flex items-center justify-between">
              <h3 className="text-dark_blue text-[30px]">{o.personName}</h3>
              <Image
                src={TESTIMONIALS_DIAMOND}
                alt="Testimonials Diamond Image"
                width={75}
                height={65}
              />
            </div>
            <div className="p-5">
              <p className="line-clamp-3 text-[18px] text-dark_blue leading-8">
                {o.opinion}
              </p>
            </div>
          </div>
        ))}

        {/* Next and Previous Buttons */}
        <button className="absolute -left-[85px] top-1/2 -translate-y-1/2 bg-light_blue rounded-full p-1">
          <ChevronLeft size={40} className="text-dark_blue" />
        </button>
        <button className="absolute right-[50px] top-1/2 -translate-y-1/2 bg-light_blue rounded-full p-1">
          <ChevronRight size={40} className="text-dark_blue" />
        </button>
      </div>
    </section>
  );
}
