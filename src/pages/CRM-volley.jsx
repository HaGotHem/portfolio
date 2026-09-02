import { motion } from "motion/react";
import {
  Target,
  Puzzle,
  Hammer,
  Bug,
  BarChart3,
  GraduationCap,
  Info,
} from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import TechTags from "@/components/TechTags";
import Capture from "@/components/Capture";

const CAPTURE = (nom) => `/captures-crm/${nom}.jpg`;

const REPO = "https://github.com/HaGotHem/CRM-Club-Volley";

const TECH = [
  "PHP 8.2",
  "Slim 4",
  "PostgreSQL 16",
  "Twig",
  "Docker",
  "Chart.js",
  "API Weezevent",
  "API Brevo",
];

// Contributions personnelles, avec leurs traces dans le dépôt (commit ou PR).
const CONTRIBUTIONS = [
  {
    titre: "L'interface complète, du login au responsive",
    detail:
      "j'ai transcrit la charte du club en variables CSS, construit la page de connexion (mobile d'abord, puis desktop) avec sa validation de formulaire et son retour visuel d'erreur, puis la navigation commune à toutes les pages : sidebar desktop, navbar mobile, menu burger, footer.",
    liens: [
      { label: "PR #1", href: `${REPO}/pull/1` },
      { label: "PR #2", href: `${REPO}/pull/2` },
    ],
  },
  {
    titre: "La page Statistiques, du SQL à l'affichage",
    detail:
      "les routes GET /api/stats/period et GET /api/stats/event/{id} — 238 lignes d'agrégation SQL — et le front qui les consomme (stats-events.js, 192 lignes). C'est la partie du projet dont je suis le plus satisfait.",
    liens: [
      {
        label: "commit f846019",
        href: `${REPO}/commit/f84601982f7bd6746b0dd995dc1823e14a27648f`,
      },
    ],
  },
  {
    titre: "L'export sélectif vers Brevo",
    detail:
      "choisir des groupes ou des contacts, et les envoyer dans Brevo sans créer de doublons. Route POST /api/sync/brevo/export, trois méthodes de BrevoService, et la modale de sélection côté interface.",
    liens: [
      {
        label: "commit 5328cdd",
        href: `${REPO}/commit/5328cdd0a9569ae26cf17ee8ace3c7eb94a59f17`,
      },
    ],
  },
  {
    titre: "La remise à plat du dépôt",
    detail:
      "au bout de deux jours le projet contenait des dossiers dupliqués et imbriqués, et ne se lançait plus proprement. J'ai supprimé 13 116 lignes de doublons, reconstruit l'arborescence sur le standard PSR-4, et sorti du dépôt les scripts qui contenaient des clés d'API. J'ai ensuite configuré OPcache pour réduire le temps de réponse en conteneur.",
    liens: [
      {
        label: "commit eec9011",
        href: `${REPO}/commit/eec901131a328185063d23f020e63a9ef34e059b`,
      },
    ],
  },
];

const CAPTURES = [
  {
    titre: "L'interface, du login au responsive",
    items: [
      { src: "01-login-desktop", legende: "Page de connexion, version desktop" },
      {
        src: "02-login-erreur",
        legende: "Validation du formulaire : le retour visuel d'erreur",
      },
      { src: "07-login-mobile", legende: "La même page, construite mobile d'abord" },
      { src: "09-menu-burger-mobile", legende: "Menu burger, version mobile" },
    ],
  },
  {
    titre: "Le tableau de bord et les statistiques",
    items: [
      {
        src: "03b-dashboard-full",
        legende: "Tableau de bord, la courbe d'affluence une fois animée",
      },
      { src: "08-dashboard-mobile", legende: "Tableau de bord, version mobile" },
      {
        src: "04-stats",
        legende: "Page Statistiques — les agrégats, tous événements confondus",
      },
      {
        src: "04c-stats-evenement-selectionne",
        legende: "Les mêmes agrégats, filtrés sur un seul événement",
      },
      {
        src: "04b-stats-full",
        legende: "Affluence et recette par événement sur la saison",
      },
      { src: "10-stats-mobile", legende: "Statistiques, version mobile" },
    ],
  },
  {
    titre: "Contacts, export Brevo et événements",
    items: [
      { src: "05-contacts", legende: "Gestion des contacts et des groupes" },
      {
        src: "05b-contacts-modale-export-brevo",
        legende: "Modale de sélection pour l'export Brevo",
      },
      { src: "06-events", legende: "Événements synchronisés depuis Weezevent" },
    ],
  },
];

const EXTRAIT_BREVO = `foreach (array_chunk($rows, 1000) as $chunk) {
    $this->client->post('/v3/contacts/import', ['json' => [
        'jsonBody'               => $chunk,
        'updateExistingContacts' => true,
        'listIds'                => $listIds,
    ]]);
}`;

const CHIFFRES = [
  {
    valeur: "35 / 82",
    libelle: "commits sur main — premier contributeur du projet",
  },
  {
    valeur: "1 923 / 8 552",
    libelle: "lignes de mon code encore en place (git blame)",
  },
  {
    valeur: "3 / 5",
    libelle: "Pull Requests ouvertes, dont une avec revue appliquée avant merge",
  },
  { valeur: "4 / 23", libelle: "endpoints d'API du projet écrits par moi" },
];

const CAPTURES_GITHUB = [
  {
    src: "11-github-pr1-review",
    legende: "PR #1 — la revue de code appliquée avant le merge",
  },
  {
    src: "12-github-pr5",
    legende: "PR #5 — la connexion du front au back, relue par un coéquipier",
  },
  {
    src: "14-github-commit-stats-brevo",
    legende: "Le commit de la page Statistiques et de l'export Brevo",
  },
  {
    src: "13-github-commits",
    legende: "L'historique des commits sur main, à six contributeurs",
  },
  {
    src: "15-github-repo",
    legende: "Le dépôt après la remise à plat de l'arborescence",
  },
];

const APPRENTISSAGES = [
  {
    titre: "Consommer une API qu'on ne maîtrise pas",
    detail:
      "Weezevent ne dit pas si un billet est vendu ou offert : il ne donne que le libellé du tarif. J'ai dû faire la distinction moi-même, directement dans l'agrégat SQL, plutôt que de ramener 26 000 billets en PHP pour les compter.",
  },
  {
    titre: "Travailler à six sur le même dépôt",
    detail:
      "branches de fonctionnalité, pull requests, conflits de merge à résoudre à la main quand deux d'entre nous touchaient la même page. Sur ma première PR, un encadrant a demandé une modification du footer ; je l'ai appliquée avant le merge, et c'est cet aller-retour qui m'a fait comprendre à quoi sert vraiment une revue de code.",
  },
  {
    titre: "Un dépôt propre n'est pas cosmétique",
    detail:
      "les deux heures passées à nettoyer l'arborescence ont débloqué toute l'équipe : jusque-là, personne n'arrivait à lancer le projet de la même manière.",
  },
];

// ── Sous-composants ────────────────────────────────────

const SectionHeader = ({ icon: Icon, title }) => (
  <div className="mb-4 flex items-center gap-2.5">
    <Icon size={13} className="text-[#78f3d2]/65" />
    <p className="mb-0 text-[0.7rem] uppercase tracking-[0.22em] text-[rgba(232,229,223,0.78)]">
      {title}
    </p>
  </div>
);

const LabelCaptures = ({ children }) => (
  <p className="mb-0 text-[0.7rem] uppercase tracking-[0.22em] text-[rgba(232,229,223,0.55)]">
    {children}
  </p>
);

const LienDepot = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#78f3d2]/80 underline decoration-[#78f3d2]/30 underline-offset-2 transition-colors duration-200 hover:text-[#78f3d2] hover:decoration-[#78f3d2]/60"
  >
    {children}
  </a>
);

// ── Page ───────────────────────────────────────────────

const CRMVolley = () => (
  <section className="py-10 md:py-14">
    <p className="home-hero__eyebrow">— BTS SIO SLAM · Nice Volley-Ball</p>
    <h1 className="page-title">
      CRM Club <em>Volley</em>
    </h1>

    <p className="mt-2 max-w-4xl font-fraunces text-lg leading-snug text-[#efebe4]">
      Relier la billetterie d'un club de volley à son outil d'e-mailing
    </p>
    <p className="mt-2 max-w-4xl text-sm leading-relaxed text-[rgba(232,229,223,0.75)]">
      Projet d'équipe de BTS SIO SLAM, juin 2026 — 6 développeurs, 5 jours de
      développement. J'étais responsable du dépôt.
    </p>

    <div className="mt-4">
      <TechTags tech={TECH} />
    </div>

    <motion.div {...fadeInUp(0)} className="mt-8">
      <Capture
        src={CAPTURE("03-dashboard")}
        legende="Le tableau de bord : contacts, groupes, places vendues et affluence"
      />
    </motion.div>

    <div className="mt-6 grid gap-5">
      {/* ── Le problème ─────────────────────────────── */}
      <motion.div
        {...fadeInUp(0)}
        className="rounded-2xl border border-white/16 bg-white/8 p-6 md:p-8"
      >
        <SectionHeader icon={Target} title="Le problème" />
        <p className="text-sm leading-relaxed text-[rgba(232,229,223,0.85)]">
          Le Nice Volley-Ball vend ses billets sur{" "}
          <strong className="text-[#f8f4ec]">Weezevent</strong> et envoie ses
          newsletters avec <strong className="text-[#f8f4ec]">Brevo</strong>.
          Les deux outils s'ignorent : un spectateur qui achète une place
          n'entre jamais dans les listes de diffusion du club, et personne au
          bureau ne sait combien de places ont réellement été vendues sur la
          saison — l'information existe, mais elle est éclatée entre deux
          interfaces.
        </p>
      </motion.div>

      {/* ── La solution ─────────────────────────────── */}
      <motion.div
        {...fadeInUp(0.08)}
        className="rounded-2xl border border-white/16 bg-white/8 p-6 md:p-8"
      >
        <SectionHeader icon={Puzzle} title="La solution" />
        <p className="mb-4 text-sm leading-relaxed text-[rgba(232,229,223,0.85)]">
          Un CRM interne qui fait le pont. Il rapatrie les participants
          Weezevent dans une base PostgreSQL, permet de les regrouper, puis de
          pousser ces groupes vers les listes Brevo en un clic. Par-dessus, un
          tableau de bord donne au club ce qu'il n'avait pas : places vendues,
          invitations, recette et affluence, par événement et par saison.
        </p>
        <p className="text-sm leading-relaxed text-[rgba(232,229,223,0.85)]">
          L'application est découpée en couches — modèles, repositories,
          services d'API, contrôleurs, vues Twig — avec une règle d'équipe
          stricte :{" "}
          <strong className="text-[#f8f4ec]">
            aucun SQL en dehors des repositories, et toujours en requête
            préparée.
          </strong>
        </p>
      </motion.div>

      {/* ── Ce que j'ai fait ────────────────────────── */}
      <motion.div
        {...fadeInUp(0)}
        className="rounded-2xl border border-white/16 bg-white/8 p-6 md:p-8"
      >
        <SectionHeader icon={Hammer} title="Ce que j'ai fait" />
        <p className="mb-5 text-sm leading-relaxed text-[rgba(232,229,223,0.85)]">
          J'étais responsable du dépôt et j'ai couvert le front-end de bout en
          bout, plus deux morceaux métier côté serveur.
        </p>
        <ul className="flex flex-col gap-4">
          {CONTRIBUTIONS.map((c) => (
            <li
              key={c.titre}
              className="border-l border-[rgba(120,243,210,0.28)] pl-4 text-sm leading-relaxed text-[rgba(232,229,223,0.8)]"
            >
              <strong className="text-[#f8f4ec]">{c.titre}</strong>
              {" — "}
              {c.detail}
              <span className="mt-1.5 flex flex-wrap gap-x-3 text-[0.7rem]">
                {c.liens.map((l) => (
                  <LienDepot key={l.href} href={l.href}>
                    {l.label}
                  </LienDepot>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* ── Captures de l'application ───────────────── */}
      {CAPTURES.map((groupe) => (
        <motion.div key={groupe.titre} {...fadeInUp(0.08)} className="grid gap-4">
          <LabelCaptures>{groupe.titre}</LabelCaptures>
          <div className="grid gap-5 sm:grid-cols-2">
            {groupe.items.map((c) => (
              <Capture key={c.src} src={CAPTURE(c.src)} legende={c.legende} />
            ))}
          </div>
        </motion.div>
      ))}

      {/* ── Le problème technique le plus intéressant ─ */}
      <motion.div
        {...fadeInUp(0)}
        className="rounded-2xl border border-[rgba(120,243,210,0.22)] bg-[rgba(120,243,210,0.04)] p-6 md:p-8"
      >
        <SectionHeader
          icon={Bug}
          title="Le problème technique le plus intéressant"
        />
        <p className="mb-4 text-sm leading-relaxed text-[rgba(232,229,223,0.85)]">
          Ma première version de l'export Brevo appelait l'API une fois par
          contact. Ça marchait très bien en démo avec dix contacts, et ça
          tombait en timeout HTTP dès qu'on dépassait quelques centaines —
          exactement le cas d'usage réel du club, qui voulait exporter des
          groupes entiers.
        </p>
        <p className="mb-4 text-sm leading-relaxed text-[rgba(232,229,223,0.85)]">
          Le réflexe aurait été d'augmenter le timeout. En lisant la
          documentation Brevo, j'ai vu que l'API expose un endpoint d'import en
          masse, <code className="font-mono text-[#78f3d2]">
            POST /v3/contacts/import
          </code>
          , traité de façon asynchrone de leur côté. Je suis passé d'un appel
          par contact à{" "}
          <strong className="text-[#f8f4ec]">un appel par lot de 1 000</strong>{" "}
          :
        </p>
        <div className="mb-4 overflow-x-auto rounded-xl border border-white/12 bg-black/30 p-4">
          <pre className="font-mono text-[0.72rem] leading-relaxed text-[rgba(232,229,223,0.85)]">
            {EXTRAIT_BREVO}
          </pre>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-[rgba(232,229,223,0.85)]">
          Un export de 2 000 contacts passe de 2 000 requêtes HTTP à 2. Un
          deuxième problème est apparu dans la foulée : chaque export recréait
          les mêmes listes. J'ai ajouté une recherche paginée de la liste par
          son nom, et mémorisé l'identifiant Brevo directement sur le segment —
          le second export réutilise la liste au lieu d'en fabriquer une copie.
        </p>
        <p className="font-fraunces text-lg leading-snug text-[#78f3d2]">
          Tester avec un volume réaliste dès le début.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[rgba(232,229,223,0.8)]">
          Le bug n'était pas dans le code, il était dans le fait que je ne
          l'avais jamais lancé sur autre chose qu'un jeu de test minuscule.
        </p>
      </motion.div>

      {/* ── En chiffres ─────────────────────────────── */}
      <motion.div
        {...fadeInUp(0.08)}
        className="rounded-2xl border border-white/16 bg-white/8 p-6 md:p-8"
      >
        <SectionHeader icon={BarChart3} title="En chiffres" />
        <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CHIFFRES.map((c) => (
            <div key={c.libelle}>
              <dt className="font-fraunces text-2xl leading-tight text-[#78f3d2]">
                {c.valeur}
              </dt>
              <dd className="mt-1 text-xs leading-relaxed text-[rgba(232,229,223,0.7)]">
                {c.libelle}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 flex items-start gap-2.5 border-t border-white/10 pt-5 text-xs leading-relaxed text-[rgba(232,229,223,0.6)]">
          <Info size={13} className="mt-0.5 shrink-0 text-[#78f3d2]/65" />
          <span>
            Sur la page « Contributors » de GitHub je n'apparais qu'avec 2
            commits : mes autres commits sont signés avec une adresse e-mail
            comportant une faute de frappe, non rattachée à mon compte. Ils
            portent bien mon nom d'auteur et sont visibles via{" "}
            <code className="font-mono text-[rgba(232,229,223,0.75)]">
              git shortlog -sn HEAD
            </code>
            .
          </span>
        </p>
      </motion.div>

      {/* ── Captures GitHub ─────────────────────────── */}
      <motion.div {...fadeInUp(0.08)} className="grid gap-4">
        <LabelCaptures>Les traces dans le dépôt</LabelCaptures>
        <div className="grid gap-5 sm:grid-cols-2">
          {CAPTURES_GITHUB.map((c) => (
            <Capture key={c.src} src={CAPTURE(c.src)} legende={c.legende} />
          ))}
        </div>
      </motion.div>

      {/* ── Ce que ce projet m'a appris ─────────────── */}
      <motion.div
        {...fadeInUp(0)}
        className="rounded-2xl border border-white/16 bg-white/8 p-6 md:p-8"
      >
        <SectionHeader
          icon={GraduationCap}
          title="Ce que ce projet m'a appris"
        />
        <ul className="flex flex-col gap-4">
          {APPRENTISSAGES.map((a) => (
            <li
              key={a.titre}
              className="border-l border-[rgba(120,243,210,0.28)] pl-4 text-sm leading-relaxed text-[rgba(232,229,223,0.8)]"
            >
              <strong className="text-[#f8f4ec]">{a.titre}</strong>
              {" — "}
              {a.detail}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* ── Dépôt ───────────────────────────────────── */}
      <motion.div
        {...fadeInUp(0.08)}
        className="rounded-2xl border border-white/16 bg-white/8 p-6 md:p-8"
      >
        <a
          href={REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/28 px-3.5 py-1.5 text-xs text-[#efebe4]/85 transition-colors duration-200 hover:border-white/45 hover:text-[#efebe4]"
        >
          Voir le repo
        </a>
      </motion.div>
    </div>
  </section>
);

export default CRMVolley;
