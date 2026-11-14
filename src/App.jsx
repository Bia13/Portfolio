import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { HashRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { LanguageProvider } from "./components/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Gallery from "./components/gallery";
import Experience from "./components/experience";
import Contact from "./components/contact";
import ProjectDrawer from "./components/ProjectDrawer";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (!scrollTo) return;

    document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth", block: "start" });
    navigate("/", { replace: true, state: {} });
  }, [location, navigate]);

  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <Experience />
        <Contact />
      </main>
      {/* detalhes do projeto: abre por cima da home em /projects/:slug */}
      <ProjectDrawer />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <MotionConfig reducedMotion="user">
          <div className="guides" aria-hidden="true" />
          <div className="relative min-h-screen pt-3">
            <Navbar />
            <Routes>
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </MotionConfig>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
