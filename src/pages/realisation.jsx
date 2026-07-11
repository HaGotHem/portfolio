import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PROJETS } from "@/data/projets";
import { SKILL_CATEGORIES } from "@/data/competences";
import ProjectCard from "@/components/ProjectCard";
import { fadeInUp } from "@/lib/animations";
import { motion } from "motion/react";

const SkillBar = ({ name, level, icon: Icon, delay }) => (
  <motion.div {...fadeInUp(delay)} className="flex flex-col gap-1.5">
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-xs text-[rgba(232,229,223,0.9)]">
        {Icon && <Icon size={15} className="shrink-0 text-[#78f3d2]/80" />}
        {name}
      </span>
      <span className="text-[0.62rem] text-white/75">{level} %</span>
    </div>
    {/* Barre de progression animée au scroll */}
    <div className="h-1 overflow-hidden rounded-full bg-white/8">
      <motion.div
        className="h-full rounded-full bg-[#78f3d2]/55"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: delay + 0.1, ease: "easeOut" }}
      />
    </div>
  </motion.div>
);

const Realisation = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <section className="py-10 md:py-14">
      <h1 className="page-title">
        Mes <em>Compétences</em>
      </h1>
      <section className="py-10 md:py-14">
        {/* Barres de compétences par catégorie */}
        <div className="mb-14">
          <p className="section-label">Compétences techniques</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SKILL_CATEGORIES.map((cat, ci) => (
              <motion.div
                key={cat.label}
                {...fadeInUp(ci * 0.08)}
                className="flex flex-col gap-4 rounded-2xl border border-white/16 bg-white/8 p-5"
              >
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/78">
                  {cat.label}
                </h3>
                <div className="flex flex-col gap-3">
                  {cat.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      delay={ci * 0.08 + si * 0.04}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tableau de synthèse des réalisations */}
        <div className="mb-14">
          <p className="section-label">Tableau de synthèse des réalisations</p>
          <motion.div
            {...fadeInUp(0.05)}
            className="overflow-x-auto rounded-2xl border border-white/16 bg-white/8"
          >
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/14 text-[0.62rem] uppercase tracking-[0.12em] text-white/75">
                  <th className="px-5 py-3 font-semibold">Projet</th>
                  <th className="px-5 py-3 font-semibold">Catégorie</th>
                  <th className="px-5 py-3 font-semibold">Technologies</th>
                  <th className="px-5 py-3 font-semibold">Rôle</th>
                  <th className="px-5 py-3 font-semibold">Année</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/8">
                {PROJETS.map((projet) => (
                  <tr key={projet.title}>
                    <td className="px-5 py-3 font-medium text-[rgba(232,229,223,0.92)]">
                      {projet.title}
                    </td>
                    <td className="px-5 py-3 text-[rgba(232,229,223,0.78)]">
                      {projet.category}
                    </td>
                    <td className="px-5 py-3 text-[rgba(232,229,223,0.72)]">
                      {projet.tech.join(", ")}
                    </td>
                    <td className="px-5 py-3 text-[rgba(232,229,223,0.78)]">
                      {projet.scolaire ? "Scolaire" : "Personnel"}
                    </td>
                    <td className="px-5 py-3 text-[rgba(232,229,223,0.78)]">
                      {projet.year}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
      <p className="home-hero__eyebrow">— Travaux réalisés</p>
      <h2 className="page-title">
        Mes <em>réalisations</em>
      </h2>

      <div className="grid gap-5 lg:grid-cols-2">
        {PROJETS.map((projet, i) => (
          <ProjectCard key={projet.title} project={projet} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Realisation;
