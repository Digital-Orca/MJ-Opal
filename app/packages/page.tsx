import { Metadata } from "next";
import FAQ from "../(home)/_components/FAQ/FAQ";
import Newsletter from "../(home)/_components/Newsletter/Newsletter";
import Structure from "./Structure/Structure";

export const metadata: Metadata = {
  title: "MJ Opal - Packages Page",
  description: `Discover our range of plans designed to meet your needs. For detailed information and personalized recommendations, please visit our packages page to get in touch with us directly.`,
  openGraph: {
    title: "MJ Opal - Packages Page",
    description:
      "Discover our range of plans designed to meet your needs. For detailed information and personalized recommendations, please visit our packages page to get in touch with us directly.",
    images: [
      "https://res.cloudinary.com/dxfphp6to/image/upload/v1716820512/logo_hjkili.png",
    ],
    siteName: "MJ Opal",
    url: "https://mjopal.com/",
    type: "website",
    emails: "info@mjopal.com",
  },
  twitter: {
    title: "MJ Opal - Packages Page",
    description:
      "Discover our range of plans designed to meet your needs. For detailed information and personalized recommendations, please visit our packages page to get in touch with us directly.",
    images: [
      "https://res.cloudinary.com/dxfphp6to/image/upload/v1716820512/logo_hjkili.png",
    ],
    card: "summary",
    creator: "@MohamedElSharqawy",
    site: "@MohamedElSharqawy",
  },
  keywords:
    "MJ Opal, mj opal, MJ Opal Packages, plans, mjopal plans, mj plans, opal plans, mj opal plans, packages, packages page, mj packages, packages opal, opal packages, packages mj, packages mj opal, packages mjopal, mjopal packages, MJOPAL, mjopal, MJOpal, opal, Opal, OPAL, OPal, Diamonds, Jewelleries, Agency, DIAMONDS, diamonds, diamond, DIAMOND, Diamond, AGENCY, Agencies, AGENCIES, Social Media, Marketing, Sales, SMMA, smma, Social Media Marketing Agency, Best SMMA, Best smma, Best Social Media Marketing Agency, Websites, Copywriting, Copy Writing, Copy writing, Graphic Design, UI UX, UI/UX, ui/ux, ui ux, uiux, UIUX, Editing, Film Editing, Consulting, Full-stack developers",
};

export default function Packages() {
  return (
    <main className="min-h-screen">
      <Structure />
      <FAQ />
      <Newsletter />
    </main>
  );
}
