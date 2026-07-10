// Petit libellé en majuscules affiché en haut des pages, réutilisé partout.
const Eyebrow = ({ children }) => (
  <p className="mb-[clamp(1rem,2vw,1.6rem)] text-[0.72rem] tracking-[0.2em] text-[rgba(232,229,223,0.62)] uppercase">
    {children}
  </p>
);

export default Eyebrow;
