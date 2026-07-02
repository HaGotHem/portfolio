import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/index.css";
import Navbar from "./components/ui/navbar.jsx";
import Footer from "./components/ui/footer.jsx";
import Background from "./components/ui/background.jsx";
import Home from "./pages/Home.jsx";
import Stage from "./pages/Stage.jsx";
import Contact from "./pages/Contact.jsx";
import Realisation from "./pages/realisation.jsx";
import TabSkill from "./pages/TabSkill.jsx";
import CV from "./pages/CV.jsx";
import Veille from "./pages/Veille.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex min-h-dvh flex-col">
        <Background />
        <div
          style={{ position: "relative", zIndex: 1 }}
          className="flex min-h-dvh flex-col"
        >
          <Navbar />
          <main className="w-full flex-1 px-4 pb-10 pt-2 sm:px-6 md:px-8 lg:mx-auto lg:max-w-8xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stage" element={<Stage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/realisation" element={<Realisation />} />
              <Route path="/tabskill" element={<TabSkill />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/veille" element={<Veille />} />
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
