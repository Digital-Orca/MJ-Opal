import AboutPackages from "./_components/AboutPackages/AboutPackages";
import FAQ from "./_components/FAQ/FAQ";
import Services from "./_components/Services/Services";
import Newsletter from "./_components/Newsletter/Newsletter";
import Testimonials from "./_components/Testimonials/Testimonials";
import Hero from "./_components/Hero/Hero";
import { Metadata } from "next";
import Test from "./_components/Testimonials/Test";

export const metadata: Metadata = {
  title: "MJ Opal - Home Page",
  description: `Grow, win and shine | Like you, we've faced challenges on the way. | MJ Opal was born as a result of some setbacks despite our best efforts. | Determined to turn our experiences to serve your business's needs with our team to make you shine.`,
  openGraph: {
    title: "MJ Opal - Home Page",
    description: `Grow, win and shine | Like you, we've faced challenges on the way. | MJ Opal was born as a result of some setbacks despite our best efforts. | Determined to turn our experiences to serve your business's needs with our team to make you shine.`,
    images: [
      "https://res.cloudinary.com/dxfphp6to/image/upload/v1716820512/logo_hjkili.png",
    ],
    siteName: "MJ Opal",
    url: "https://mjopal.com/",
    type: "website",
    emails: "info@mjopal.com",
  },
  twitter: {
    title: "MJ Opal - Home Page",
    description: `Grow, win and shine | Like you, we've faced challenges on the way. | MJ Opal was born as a result of some setbacks despite our best efforts. | Determined to turn our experiences to serve your business's needs with our team to make you shine.`,
    images: [
      "https://res.cloudinary.com/dxfphp6to/image/upload/v1716820512/logo_hjkili.png",
    ],
    card: "summary",
    creator: "@MohamedElSharqawy",
    site: "@MohamedElSharqawy",
  },
  keywords:
    "MJ Opal, mj opal, MJ Opal Home, plans, mjopal plans, mj plans, opal plans, mj opal plans, home, Home Page, mj home, home opal, opal home, home mj, home mj opal, home mjopal, mjopal home, MJOPAL, mjopal, MJOpal, opal, Opal, OPAL, OPal, Diamonds, Jewelleries, Agency, DIAMONDS, diamonds, diamond, DIAMOND, Diamond, AGENCY, Agencies, AGENCIES, Social Media, Marketing, Sales, SMMA, smma, Social Media Marketing Agency, Best SMMA, Best smma, Best Social Media Marketing Agency, Websites, Copywriting, Copy Writing, Copy writing, Graphic Design, UI UX, UI/UX, ui/ux, ui ux, uiux, UIUX, Editing, Film Editing, Consulting, Full-stack developers",
};

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutPackages />
      <FAQ />
      <Test />
      <Newsletter />
    </main>
  );
}

export default Home;
