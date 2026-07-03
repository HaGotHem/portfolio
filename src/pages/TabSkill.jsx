
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



// ── Page ───────────────────────────────────────────────

const TabSkill = () => (
  <section className="py-10 md:py-14">

  </section>
);

export default TabSkill;
