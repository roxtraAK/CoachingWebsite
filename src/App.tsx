import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Content } from "./components/layout/Content";
import { Coaching } from "./components/pages/Coaching";
import { PersonalTraining } from "./components/pages/PersonalTraining";
import { Achievements } from "./components/pages/Achievements";
import { Impressum } from "./components/pages/Impressum";
import { ShoppingCartContext } from "./context/ShoppingCartContext";
import { useState } from "react";

export default function App() {
  const [productCount, setProductCount] = useState(0);

  return (
    <ShoppingCartContext.Provider value={{ productCount, setProductCount }}>
      <Router>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/personaltraining" element={<PersonalTraining />} />
        </Routes>
      </Router>
    </ShoppingCartContext.Provider>
  );
}
