import { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, FolderKanban } from "lucide-react";
import logo from "@/assets/logo.svg";
import { PROJETS } from "@/data/projets";
import { slugify } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();
  const containerRef = useRef(null);
  // Position/size of the sliding "pill" highlight behind the active nav link.
  const [pillStyle, setPillStyle] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // "Projets / Réalisations" dropdown: open state, its floating panel's
  // fixed-position coords, and refs used for outside-click detection.
  const [isProjetsOpen, setIsProjetsOpen] = useState(false);
  const [projetsMenuPos, setProjetsMenuPos] = useState(null);
  const projetsBtnRef = useRef(null);
  const projetsMenuRef = useRef(null);
  // Delays closing on mouseleave so moving the cursor from the button
  // down into the panel doesn't close it before it arrives.
  const closeTimeoutRef = useRef(null);

  // Split around the dropdown trigger so it can be inserted between them
  // while keeping the desktop pill nav and the mobile menu in the same order.
  const linksBefore = [
    { to: "/", label: "Accueil", end: true },
    { to: "/stage", label: "Stages" },
  ];
  const linksAfter = [
    { to: "/tabskill", label: "Compétences / Synthèse" },
    { to: "/veille", label: "La Veille" },
    { to: "/cv", label: "CV" },
    { to: "/contact", label: "Contact" },
  ];

  // The dropdown trigger isn't a NavLink (its `to` targets don't match
  // /realisation), so its "active" state is derived manually here.
  const isProjetsActive = location.pathname
    .toLowerCase()
    .startsWith("/realisation");

  // Measures whichever element currently has aria-current="page" (a NavLink
  // or the dropdown trigger) and moves the pill under it. Relies on that
  // element's offsetParent being this nav (the nearest `relative` ancestor) —
  // wrapping any nav item in another `relative` container breaks the math.
  useEffect(() => {
    const activeLink = containerRef.current?.querySelector(
      '[aria-current="page"]',
    );
    if (activeLink) {
      setPillStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
        top: activeLink.offsetTop,
        height: activeLink.offsetHeight,
      });
    }
  }, [location.pathname]);

  // Ferme les menus au changement de page. Calculé pendant le rendu (plutôt
  // que dans un effet) pour éviter un rendu en cascade évitable.
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setIsMenuOpen(false);
    setIsProjetsOpen(false);
  }

  // Closes the dropdown on outside click or Escape while it's open.
  useEffect(() => {
    if (!isProjetsOpen) return undefined;
    const handleClickOutside = (event) => {
      if (
        projetsBtnRef.current?.contains(event.target) ||
        projetsMenuRef.current?.contains(event.target)
      ) {
        return;
      }
      setIsProjetsOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsProjetsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isProjetsOpen]);

  useEffect(
    () => () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    },
    [],
  );

  // The panel is rendered with position:fixed (not absolute inside the nav)
  // because the pill nav has overflow-hidden for its rounded corners, which
  // would otherwise clip a dropdown extending below it. getBoundingClientRect
  // gives viewport coordinates, which is what "fixed" positioning expects.
  const openProjetsMenu = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    const rect = projetsBtnRef.current?.getBoundingClientRect();
    if (rect) {
      setProjetsMenuPos({ left: rect.left, top: rect.bottom + 10 });
    }
    setIsProjetsOpen(true);
  };

  const scheduleCloseProjetsMenu = () => {
    closeTimeoutRef.current = setTimeout(() => setIsProjetsOpen(false), 150);
  };

  const toggleProjetsMenu = () => {
    if (isProjetsOpen) {
      setIsProjetsOpen(false);
    } else {
      openProjetsMenu();
    }
  };

  const linkClass = ({ isActive }) =>
    `relative z-10 rounded-full px-3 py-2 text-sm font-semibold transition-colors duration-300 outline-none md:px-4 md:text-base ${
      isActive ? "text-white" : "text-white/80 hover:text-white"
    }`;

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 md:px-8">
      <div className="mx-auto flex w-full max-w-10xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full items-center justify-between gap-3 md:w-auto">
          <div className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-white/25 bg-white/18 px-4 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.30)] backdrop-blur-2xl backdrop-saturate-150 transition hover:border-white/35 hover:bg-white/22">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_0%,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0.10)_38%,rgba(255,255,255,0.00)_70%)]" />
            <img
              src={logo}
              alt="Logo Thomas Bertacchi"
              className="relative z-10 h-6 w-6 opacity-95 transition group-hover:opacity-100"
            />
            <p className="hidden text-sm font-semibold tracking-wide text-white/90  md:block">
              Mon Portfolio
            </p>
          </div>

          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/18 text-white shadow-[0_10px_40px_rgba(0,0,0,0.30)] backdrop-blur-2xl backdrop-saturate-150 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Ouvrir le menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-main-nav"
          >
            <span className="sr-only">Menu</span>
            <span className="absolute h-0.5 w-5 -translate-y-1.5 rounded bg-white transition-all" />
            <span className="absolute h-0.5 w-5 rounded bg-white transition-all" />
            <span className="absolute h-0.5 w-5 translate-y-1.5 rounded bg-white transition-all" />
          </button>
        </div>

        <nav
          ref={containerRef}
          className="relative hidden w-full items-center gap-2 overflow-hidden rounded-full border border-white/25 bg-white/18 p-2 shadow-[0_10px_40px_rgba(0,0,0,0.30)] backdrop-blur-2xl backdrop-saturate-150 md:flex md:w-auto"
        >
          <div className="pointer-events-none hidden absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_0%,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0.10)_38%,rgba(255,255,255,0.00)_70%)]  " />
          {pillStyle && (
            <div
              className="absolute rounded-full bg-white/30 ring-1 ring-white/35 shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-all duration-300 ease-in-out"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
                top: pillStyle.top,
                height: pillStyle.height,
              }}
            />
          )}
          {linksBefore.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}

          <div
            ref={projetsBtnRef}
            onMouseEnter={openProjetsMenu}
            onMouseLeave={scheduleCloseProjetsMenu}
            onFocus={openProjetsMenu}
            aria-current={isProjetsActive ? "page" : undefined}
            className={`relative z-10 flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-colors duration-300 md:px-4 md:text-base ${
              isProjetsActive ? "text-white" : "text-white/80 hover:text-white"
            }`}
          >
            <NavLink
              to="/realisation"
              aria-haspopup="true"
              aria-expanded={isProjetsOpen}
              aria-controls="projets-panel"
              className="outline-none"
            >
              Projets / Réalisations
            </NavLink>
            <button
              type="button"
              aria-label={
                isProjetsOpen
                  ? "Réduire la liste des projets"
                  : "Déplier la liste des projets"
              }
              aria-expanded={isProjetsOpen}
              aria-controls="projets-panel"
              className="flex items-center justify-center outline-none"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                toggleProjetsMenu();
              }}
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isProjetsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {linksAfter.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {isProjetsOpen && projetsMenuPos && (
          <div
            id="projets-panel"
            ref={projetsMenuRef}
            onMouseEnter={openProjetsMenu}
            onMouseLeave={scheduleCloseProjetsMenu}
            style={{ position: "fixed", left: projetsMenuPos.left, top: projetsMenuPos.top }}
            className="z-50 hidden w-72 flex-col gap-1 rounded-2xl border border-white/25 bg-white/15 p-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl backdrop-saturate-150 md:flex mt-2"
          >
            {PROJETS.map((projet) => (
              <NavLink
                key={projet.title}
                to={`/realisation#${slugify(projet.title)}`}
                onClick={() => setIsProjetsOpen(false)}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                <FolderKanban className="h-4 w-4 shrink-0 text-white/50" />
                {projet.title}
              </NavLink>
            ))}
          </div>
        )}

        {isMenuOpen && (
          <nav
            id="mobile-main-nav"
            className="flex flex-col gap-2 rounded-2xl border border-white/25 bg-white/15 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl backdrop-saturate-150 md:hidden"
          >
            {linksBefore.map((link) => (
              <NavLink
                key={`mobile-${link.to}`}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-white/22 text-white"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="flex flex-col gap-1">
              <NavLink
                to="/realisation"
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-white/22 text-white"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                Projets / Réalisations
              </NavLink>
              <div className="ml-3 flex flex-col gap-1 border-l border-white/15 pl-3">
                {PROJETS.map((projet) => (
                  <NavLink
                    key={`mobile-projet-${projet.title}`}
                    to={`/realisation#${slugify(projet.title)}`}
                    className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium text-white/65 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <FolderKanban className="h-3.5 w-3.5 shrink-0 text-white/40" />
                    {projet.title}
                  </NavLink>
                ))}
              </div>
            </div>

            {linksAfter.map((link) => (
              <NavLink
                key={`mobile-${link.to}`}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-white/22 text-white"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
