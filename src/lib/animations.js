// Animation "fondu + montée" déclenchée au scroll (via Motion).
// Factorisée ici car réutilisée sur quasiment toutes les pages.
export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.38, delay, ease: "easeOut" },
});
