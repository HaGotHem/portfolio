import { Link } from "react-router-dom";

const links = [
  {
    group: "Accueil",
    items: [
      {
        title: "Présentation",
        href: "/#home-hero",
      },
    ],
  },
  {
    group: "Projets",
    items: [
      {
        title: "Stages",
        href: "/stage",
      },
      {
        title: "Projets / Réalisations",
        href: "/realisation",
      },
    ],
  },
  {
    group: "Profil",
    items: [
      {
        title: "Compétences / Synthèse",
        href: "/tabskill",
      },
      {
        title: "CV",
        href: "/cv",
      },
      {
        title: "La Veille",
        href: "/veille",
      },
    ],
  },
  {
    group: "Contact",
    items: [
      {
        title: "Me contacter",
        href: "/contact",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border border-white/25 bg-white/10 pt-20 text-white backdrop-blur-2xl backdrop-saturate-150 shadow-[0_10px_30px_rgba(0,0,0,0.35)] rounded-2xl mt-auto self-center mb-6 mx-4 sm:mx-6 md:mx-8 px-6">
      <div className="mx-auto max-w-[80vw]">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="block size-fit">
              <p className="text-xl font-semibold">Portfolio</p>
              <p className="text-sm text-muted-foreground">Thomas Bertacchi</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3">
            {links.map((link, index) => (
              <div key={index} className="space-y-4 text-sm text-white">
                <span className="block font-bold text-xl">{link.group}</span>
                {link.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    to={item.href}
                    className="text-white/70 transition-all duration-300 ease-out hover:text-white hover:underline hover:text-shadow-[0_0_16px_rgba(255,255,255,0.40)] hover:translate-y-0.5 block"
                  >
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            © {2026} Thomas Bertacchi, tous droits réservés
          </span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            <a
              href="https://www.linkedin.com/in/thomas-bertacchi-875b36396/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                ></path>
              </svg>
            </a>
            <a
              href="https://github.com/hagothem"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.412c-.35-.187-.85-.65-.013-.662c.787-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
