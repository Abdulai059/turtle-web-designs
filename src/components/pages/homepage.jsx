import Header from "../mvpblocks/header";
import Heropage from "../mvpblocks/heropage";
import AboutUs from "../mvpblocks/aboutUs";
import TestimonialsCarousel from "../mvpblocks/testimonials-carousel";
import Faq3 from "../mvpblocks/faq";
import CTA2 from "../mvpblocks/cta";
import Footer from "../mvpblocks/footer";

function Homepage() {
  return (
    <div>
      <Header />
      <Heropage />
      <AboutUs />
      <TestimonialsCarousel />
      <Faq3 />
      <CTA2 />
      <Footer />
    </div>
  );
}

export default Homepage;
