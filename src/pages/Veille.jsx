import { motion } from "motion/react";
import { Cpu, Rss, BookOpen, Tags } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import TechTags from "@/components/TechTags";
import Footer from "../components/ui/footer.jsx";

// ── Données ────────────────────────────────────────────

const SOURCES = [
  "Feedly (agrégateur RSS)",
  "Google Alerts",
  "Tom's Hardware",
  "Next",
  "Clubic",
  "Ars Technica",
  "The Verge",
  "Newsroom TSMC",
  "Newsroom Intel",
  "Newsroom ASML",
  "YouTube — Asianometry",
  "YouTube — der8auer",
];

const TERMES_CLES = [
  "Transistor",
  "Nanomètre",
  "Effet tunnel",
  "FinFET / GAA",
  "EUV",
  "Chiplet / 3D stacking",
  "Graphène",
  "Informatique quantique",
  "More than Moore",
];

// ── Sous-composants ────────────────────────────────────

const SectionHeader = ({ icon: Icon, title }) => (
  <div className="mb-4 flex items-center gap-2.5">
    <Icon size={13} className="text-[#78f3d2]/65" />
    <p className="mb-0 text-[0.7rem] uppercase tracking-[0.22em] text-[rgba(232,229,223,0.4)]">
      {title}
    </p>
  </div>
);

// ── Page ───────────────────────────────────────────────

const Veille = () => (
  <section className="py-10 md:py-14">
    <h1 className="page-title">
      Veille <em>technologique</em>
    </h1>

    <p className="mb-8 max-w-3xl text-sm leading-relaxed text-[rgba(232,229,223,0.7)]">
      Sujet :
    </p>

    <div className="grid gap-5 lg:grid-cols-[1fr_300px]">
      {/* ── Colonne principale ──────────────────────── */}
      <div className="flex flex-col gap-5">
        {/* Synthèse */}
        <motion.div
          {...fadeInUp(0)}
          className="rounded-2xl border border-white/10 bg-white/4 p-6"
        >
          <SectionHeader icon={Cpu} title="Synthèse" />
          <div className="flex flex-col gap-4 text-sm leading-relaxed text-[rgba(232,229,223,0.7)]">
            <p>
              présentation de la veille techno
            </p>
          </div>
        </motion.div>

        {/* Pourquoi ça me concerne */}
        <motion.div
          {...fadeInUp(0.08)}
          className="rounded-2xl border border-white/10 bg-white/4 p-6"
        >
          <SectionHeader icon={BookOpen} title="Pourquoi ça me concerne" />
          <p className="text-sm leading-relaxed text-[rgba(232,229,223,0.62)]">
            pourquoi j'ai choisi ce sujet
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Veille;
