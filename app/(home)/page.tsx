import About from "./About/About";
import FAQ from "./FAQ/FAQ";
import Services from "./Services/Services";
import Newsletter from "./Newsletter/Newsletter";
import Testimonials from "./Testimonials/Testimonials";
import Hero from "./Hero/Hero";

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
