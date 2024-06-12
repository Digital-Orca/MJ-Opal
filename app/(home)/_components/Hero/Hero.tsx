"use client";

import Image from "next/image";
import HERO_IMAGE from "@/assets/hero.png";
import HERO_DIAMOND from "@/assets/hero_diamond.svg";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  useGSAP(() => {
    if (window.innerWidth >= 841) {
      //* Greater than or equal 841
      gsap.fromTo(
        ".hero-img",
        {
          x: "100%",
          opacity: 0,
          rotateZ: 45,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 1.25,
          rotateZ: 0,
          ease: "power2.inOut",
        }
      );

      gsap.fromTo(
        ".heading-hero",
        {
          x: "-100%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.75,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".paragraph-hero",
        {
          x: "-100%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 1,
          stagger: 0.25,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".link-hero",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          delay: 1.75,
          ease: "power2.out",
        }
      );
    } else if (window.innerWidth <= 840 && window.innerWidth >= 700) {
      //* Greater than 700 and less than or equal 840
      gsap.fromTo(
        ".hero-diamond",
        {
          opacity: 0,
          y: -100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.75,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".heading-hero",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          delay: 1,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".paragraph-hero-1",
        {
          x: "-100%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 1.25,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".paragraph-hero-2",
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 1.25,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".link-hero",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          delay: 1.25,
          ease: "power2.out",
        }
      );
    } else {
      //* Less Than 700
      gsap.fromTo(
        ".hero-diamond",
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.75,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".heading-hero",
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 1,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".paragraph-hero",
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 1.25,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".link-hero",
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 1.5,
          ease: "power2.out",
        }
      );
    }
  });

  return (
    <section className="hero-section relative min-[841px]:h-[calc(100vh)] py-[280px] flex items-center max-[840px]:flex-col max-[840px]:justify-center min-[841px]:pl-[100px] max-[840px]:pt-[120px] max-[840px]:pb-[120px] max-[500px]:pb-[90px]">
      {/* Medium and Small Screens */}
      <div className="hero-diamond hidden max-[840px]:block">
        <Image
          src={HERO_DIAMOND}
          alt={"Hero Section Image"}
          width={450}
          height={400}
          className="w-[500px] object-cover"
        />
      </div>

      <div className="text-[#565656] space-y-4 max-[840px]:flex max-[840px]:flex-col max-[840px]:items-center max-[980px]:px-4 max-[840px]:-mt-28 max-[400px]:-mt-20">
        <h2 className="heading-hero text-[65px] max-[1140px]:text-[50px] max-[980px]:text-[40px] max-[500px]:text-[30px] max-[340px]:text-[22px]">
          Grow, win and shine
        </h2>

        <div className="min-[841px]:space-y-4 max-[840px]:flex max-[840px]:items-center max-[840px]:gap-4 max-[700px]:flex-col">
          <p className="paragraph-hero paragraph-hero-1 font-sans font-semibold max-w-[600px] text-[20px] leading-8 max-[840px]:text-center max-[1050px]:max-w-[450px] max-[840px]:text-[18px] max-[500px]:text-[16px] max-[500px]:max-w-[400px] max-[1050px]:mx-auto">
            Like you, we&apos;ve faced challenges on the way. MJ Opal was born
            as a result of some setbacks despite our best efforts.
          </p>

          <p className="paragraph-hero paragraph-hero-2 font-sans font-semibold max-w-[500px] text-[20px] leading-8 max-[840px]:text-center max-[1050px]:max-w-[450px] max-[840px]:text-[18px] max-[500px]:text-[16px] max-[500px]:max-w-[400px] max-[1050px]:mx-auto">
            Determined to turn our experiences to serve your business&apos;s
            needs with our team to make you shine.
          </p>
        </div>

        <Link
          href={"/portfolio"}
          className="link-hero !mt-8 max-[840px]:!mt-10 block w-fit text-white px-9 py-[14px] rounded-md bg-dark_blue hover:bg-opacity-85 max-[500px]:text-[14px] max-[500px]:px-6"
        >
          Learn More!
        </Link>
      </div>

      {/* Big Screens */}
      <div className="hero-img max-[840px]:hidden absolute top-[250px] right-0 max-[1200px]:top-[300px] max-[950px]:top-[350px]">
        <Image
          src={HERO_IMAGE}
          alt={"Hero Section Image"}
          width={450}
          height={400}
          className="max-[1200px]:w-[350px] max-[950px]:w-[250px]"
        />
      </div>
    </section>
  );
}
