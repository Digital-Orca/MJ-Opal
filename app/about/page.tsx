import Structure from "./Structure/Structure";

export const metadata = {
  title: "MJ Opal - About Page",
  description: `It all started when we gave E-commerce a shot and it all went wrong! Couple of years ago, we launched our E-commerce store. Despite our efforts, we didn't get the conversion rates of our dreams so we decided to quit.`,
};

export default function About() {
  return (
    <main className="min-h-screen pt-[230px] max-[640px]:pt-[180px] max-[530px]:pt-[140px] max-[430px]:pt-[180px]">
      <Structure />
    </main>
  );
}
