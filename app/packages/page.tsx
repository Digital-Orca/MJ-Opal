import FAQ from "../(home)/FAQ/FAQ";
import Newsletter from "../(home)/Newsletter/Newsletter";
import Structure from "./Structure/Structure";

export const metadata = {
  title: "MJ Opal - Packages Page",
  description: `Discover our range of plans designed to meet your needs. For detailed information and personalized recommendations, please visit our contact page to get in touch with us directly.`,
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
