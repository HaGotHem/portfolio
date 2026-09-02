import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, FolderKanban } from "lucide-react";
import { PROJETS } from "@/data/projets";
import { slugify } from "@/lib/utils";

// Entrée "Projets / Réalisations / Compétences" du nav desktop, avec son
// panneau listant les projets. Le panneau est un enfant absolu du trigger :
// survoler l'un ou l'autre reste dans la même zone, donc aucune minuterie
// ni coordonnée à calculer pour le garder ouvert.
const ProjetsDropdown = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Le trigger n'est pas un NavLink (ses entrées visent des ancres ou des
  // pages dédiées), son état actif est donc dérivé à la main.
  const isActive = pathname.toLowerCase().startsWith("/realisation");

  // Le survol est géré par onMouseLeave ; il reste le clic extérieur et Échap.
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleMouseDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) setIsOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      aria-current={isActive ? "page" : undefined}
      className={`relative z-10 flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-colors duration-300 md:px-4 md:text-base ${
        isActive ? "text-white" : "text-white/80 hover:text-white"
      }`}
    >
      <NavLink to="/realisation" className="outline-none">
        Projets / Réalisations / Compétences
      </NavLink>
      <button
        type="button"
        aria-label="Liste des projets"
        aria-expanded={isOpen}
        aria-controls="projets-panel"
        className="flex items-center justify-center outline-none"
        onClick={() => setIsOpen((open) => !open)}
      >
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        // Le pt-3 place l'écart sous le trigger *dans* la zone survolée : la
        // souris ne quitte jamais le menu en descendant vers le panneau.
        <div
          id="projets-panel"
          className="absolute left-0 top-full z-50 w-72 pt-3"
        >
          <div className="flex flex-col gap-1 rounded-2xl border border-white/25 bg-white/15 p-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl backdrop-saturate-150">
            {PROJETS.map((projet) => (
              <NavLink
                key={projet.title}
                to={projet.detailUrl ?? `/realisation#${slugify(projet.title)}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                <FolderKanban className="h-4 w-4 shrink-0 text-white/50" />
                {projet.title}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjetsDropdown;
