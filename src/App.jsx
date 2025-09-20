import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/homepage";
import AboutUs2 from "./pages/about-us";
import SimplePricing from "@/pages/simple-pricing";
import ContactUs from "./pages/contact-us";

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
