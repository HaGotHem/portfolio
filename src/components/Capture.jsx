// Capture d'écran de projet. Les captures sont des pages entières : on borne
// la hauteur affichée et on renvoie vers l'image complète au clic.
// Réutilisée par les pages projet (stage, CRM).
const Capture = ({ src, legende }) => (
  <figure className="overflow-hidden rounded-2xl border border-white/16 bg-white/8">
    <a href={src} target="_blank" rel="noopener noreferrer">
      <img
        src={src}
        alt={legende}
        loading="lazy"
        className="block max-h-[65vh] w-full object-cover object-top"
      />
    </a>
    <figcaption className="flex flex-wrap items-center gap-x-2 border-t border-white/10 px-4 py-2.5 text-[0.7rem] text-[rgba(232,229,223,0.6)]">
      {legende}
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#78f3d2]/70 transition-colors duration-200 hover:text-[#78f3d2]"
      >
        voir en entier
      </a>
    </figcaption>
  </figure>
);

export default Capture;
