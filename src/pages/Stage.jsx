import { motion } from "motion/react";
import { fadeInUp } from "@/lib/animations";

const Stage = () => (
  <section className="py-10 md:py-14">
    <p className="home-hero__eyebrow">— BTS SIO SLAM · 2025/26</p>
    <h1 className="page-title">
      <em>Stage</em>
    </h1>
  <hero className="mt-6">
    {/* ── Stage / Alternance ────────────────────────── */}
    <container className="flex gap-6" id="réalisé">
    <div>
      <p className="section-label">Stage / Alternance</p>
      <motion.div
        {...fadeInUp(0)}
        className="max-w-2xl rounded-2xl border border-[rgba(120,243,210,0.22)] bg-[rgba(120,243,210,0.04)] p-6 md:p-8"
      >
        <p className="mb-3 text-[0.68rem] uppercase tracking-[0.2em] text-[rgba(120,243,210,0.6)]">
          A réalisé
        </p>
        <h2 className="mb-3 font-fraunces text-2xl font-medium leading-tight text-[#efebe4]">
          Stage de 4 semaines{" "}
          <span className="font-fraunces-italic text-[#78f3d2]">
            en développement web
          </span>
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-[rgba(232,229,223,0.75)]">
          texte a remplir
        </p>
      </motion.div>
    </div>
    </container>
    <container className="flex gap-6" id="recherche">
        <div className="mt-8" >
      <motion.div
        {...fadeInUp(0)}
        className="max-w-2xl rounded-2xl border border-white/16 bg-white/8 p-6 md:p-8"
      >
        <p className="mb-3 text-[0.68rem] uppercase tracking-[0.2em] text-[rgba(120,243,210,0.6)]">
          En recherche active
        </p>
        <h2 className="mb-3 font-fraunces text-2xl font-medium leading-tight text-[#efebe4]">
          Une alternance{" "}
          <span className="font-fraunces-italic text-[#78f3d2]">
            en Dev
          </span>
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-[rgba(232,229,223,0.75)]">
          Étudiant en Deuxième année de BTS SIO option SLAM à Mediaschool Nice,
          je recherche un{" "}
          <strong className="text-[#f8f4ec]">une alternance</strong> lors de ma{" "}
          <strong className="text-[#f8f4ec]">Deuxième année</strong>
        </p>
      </motion.div>
    </div>


    <div className="mt-8" >
      <motion.div
        {...fadeInUp(0)}
        className="max-w-2xl rounded-2xl border border-white/16 bg-white/8 p-6 md:p-8"
      >
        <p className="mb-3 text-[0.68rem] uppercase tracking-[0.2em] text-[rgba(120,243,210,0.6)]">
          En recherche active
        </p>
        <h2 className="mb-3 font-fraunces text-2xl font-medium leading-tight text-[#efebe4]">
          Stage de 6 semaines{" "}
          <span className="font-fraunces-italic text-[#78f3d2]">
            en développement
          </span>
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-[rgba(232,229,223,0.75)]">
          Étudiant en Deuxième année de BTS SIO option SLAM à Mediaschool Nice,
          je recherche un{" "}
          <strong className="text-[#f8f4ec]">stage de 6 semaines</strong> en{" "}
          <strong className="text-[#f8f4ec]">Janvier 2027</strong> pour
          mettre en pratique mes compétences et acquérir une première expérience
          professionnelle.
        </p>
      </motion.div>
    </div>
  </container>
  </hero>



  </section>
);

export default Stage;
