import About from "./About/About";
import FAQ from "./FAQ/FAQ";
import Hero from "./Hero/Hero";
import Newsletter from "./Newsletter/Newsletter";
import Testimonials from "./Testimonials/Testimonials";

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <FAQ />
      <Testimonials />
      <Newsletter />
    </main>
  );
}

export default Home;
