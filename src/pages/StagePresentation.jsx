import { motion } from "motion/react";
import {
  Target,
  Hammer,
  Lightbulb,
  BarChart3,
  Lock,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { fadeInUp } from "@/lib/animations";
import TechTags from "@/components/TechTags";
import Capture from "@/components/Capture";

const CAPTURE = (nom) => `/captures-stage/${nom}.jpg`;

const REPO = "https://github.com/taha-oulbacha/spa-project";

const TECH = ["HTML", "Tailwind CSS 4", "JavaScript", "Vite", "Git"];

// Contributions personnelles, avec leurs traces dans le dépôt (commit + PR).
const CONTRIBUTIONS = [
  {
    titre: "Le socle du projet",
    detail:
      "installation de Tailwind CSS 4 et de Vite, arborescence src/, gabarits des pages pour que chacun démarre la sienne.",
    commit: "a5b7391",
    commitSha: "a5b7391c8b87bdf01db91cc41212510bfb949c36",
    pr: 1,
  },
  {
    titre: "La page « À propos » et le menu mobile",
    detail:
      "avec ses attributs d'accessibilité et sa fermeture au clic sur un lien.",
    commit: "c1f8089",
    commitSha: "c1f8089d6799c953155fc0d82dd60c4ae6d3bfa6",
    pr: 2,
  },
  {
    titre: "La page « Informations pratiques »",
    detail: "et la clarification du menu.",
    commit: "db28855",
    commitSha: "db28855280457940cf6f35884cfb61d2fd453b04",
    pr: 5,
  },
  {
    titre: "La galerie",
    detail: "et l'harmonisation de l'en-tête entre toutes les pages.",
    commit: "ab8d478",
    commitSha: "ab8d478acc17d77f999ec57d6af1431c1a45e542",
    pr: 8,
  },
  {
    titre: "La revue et la fusion de 4 Pull Requests",
    detail: "dont la n° 9, qui portait le travail d'un collègue.",
    pr: 9,
  },
];

const CAPTURES = [
  {
    src: "02-a-propos",
    legende: "Page « À propos » et présentation de l'équipe",
  },
  {
    src: "03-informations-pratiques",
    legende: "Page « Informations pratiques »",
  },
  { src: "04-galerie", legende: "Galerie des espaces du spa" },
  { src: "07-mobile-menu-ouvert", legende: "Menu mobile ouvert" },
];

const CHIFFRES = [
  { valeur: "6 / 11", libelle: "commits de contenu sur la branche principale" },
  {
    valeur: "848 / 1 685",
    libelle: "lignes du site sur la branche principale (git blame)",
  },
  { valeur: "4 / 4", libelle: "Pull Requests ouvertes, puis fusionnées" },
  { valeur: "0", libelle: "modification poussée directement sur main" },
];

// ── Sous-composants ────────────────────────────────────

const SectionHeader = ({ icon: Icon, title }) => (
  <div className="mb-4 flex items-center gap-2.5">
    <Icon size={13} className="text-[#78f3d2]/65" />
    <p className="mb-0 text-[0.7rem] uppercase tracking-[0.22em] text-[rgba(232,229,223,0.78)]">
      {title}
    </p>
  </div>
);

const LienDepot = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#78f3d2]/80 underline decoration-[#78f3d2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#78f3d2] hover:decoration-[#78f3d2]/60"
  >
    {children}
  </a>
);

// ── Page ───────────────────────────────────────────────

const StagePresentation = () => (
  <section className="py-10 md:py-14">
    <p className="home-hero__eyebrow">
      — Stage BTS SIO 1re année · EXOCOMS GROUP
    </p>
    <h1 className="page-title">
      Sérénité <em>Spa &amp; Bien-être</em>
    </h1>

    <p className="mt-2 max-w-4xl text-sm leading-relaxed text-[rgba(232,229,223,0.75)]">
      Site vitrine réalisé en équipe chez EXOCOMS GROUP (Paris 8<sup>e</sup>) en
      juillet 2026 — 4 développeurs, 7 jours de développement.
    </p>

    <div className="mt-4">
      <TechTags tech={TECH} />
    </div>

    <motion.div {...fadeInUp(0)} className="mt-8">
      <Capture src={CAPTURE("01-accueil")} legende="Page d'accueil du site Sérénité" />
    </motion.div>

    <div className="mt-6 grid gap-5">
      {/* ── Le projet ───────────────────────────────── */}
      <motion.div
        {...fadeInUp(0)}
        className="rounded-2xl border border-white/16 bg-white/8 p-6 md:p-8"
      >
        <SectionHeader icon={Target} title="Le projet" />
        <p className="mb-4 text-sm leading-relaxed text-[rgba(232,229,223,0.85)]">
          Réaliser le site vitrine d'un spa, à quatre développeurs, sans cahier
          des charges : juste un fichier README pour tout cadrage. Le vrai enjeu
          n'était pas technique, il était de coordonner quatre personnes sur un
          même site sans que le rendu parte dans quatre directions.
        </p>
        <p className="text-sm leading-relaxed text-[rgba(232,229,223,0.85)]">
          J'étais{" "}
          <strong className="text-[#f8f4ec]">développeur intégrateur</strong>.
        </p>
      </motion.div>

      {/* ── Ce que j'ai fait ────────────────────────── */}
      <motion.div
        {...fadeInUp(0.08)}
        className="rounded-2xl border border-white/16 bg-white/8 p-6 md:p-8"
      >
        <SectionHeader icon={Hammer} title="Ce que j'ai fait" />
        <ul className="flex flex-col gap-4">
          {CONTRIBUTIONS.map((c) => (
            <li
              key={c.titre}
              className="border-l border-[rgba(120,243,210,0.28)] pl-4 text-sm leading-relaxed text-[rgba(232,229,223,0.8)]"
            >
              <strong className="text-[#f8f4ec]">{c.titre}</strong>
              {" — "}
              {c.detail}
              <span className="mt-1.5 flex flex-wrap gap-x-3 text-[0.7rem]">
                {c.commitSha && (
                  <LienDepot href={`${REPO}/commit/${c.commitSha}`}>
                    {c.commit}
                  </LienDepot>
                )}
                <LienDepot href={`${REPO}/pull/${c.pr}`}>PR #{c.pr}</LienDepot>
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* ── Captures ────────────────────────────────── */}
      <motion.div {...fadeInUp(0.08)} className="grid gap-5 sm:grid-cols-2">
        {CAPTURES.map((c) => (
          <Capture key={c.src} src={CAPTURE(c.src)} legende={c.legende} />
        ))}
      </motion.div>

      {/* ── Ce que j'en retiens ─────────────────────── */}
      <motion.div
        {...fadeInUp(0)}
        className="rounded-2xl border border-[rgba(120,243,210,0.22)] bg-[rgba(120,243,210,0.04)] p-6 md:p-8"
      >
        <SectionHeader icon={Lightbulb} title="Ce que j'en retiens" />
        <p className="mb-4 text-sm leading-relaxed text-[rgba(232,229,223,0.85)]">
          À la fin du stage, la branche principale portait cinq pages sur six.
          La sixième, « Tarifs », avait pourtant bien été développée : plus de
          500 lignes, écrites par un collègue. Mais elle n'a jamais été
          fusionnée sur la branche principale — le travail était fait, il est
          resté sur sa branche, et personne ne s'en est aperçu.
        </p>
        <p className="mb-4 font-fraunces text-lg leading-snug text-[#78f3d2]">
          Dans un travail par branches, un travail non fusionné est un travail
          invisible.
        </p>
        <p className="text-sm leading-relaxed text-[rgba(232,229,223,0.8)]">
          Nos tests portaient sur ce qu'on nous proposait d'intégrer, jamais sur
          ce qui manquait. Aucun de nous n'a parcouru le site en entier en
          suivant simplement le menu. C'est la recommandation que j'ai laissée à
          l'entreprise.
        </p>
      </motion.div>

      {/* ── En chiffres ─────────────────────────────── */}
      <motion.div
        {...fadeInUp(0.08)}
        className="rounded-2xl border border-white/16 bg-white/8 p-6 md:p-8"
      >
        <SectionHeader icon={BarChart3} title="En chiffres" />
        <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CHIFFRES.map((c) => (
            <div key={c.libelle}>
              <dt className="font-fraunces text-2xl leading-tight text-[#78f3d2]">
                {c.valeur}
              </dt>
              <dd className="mt-1 text-xs leading-relaxed text-[rgba(232,229,223,0.7)]">
                {c.libelle}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>

      {/* ── Dépôt ───────────────────────────────────── */}
      <motion.div
        {...fadeInUp(0.08)}
        className="flex flex-col gap-4 rounded-2xl border border-white/16 bg-white/8 p-6 md:p-8"
      >
        <p className="flex items-start gap-2.5 text-xs leading-relaxed text-[rgba(232,229,223,0.6)]">
          <Lock size={13} className="mt-0.5 shrink-0 text-[#78f3d2]/65" />
          <span>
            Dépôt <LienDepot href={REPO}>taha-oulbacha/spa-project</LienDepot>,
            privé : les liens ci-dessus demandent un accès en lecture.
          </span>
        </p>
        <Link
          to="/stage"
          className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/28 px-3.5 py-1.5 text-xs text-[#efebe4]/85 transition-colors duration-200 hover:border-white/45 hover:text-[#efebe4]"
        >
          <ArrowLeft size={13} />
          Retour au stage
        </Link>
      </motion.div>
    </div>
  </section>
);

export default StagePresentation;
