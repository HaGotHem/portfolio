import { motion } from "motion/react";
import { fadeInUp } from "@/lib/animations";
import { slugify } from "@/lib/utils";
import TechTags from "@/components/TechTags";

// Carte d'un projet, réutilisée sur les pages Projets/Stage et Réalisations.
// Le projet "mis en avant" (featured) occupe toute la largeur et a un style distinct.
const ProjectCard = ({ project, index = 0 }) => {
  const { title, desc, tech, category, year, featured } = project;

  return (
    <motion.article
      id={slugify(title)}
      {...fadeInUp(index * 0.1)}
      className={`flex scroll-mt-28 flex-col gap-4 rounded-2xl border p-6 transition-colors duration-200 ${
        featured
          ? "border-[rgba(120,243,210,0.3)] bg-[rgba(120,243,210,0.2)] lg:col-span-2"
          : "border-white/28 bg-white/18 hover:border-white/32 hover:bg-white/25"
      }`}
    >
      {/* En-tête : catégorie + année */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="rounded-full border border-white/22 px-2.5 py-0.5 text-[0.6rem] uppercase tracking-[0.15em] text-white/68">
            {category}
          </span>
          {featured && (
            <span className="text-[0.6rem] uppercase tracking-[0.15em] text-[#78f3d2]/75">
              Projet principal
            </span>
          )}
        </div>
        <span className="text-[0.6rem] uppercase tracking-[0.15em] text-white/75">
          {year}
        </span>
      </div>

      {/* Titre + description */}
      <div>
        <h2
          className={`mb-2 font-medium leading-tight text-[#efebe4] ${
            featured ? "font-fraunces text-2xl md:text-3xl" : "text-lg"
          }`}
        >
          {title}
        </h2>
        <p className="text-sm leading-relaxed text-[rgba(232,229,223,0.88)]">
          {desc}
        </p>
      </div>

      <TechTags tech={tech} />
    </motion.article>
  );
};

export default ProjectCard;
