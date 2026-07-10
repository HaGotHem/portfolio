import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/navbar.jsx";
import Footer from "./components/ui/footer.jsx";

const Background = lazy(() => import("./components/ui/background.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const Stage = lazy(() => import("./pages/Stage.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Realisation = lazy(() => import("./pages/realisation.jsx"));
const TabSkill = lazy(() => import("./pages/TabSkill.jsx"));
const CV = lazy(() => import("./pages/CV.jsx"));
const Veille = lazy(() => import("./pages/Veille.jsx"));

const App = () => (
  <BrowserRouter>
    <a href="#main-content" className="skip-link">
      Aller au contenu principal
    </a>
    <div className="flex min-h-dvh flex-col">
      <Suspense fallback={null}>
        <Background />
      </Suspense>
      <div
        style={{ position: "relative", zIndex: 1 }}
        className="flex min-h-dvh flex-col"
      >
        <Navbar />
        <main
          id="main-content"
          className="w-full flex-1 px-4 pb-10 pt-2 sm:px-6 md:px-8 lg:mx-auto lg:max-w-8xl"
        >
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stage" element={<Stage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/realisation" element={<Realisation />} />
              <Route path="/tabskill" element={<TabSkill />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/veille" element={<Veille />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
    <Footer />
  </BrowserRouter>
);

export default App;
