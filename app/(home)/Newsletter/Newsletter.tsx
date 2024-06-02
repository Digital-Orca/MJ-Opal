import Image from "next/image";
import NEWSLETTER_IMAGE from "@/assets/newsletter.svg";

export default function Newsletter() {
  return (
    <section className="flex items-center justify-center gap-40 py-[130px]">
      <div>
        <Image
          src={NEWSLETTER_IMAGE}
          alt="Newsletter Image"
          width={530}
          height={340}
        />
      </div>

      <div>
        <h3 className="text-[35px] text-dark_blue mb-1">Newsletter</h3>
        <p className="text-[#565656] opacity-80">
          Subscribe to our newsletter and stay updated
        </p>
        <div>
          <input
            className="bg-body border-2 border-dark_blue rounded-lg p-2 my-10 w-full"
            type="email"
            placeholder="Enter your email..."
          />
        </div>
        <button className="text-white bg-dark_blue w-[140px] h-[50px] rounded-[15px] block mx-auto hover:bg-opacity-85 transition-all duration-300">
          Subscribe
        </button>
      </div>
    </section>
  );
}
