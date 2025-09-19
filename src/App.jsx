import { Route, Routes } from "react-router-dom";

import Homepage from "./components/pages/homepage";
import AboutUs2 from "./components/pages/about-us-2";
import SimplePricing from "@/components/pages/simple-pricing"
import ContactUs from "./components/pages/contact-us"

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />

      <Route path="about-us" element={<AboutUs2 />} />
      <Route path="pricing" element={<SimplePricing />} />
      <Route path="Contact" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
