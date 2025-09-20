import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/homepage";
import AboutUs2 from "./pages/about-us";
import SimplePricing from "@/pages/simple-pricing";
import ContactUs from "./pages/contact-us";
import Feature from "./pages/feature";

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />

      <Route path="about-us" element={<AboutUs2 />} />
      <Route path="pricing" element={<SimplePricing />} />
      <Route path="Contact" element={<ContactUs />} />
      <Route path="features" element={<Feature />} />
    </Routes>
  );
}

export default App;
