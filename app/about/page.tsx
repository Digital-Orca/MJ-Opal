import Structure from "./Structure/Structure";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MJ Opal - About Page",
  description: `It all started when we gave E-commerce a shot and it all went wrong! Couple of years ago, we launched our E-commerce store. Despite our efforts, we didn't get the conversion rates of our dreams so we decided to quit.`,
  openGraph: {
    title: "MJ Opal - About Page",
    description:
      "It all started when we gave E-commerce a shot and it all went wrong! Couple of years ago, we launched our E-commerce store. Despite our efforts, we didn't get the conversion rates of our dreams so we decided to quit.",
    images: [
      "https://res.cloudinary.com/dxfphp6to/image/upload/v1716820512/logo_hjkili.png",
    ],
    siteName: "MJ Opal",
    url: "https://mjopal.com/",
    type: "website",
    emails: "info@mjopal.com",
  },
  twitter: {
    title: "MJ Opal - About Page",
    description:
      "It all started when we gave E-commerce a shot and it all went wrong! Couple of years ago, we launched our E-commerce store. Despite our efforts, we didn't get the conversion rates of our dreams so we decided to quit.",
    images: [
      "https://res.cloudinary.com/dxfphp6to/image/upload/v1716820512/logo_hjkili.png",
    ],
    card: "summary",
    creator: "@MohamedElSharqawy",
    site: "@MohamedElSharqawy",
  },
  keywords:
    "MJ Opal, mj opal, MJ Opal About, about, about page, mj about, about opal, opal about, about mj, about mj opal, about mjopal, mjopal about, MJOPAL, mjopal, MJOpal, opal, Opal, OPAL, OPal, Diamonds, Jewelleries, Agency, DIAMONDS, diamonds, diamond, DIAMOND, Diamond, AGENCY, Agencies, AGENCIES, Social Media, Marketing, Sales, SMMA, smma, Social Media Marketing Agency, Best SMMA, Best smma, Best Social Media Marketing Agency, Websites, Copywriting, Copy Writing, Copy writing, Graphic Design, UI UX, UI/UX, ui/ux, ui ux, uiux, UIUX, Editing, Film Editing, Consulting, Full-stack developers",
};

export default function About() {
  return (
    <main className="min-h-screen pt-[230px] max-[640px]:pt-[180px] max-[530px]:pt-[140px] max-[430px]:pt-[180px]">
      <Structure />
    </main>
  );
}
