import { motion } from "motion/react";
import { Construction } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import TechTags from "@/components/TechTags";

const TECH = ["PHP 8", "Slim 4", "PostgreSQL", "Docker", "Twig", "API REST", "Guzzle"];

// ── Page ───────────────────────────────────────────────

const CRMVolley = () => {
  return (
    <section className="py-10 md:py-14">
      <p className="home-hero__eyebrow">— CRM · Club de Volley-ball</p>
      <h1 className="page-title">
        CRM Club <em>Volley</em>
      </h1>

      <motion.div
        {...fadeInUp(0)}
        className="mt-6 flex max-w-2xl items-center gap-3 rounded-2xl border border-[rgba(120,243,210,0.22)] bg-[rgba(120,243,210,0.04)] p-6 md:p-8"
      >
        <Construction size={20} className="shrink-0 text-[#78f3d2]" />
        <p className="text-sm leading-relaxed text-[rgba(232,229,223,0.85)]">
          Page en construction — le détail de ce projet arrive bientôt.
        </p>
      </motion.div>

      <motion.div
        {...fadeInUp(0.08)}
        className="mt-6 max-w-2xl rounded-2xl border border-white/16 bg-white/8 p-6 md:p-8"
      >
        <p className="mb-3 text-[0.68rem] uppercase tracking-[0.2em] text-[rgba(120,243,210,0.6)]">
          Aperçu
        </p>
        <p className="mb-4 text-sm leading-relaxed text-[rgba(232,229,223,0.75)]">
          Application web CRM développée pour un club de volley-ball.
          Architecture MVC avec Slim 4, Repositories pour l'accès aux
          données, intégration API Weezevent pour la synchronisation des
          participants et API Brevo pour l'envoi de newsletters. Interface
          d'administration avec templates Twig, déploiement conteneurisé
          Docker. J'ai réalisé la partie front-end.
        </p>
        <TechTags tech={TECH} />
        <a
          href="https://github.com/HaGotHem/CRM-Club-Volley"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/28 px-3.5 py-1.5 text-xs text-[#efebe4]/85 transition-colors duration-200 hover:border-white/45 hover:text-[#efebe4]"
        >
          Voir le repo
        </a>
      </motion.div>
    </section>
  );
};

export default CRMVolley;
