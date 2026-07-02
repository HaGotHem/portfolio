import { motion } from "motion/react";
import { Terminal, LifeBuoy } from "lucide-react";
import {
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiPython,
  SiReact,
  SiGithub,
  SiDocker,
  SiLinux,
} from "react-icons/si";
import { fadeInUp } from "@/lib/animations";
import Footer from "../components/ui/footer.jsx";
import { PROJETS } from "@/data/projets";

// ── Données ────────────────────────────────────────────

const SKILL_CATEGORIES = [
  {
    label: "Développement web",
    skills: [
      { name: "HTML / CSS", level: 70, icon: SiHtml5 },
      { name: "JavaScript", level: 68, icon: SiJavascript },
      { name: "TailwindCSS", level: 80, icon: SiTailwindcss },
      { name: "Bootstrap", level: 90, icon: SiBootstrap },
      { name: "PHP", level: 40, icon: SiPhp },
    ],
  },
  {
    label: "Langages & Frameworks",
    skills: [
      { name: "Python", level: 80, icon: SiPython },
      { name: "React Native", level: 30, icon: SiReact },
    ],
  },
  {
    label: "Outils & Systèmes",
    skills: [
      { name: "Git / GitHub", level: 70, icon: SiGithub },
      { name: "Docker", level: 70, icon: SiDocker },
      { name: "Linux", level: 80, icon: SiLinux },
      { name: "PowerShell", level: 60, icon: Terminal },
      { name: "GLPI", level: 90, icon: LifeBuoy },
    ],
  },
];

// Référentiel BTS SIO SLAM (blocs de compétences)
const BTS_BLOCS = [
  {
    code: "B1",
    titre: "Support et mise à disposition de services",
    items: [
      { code: "B1.1", label: "Gérer le patrimoine informatique", status: "acquis" },
      { code: "B1.2", label: "Répondre aux incidents et demandes d'assistance", status: "en-cours" },
      { code: "B1.3", label: "Développer la présence en ligne", status: "acquis" },
      { code: "B1.4", label: "Travailler en mode projet", status: "en-cours" },
      { code: "B1.5", label: "Mettre à disposition un service informatique", status: "en-cours" },
      { code: "B1.6", label: "Organiser son développement professionnel", status: "acquis" },
    ],
  },
  {
    code: "B2",
    titre: "Conception et développement d'applications (SLAM)",
    items: [
      { code: "B2.1", label: "Concevoir une solution applicative", status: "acquis" },
      { code: "B2.2", label: "Développer des composants d'interface utilisateur", status: "acquis" },
      { code: "B2.3", label: "Développer des composants métier", status: "en-cours" },
      { code: "B2.4", label: "Assurer la maintenance d'une solution applicative", status: "en-cours" },
      { code: "B2.5", label: "Gérer les données", status: "acquis" },
    ],
  },
  {
    code: "B3",
    titre: "Cybersécurité des services informatiques",
    items: [
      { code: "B3.1", label: "Protéger les données à caractère personnel", status: "en-cours" },
      { code: "B3.2", label: "Préserver l'identité numérique de l'organisation", status: "en-cours" },
      { code: "B3.3", label: "Sécuriser les équipements et les usages", status: "en-cours" },
    ],
  },
];

// Styles selon le statut de compétence
const STATUS_STYLES = {
  "acquis": "text-[#78f3d2] border-[rgba(120,243,210,0.2)] bg-[rgba(120,243,210,0.06)]",
  "en-cours": "text-white/45 border-white/10 bg-white/4",
};
const STATUS_LABELS = {
  "acquis": "Acquis",
  "en-cours": "En cours",
};

// ── Sous-composants ────────────────────────────────────

const SkillBar = ({ name, level, icon: Icon, delay }) => (
  <motion.div {...fadeInUp(delay)} className="flex flex-col gap-1.5">
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-xs text-[rgba(232,229,223,0.78)]">
        {Icon && <Icon size={15} className="shrink-0 text-[#78f3d2]/80" />}
        {name}
      </span>
      <span className="text-[0.62rem] text-white/35">{level} %</span>
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

// ── Page ───────────────────────────────────────────────

const TabSkill = () => (
  <section className="py-10 md:py-14">
    <p className="home-hero__eyebrow">— BTS SIO SLAM</p>
    <h1 className="page-title">
      Tableau de <em>compétences</em> / synthèse
    </h1>

    {/* Barres de compétences par catégorie */}
    <div className="mb-14">
      <p className="section-label">Compétences techniques</p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.label}
            {...fadeInUp(ci * 0.08)}
            className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/4 p-5"
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
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
        className="overflow-x-auto rounded-2xl border border-white/10 bg-white/4"
      >
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-[0.62rem] uppercase tracking-[0.12em] text-white/38">
              <th className="px-5 py-3 font-semibold">Projet</th>
              <th className="px-5 py-3 font-semibold">Catégorie</th>
              <th className="px-5 py-3 font-semibold">Technologies</th>
              <th className="px-5 py-3 font-semibold">Rôle</th>
              <th className="px-5 py-3 font-semibold">Année</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {PROJETS.map((projet) => (
              <tr key={projet.title}>
                <td className="px-5 py-3 font-medium text-[rgba(232,229,223,0.85)]">
                  {projet.title}
                </td>
                <td className="px-5 py-3 text-[rgba(232,229,223,0.62)]">
                  {projet.category}
                </td>
                <td className="px-5 py-3 text-[rgba(232,229,223,0.55)]">
                  {projet.tech.join(", ")}
                </td>
                <td className="px-5 py-3 text-[rgba(232,229,223,0.62)]">
                  {projet.scolaire ? "Scolaire" : "Personnel"}
                </td>
                <td className="px-5 py-3 text-[rgba(232,229,223,0.62)]">
                  {projet.year}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>

    {/* Référentiel BTS SIO SLAM */}
    <div>
      <p className="section-label">Référentiel BTS SIO SLAM</p>
      <div className="flex flex-col gap-4">
        {BTS_BLOCS.map((bloc, bi) => (
          <motion.div
            key={bloc.code}
            {...fadeInUp(bi * 0.1)}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/4"
          >
            {/* En-tête du bloc */}
            <div className="flex items-center gap-3 border-b border-white/8 px-5 py-3.5">
              <span className="rounded-lg border border-[rgba(120,243,210,0.25)] bg-[rgba(120,243,210,0.08)] px-2.5 py-0.5 text-xs font-semibold text-[#78f3d2]">
                {bloc.code}
              </span>
              <h3 className="text-sm font-semibold text-[rgba(232,229,223,0.85)]">
                {bloc.titre}
              </h3>
            </div>

            {/* Lignes de compétences */}
            <div className="divide-y divide-white/5">
              {bloc.items.map((item) => (
                <div
                  key={item.code}
                  className="flex items-center justify-between gap-4 px-5 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 text-[0.62rem] text-white/28">
                      {item.code}
                    </span>
                    <span className="text-sm text-[rgba(232,229,223,0.7)]">
                      {item.label}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[0.6rem] uppercase tracking-[0.12em] ${STATUS_STYLES[item.status]}`}
                  >
                    {STATUS_LABELS[item.status]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TabSkill;
