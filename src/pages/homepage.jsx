import { Header } from "../components/header";
import Heropage from "../components/heropage";
import AboutUs from "../components/aboutUs";
import TestimonialsCarousel from "../components/testimonials-carousel";
import Faq3 from "../components/faq";
import CTA2 from "../components/cta";
import Footer from "../components/footer";

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
