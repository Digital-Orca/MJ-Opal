import DiamondCanvas from "@/components/DiamondCanvas";

export default function About() {
  return (
    <section className="relative h-screen flex items-center justify-center flex-col">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 -z-10">
        <DiamondCanvas />
      </div>
      <h1 className="!text-dark_blue text-[60px] w-[925px] text-center mx-auto mt-32">
        IN THIS LIFE, YOU DON’T GET WHAT YOU DESERVE. ONLY WHAT YOU
      </h1>
      <button className="text-white text-2xl bg-dark_blue rounded-[20px] w-[240px] h-[75px] hover:bg-opacity-80 transition-all duration-300 block mx-auto mt-[40px]">
        See All Packages
      </button>
    </section>
  );
}
