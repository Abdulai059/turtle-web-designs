import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./components/pages/homepage";

function App() {
  return (
    <Routes>
      <Route path="" element={<Homepage />} />
    </Routes>
  );
}

export default App;
