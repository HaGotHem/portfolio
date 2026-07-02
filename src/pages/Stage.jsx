import { motion } from "motion/react";
import { fadeInUp } from "@/lib/animations";
import { PROJETS } from "@/data/projets";
import ProjectCard from "@/components/ProjectCard";
import Footer from "../components/ui/footer.jsx";
import TechTags from "@/components/TechTags";

// On n'affiche ici que les projets réalisés dans le cadre du BTS.
const PROJETS_SCOLAIRES = PROJETS.filter((projet) => projet.scolaire);

const Stage = () => (
  <section className="py-10 md:py-14">
    <p className="home-hero__eyebrow">— BTS SIO SLAM · 2025/26</p>
    <h1 className="page-title">
      <em>Stage</em>
    </h1>

    {/* ── Stage / Alternance ────────────────────────── */}
    <div>
      <p className="section-label">Stage / Alternance</p>
      <motion.div
        {...fadeInUp(0)}
        className="max-w-2xl rounded-2xl border border-[rgba(120,243,210,0.22)] bg-[rgba(120,243,210,0.04)] p-6 md:p-8"
      >
        <p className="mb-3 text-[0.68rem] uppercase tracking-[0.2em] text-[rgba(120,243,210,0.6)]">
          En recherche active
        </p>
        <h2 className="mb-3 font-fraunces text-2xl font-medium leading-tight text-[#efebe4]">
          Stage de 4 semaines{" "}
          <span className="font-fraunces-italic text-[#78f3d2]">
            en développement
          </span>
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-[rgba(232,229,223,0.75)]">
          Étudiant en première année de BTS SIO option SLAM à Mediaschool Nice,
          je recherche un{" "}
          <strong className="text-[#f8f4ec]">stage de 4 semaines</strong> entre{" "}
          <strong className="text-[#f8f4ec]">juillet et août 2026</strong> pour
          mettre en pratique mes compétences et acquérir une première expérience
          professionnelle.
        </p>
      </motion.div>
    </div>
  </section>
);

export default Stage;
