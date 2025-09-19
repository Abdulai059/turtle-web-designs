import { Route, Routes } from "react-router-dom";

import Homepage from "./components/pages/homepage";
import AboutUs2 from "./components/pages/about-us-2";

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />

      <Route path="about-us" element={<AboutUs2 />} />
    </Routes>
  );
}

export default App;
