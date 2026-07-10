import { motion } from "motion/react";
import { Download, GraduationCap, Briefcase, Code2, Globe, Sparkles } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import TechTags from "@/components/TechTags";

// ── Données ────────────────────────────────────────────

const FORMATION = [
  {
    title: "BTS SIO option SLAM",
    school: "Mediaschool Nice",
    period: "09/2025 — En cours",
    desc: "Brevet de Technicien Supérieur Services Informatiques aux Organisations, spécialité Solutions Logicielles et Applications Métiers.",
  },
  {
    title: "Licence 1 Informatique",
    school: "Université Paul Sabatier — Toulouse",
    period: "2024 — 2025",
    desc: "Première année de licence en informatique.",
  },
  {
    title: "Baccalauréat général",
    school: "Lycée Albert 1er — Monaco",
    period: "2022 — 2024",
    desc: "Spécialités Mathématiques et Numérique & Sciences Informatiques (NSI).",
  },
];

const SKILLS = [
  "HTML / CSS", "JavaScript", "TailwindCSS", "Bootstrap",
  "PHP", "Python", "React", "React Native",
  "Git", "GitHub", "Docker", "Linux",
  "PowerShell", "GLPI", "Suite Office",
];

const LANGUES = [
  { lang: "Français", level: "Natif" },
  { lang: "Anglais", level: "B2" },
  { lang: "Espagnol", level: "A2" },
];

const INTERETS = [
  "Sports mécaniques",
  "Aéronautique",
];

const QUALITES = [
  "Travail sous pression",
  "Adaptabilité",
  "Autonomie",
  "Gestion du stress",
];

// ── Sous-composants ────────────────────────────────────

const SectionHeader = ({ icon: Icon, title }) => (
  <div className="mb-5 flex items-center gap-2.5">
    <Icon size={13} className="text-[#78f3d2]/65" />
    <p className="mb-0 text-[0.7rem] uppercase tracking-[0.22em] text-[rgba(232,229,223,0.62)]">
      {title}
    </p>
  </div>
);

// ── Page ───────────────────────────────────────────────

const CV = () => (
  <section className="py-10 md:py-14">
    <p className="home-hero__eyebrow">— Curriculum Vitae</p>

    {/* En-tête : nom + bouton télécharger */}
    <div className="mb-3 flex flex-wrap items-end justify-between gap-4">
      <h1 className="page-title" style={{ marginBottom: 0 }}>
        Thomas <em>Bertacchi</em>
      </h1>
      <motion.a
        {...fadeInUp(0.1)}
        href="/cv.pdf"
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-[rgba(232,229,223,0.65)] transition-colors duration-200 hover:border-white/18 hover:text-[#efebe4]"
      >
        <Download size={13} />
        Télécharger PDF
      </motion.a>
    </div>

    {/* Profil */}
    <p className="mb-8 max-w-3xl text-sm leading-relaxed text-[rgba(232,229,223,0.7)]">
      Développeur junior en BTS SIO option SLAM, à la recherche d&apos;un stage
      de 4 semaines entre juillet et août 2026. Dynamique et doté d&apos;un
      excellent sens du contact, j&apos;aime collaborer avec des interlocuteurs
      variés. Volontaire, je me distingue par mon engagement au service du
      collectif et mon goût d&apos;apprendre.
    </p>

    <div className="grid gap-5 lg:grid-cols-[1fr_260px]">
      {/* ── Colonne principale ──────────────────────── */}
      <div className="flex flex-col gap-5">
        {/* Formation */}
        <motion.div
          {...fadeInUp(0)}
          className="rounded-2xl border border-white/10 bg-white/4 p-6"
        >
          <SectionHeader icon={GraduationCap} title="Formation" />
          <div className="flex flex-col gap-5">
            {FORMATION.map((f) => (
              <div key={f.title} className="flex gap-4">
                {/* Pastille timeline */}
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#78f3d2]/50" />
                <div>
                  <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-sm font-semibold text-[#efebe4]">
                      {f.title}
                    </h3>
                    <span className="text-[0.62rem] uppercase tracking-[0.12em] text-white/60">
                      {f.period}
                    </span>
                  </div>
                  <p className="mb-1 text-xs text-[#78f3d2]/60">{f.school}</p>
                  <p className="text-sm leading-relaxed text-[rgba(232,229,223,0.62)]">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Expérience professionnelle */}
        <motion.div
          {...fadeInUp(0.08)}
          className="rounded-2xl border border-white/10 bg-white/4 p-6"
        >
          <SectionHeader icon={Briefcase} title="Expérience professionnelle" />
          <div className="flex gap-4">
            <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/18" />
            <div>
              <h3 className="mb-1 text-sm font-semibold text-[rgba(232,229,223,0.55)]">
                En recherche d&apos;un stage
              </h3>
              <p className="text-sm leading-relaxed text-[rgba(232,229,223,0.62)]">
                Stage de 4 semaines en développement web — disponible entre
                juillet et août 2026.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Colonne latérale ────────────────────────── */}
      <div className="flex flex-col gap-4">
        {/* Compétences techniques */}
        <motion.div
          {...fadeInUp(0.1)}
          className="rounded-2xl border border-white/10 bg-white/4 p-5"
        >
          <SectionHeader icon={Code2} title="Compétences" />
          <TechTags tech={SKILLS} />
        </motion.div>

        {/* Qualités */}
        <motion.div
          {...fadeInUp(0.12)}
          className="rounded-2xl border border-white/10 bg-white/4 p-5"
        >
          <SectionHeader icon={Sparkles} title="Qualités" />
          <TechTags tech={QUALITES} />
        </motion.div>

        {/* Langues */}
        <motion.div
          {...fadeInUp(0.14)}
          className="rounded-2xl border border-white/10 bg-white/4 p-5"
        >
          <SectionHeader icon={Globe} title="Langues" />
          <div className="flex flex-col gap-2.5">
            {LANGUES.map((l) => (
              <div key={l.lang} className="flex items-center justify-between">
                <span className="text-sm text-[rgba(232,229,223,0.72)]">
                  {l.lang}
                </span>
                <span className="rounded-full border border-white/10 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.12em] text-white/60">
                  {l.level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Centres d'intérêt */}
        <motion.div
          {...fadeInUp(0.18)}
          className="rounded-2xl border border-white/10 bg-white/4 p-5"
        >
          <SectionHeader icon={Globe} title="Centres d'intérêt" />
          <TechTags tech={INTERETS} />
        </motion.div>
      </div>
    </div>
  </section>
);

export default CV;
