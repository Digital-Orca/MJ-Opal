import { Metadata } from "next";
import Structure from "./Structure/Structure";

export const metadata: Metadata = {
  title: "MJ Opal - Contact Page",
  description: `Get in touch with us through our contact page. Find our phone number (+961 81 66 77 45), email address (Info@mjopal.com), and physical address, or use the form to send us a message directly. We're here to assist you with any inquiries or support you need.`,
  openGraph: {
    title: "MJ Opal - Contact Page",
    description:
      "Get in touch with us through our contact page. Find our phone number (+961 81 66 77 45), email address (Info@mjopal.com), and physical address, or use the form to send us a message directly. We're here to assist you with any inquiries or support you need.",
    images: [
      "https://res.cloudinary.com/dxfphp6to/image/upload/v1716820512/logo_hjkili.png",
    ],
    siteName: "MJ Opal",
    url: "https://mjopal.com/",
    type: "website",
    emails: "info@mjopal.com",
  },
  twitter: {
    title: "MJ Opal - Contact Page",
    description:
      "Get in touch with us through our contact page. Find our phone number (+961 81 66 77 45), email address (Info@mjopal.com), and physical address, or use the form to send us a message directly. We're here to assist you with any inquiries or support you need.",
    images: [
      "https://res.cloudinary.com/dxfphp6to/image/upload/v1716820512/logo_hjkili.png",
    ],
    card: "summary",
    creator: "@MohamedElSharqawy",
    site: "@MohamedElSharqawy",
  },
  keywords:
    "MJ Opal, mj opal, MJ Opal Contact, contact, contact page, mj contact, contact opal, opal contact, contact mj, contact mj opal, contact mjopal, mjopal contact, MJOPAL, mjopal, MJOpal, opal, Opal, OPAL, OPal, Diamonds, Jewelleries, Agency, DIAMONDS, diamonds, diamond, DIAMOND, Diamond, AGENCY, Agencies, AGENCIES, Social Media, Marketing, Sales, SMMA, smma, Social Media Marketing Agency, Best SMMA, Best smma, Best Social Media Marketing Agency, Websites, Copywriting, Copy Writing, Copy writing, Graphic Design, UI UX, UI/UX, ui/ux, ui ux, uiux, UIUX, Editing, Film Editing, Consulting, Full-stack developers",
};

export default function Contact() {
  return (
    <main className="flex items-center justify-center pt-[180px] max-[1024px]:flex-col-reverse max-[1024px]:pt-[80px] max-[530px]:pt-[0px]">
      <Structure />
    </main>
  );
}
