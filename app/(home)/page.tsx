import About from "./About/About";
import FAQ from "./FAQ/FAQ";
import Services from "./Services/Services";
import Newsletter from "./Newsletter/Newsletter";
import Testimonials from "./Testimonials/Testimonials";
import Hero from "./Hero/Hero";

export const metadata = {
  title: "MJ Opal - Home Page",
  description: `Grow, win and shine | Like you, we've faced challenges on the way. | MJ Opal was born as a result of some setbacks despite our best efforts. | Determined to turn our experiences to serve your business's needs with our team to make you shine.`,
};

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <FAQ />
      <Testimonials />
      <Newsletter />
    </main>
  );
}

export default Home;
