import { motion } from "motion/react";
import { Cpu, BookOpen, Search } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

// ── Sous-composants ────────────────────────────────────

const SectionHeader = ({ icon: Icon, title }) => (
  <div className="mb-4 flex items-center gap-2.5">
    <Icon size={13} className="text-[#78f3d2]/65" />
    <p className="mb-0 text-[0.7rem] uppercase tracking-[0.22em] text-[rgba(232,229,223,0.78)]">
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
          className="rounded-2xl border border-white/16 bg-white/8 p-6"
        >
          <SectionHeader icon={Cpu} title="Sujet" />
          <div className="flex flex-col gap-4 text-sm leading-relaxed text-[rgba(232,229,223,0.85)]">
            <p>
              Les processeurs, leurs limites physiques et les nouvelles technologies de rupture
            </p>
          </div>
        </motion.div>

        {/* Pourquoi ça me concerne */}
        <motion.div
          {...fadeInUp(0.08)}
          className="rounded-2xl border border-white/16 bg-white/8 p-6"
        >
          <SectionHeader icon={BookOpen} title="Pourquoi ce sujet?" />
          <p className="text-sm leading-relaxed text-[rgba(232,229,223,0.8)]">
            Depuis l'invention du circuit intégré, l'industrie des semi-conducteurs a suivi une trajectoire prévisible et exponentielle.
            Cependant, nous arrivons aujourd'hui à un tournant historique où les lois de la physique classique s'opposent à la poursuite de cette miniaturisation.
            Les taches du quotidien, les applications professionnelles et les jeux vidéo deviennent de plus en plus gourmands en ressources, ce qui met à rude épreuve les processeurs actuels.
            La question se pose donc : comment continuer à améliorer les performances des processeurs face à ces limites physiques?
          </p>
        </motion.div>

         {/* Pourquoi ça me concerne */}
        <motion.div
          {...fadeInUp(0.08)}
          className="rounded-2xl border border-white/16 bg-white/8 p-6"
        >
          <SectionHeader icon={Search} title="La mise en place" />
          <p className="text-sm leading-relaxed text-[rgba(232,229,223,0.8)]">
            ce que j'ai fais,<br></br>
            
            pull hebdo tache claude préplanifier, recherche notebook lm
            <br></br> <br></br>
            ce que je vais faire <br></br> <br></br>

            push newsletter, google allert, flux rss, scraping (firecrawl) hebdo de site comme techpowerup, transcript youtube
            hébergement en local d'un petit model d'ia pour filtrer les informations, et faire un résumé, pour ensuite les regrouper, avoir une version raw / une version résumé


          </p>
        </motion.div>

        
      </div>
    </div>
  </section>
);

export default Veille;


