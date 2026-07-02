import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PROJETS } from "@/data/projets";
import ProjectCard from "@/components/ProjectCard";
import Footer from "../components/ui/footer.jsx";

const Realisation = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <section className="py-10 md:py-14">
      <p className="home-hero__eyebrow">— Travaux réalisés</p>
      <h1 className="page-title">
        Mes <em>réalisations</em>
      </h1>

      <div className="grid gap-5 lg:grid-cols-2">
        {PROJETS.map((projet, i) => (
          <ProjectCard key={projet.title} project={projet} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Realisation;
