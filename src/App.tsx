import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Content } from "./components/layout/Content";
import { Coaching } from "./components/pages/Coaching";
import { Contact } from "./components/pages/Contact";
import { Achievements } from "./components/pages/Achievements";
import { Impressum } from "./components/pages/Impressum";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
