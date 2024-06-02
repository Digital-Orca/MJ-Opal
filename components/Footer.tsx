import FOOTER_RECTANGLE from "@/assets/footer_rectangle.svg";
import FOOTER_RECTANGLE_2 from "@/assets/footer_rectangle_2.svg";
import Image from "next/image";
import FACEBOOK from "@/assets/facebook.svg";
import INSTAGRAM from "@/assets/instagram.svg";
import TWITTER from "@/assets/twitter.svg";
import LOGO from "@/assets/logo.svg";

export default function Footer() {
  return (
    <footer className="relative container h-[460px] pt-[200px]">
      <div className="relative grid grid-cols-5 text-white z-10">
        <div className="col-span-2 flex flex-col items-end">
          <h2 className="text-[35px] self-start w-3/4 ml-auto">Newsletter</h2>

          <div className="relative flex items-center w-3/4 mt-2 mb-5">
            <input
              placeholder="Enter your email..."
              className="pl-4 bg-body rounded-[15px] w-full h-[55px]"
            />
            <button className="absolute top-0 right-0 h-[55px] px-5 bg-light_blue text-dark_blue border border-dark_blue text-[20px] rounded-[15px] transition-all duration-300 ease-out hover:bg-opacity-75">
              Subscribe
            </button>
          </div>

          <ul className="flex items-center gap-x-4 self-start w-3/4 ml-auto">
            <li className="cursor-pointer transition-all duration-300 ease-out hover:opacity-70">
              <Image
                className="w-[25px] h-[25px]"
                src={FACEBOOK}
                alt="Facebook Logo"
                width={25}
                height={25}
              />
            </li>
            <li className="cursor-pointer transition-all duration-300 ease-out hover:opacity-70">
              <Image
                className="w-[25px] h-[25px]"
                src={INSTAGRAM}
                alt="Instagram Logo"
                width={25}
                height={25}
              />
            </li>
            <li className="cursor-pointer transition-all duration-300 ease-out hover:opacity-70">
              <Image
                className="w-[25px] h-[25px]"
                src={TWITTER}
                alt="Twitter Logo"
                width={25}
                height={25}
              />
            </li>
          </ul>
        </div>

        <div className="col-span-2 flex gap-x-16 justify-center mt-10">
          <ul className="space-y-4">
            <li className="text-[18px]">Home</li>
            <li className="text-[18px]">Plans</li>
            <li className="text-[18px]">Contact</li>
          </ul>
          <ul className="space-y-4">
            <li className="text-[18px]">Gallery</li>
            <li className="text-[18px]">About us</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Image src={LOGO} alt="MJ OPAL Logo" width={110} height={130} />
          <h1 className="text-[50px] text-center">MJ OPAL</h1>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <Image
          src={FOOTER_RECTANGLE}
          alt="Footer Rectangle Image"
          width={1440}
          height={420}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 -z-10">
        <Image
          src={FOOTER_RECTANGLE_2}
          alt="Footer Rectangle 2 Image"
          width={1440}
          height={420}
        />
      </div>
    </footer>
  );
}
