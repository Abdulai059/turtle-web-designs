import { Route, Routes } from "react-router-dom";

import Homepage from "./components/pages/homepage";
import AboutUs2 from "./components/pages/about-us-2";
import SimplePricing from "@/components/pages/simple-pricing"

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />

      <Route path="about-us" element={<AboutUs2 />} />
      <Route path="pricing" element={<SimplePricing />} />
    </Routes>
  );
}

export default App;
