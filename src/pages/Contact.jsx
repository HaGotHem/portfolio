import { motion } from "motion/react";
import { Mail, Github, Phone, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { fadeInUp } from "@/lib/animations";
import Footer from "../components/ui/footer.jsx";

const FORMSPREE_ID = "mgojrorg";

// ── Données ────────────────────────────────────────────

const CONTACT_EMAIL = "thomas.bertacchi@mediaschool.me";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 6 76 31 25 72",
    href: "tel:+33676312572",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/hagothem",
    href: "https://github.com/hagothem",
  },
];

// Classe partagée pour les champs de formulaire
const INPUT_CLASS =
  "w-full rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-[#efebe4] placeholder-white/20 outline-none transition-colors duration-200 focus:border-[rgba(120,243,210,0.35)] focus:bg-white/7";

// ── Page ───────────────────────────────────────────────

const Contact = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  return (
    <section className="py-10 md:py-14">
      <p className="home-hero__eyebrow">— Prenons contact</p>
      <h1 className="page-title">
        Me <em>contacter</em>
      </h1>

      <div className="grid gap-6 lg:grid-cols-[1fr_260px]">
        {/* ── Formulaire ──────────────────────────────── */}
        {state.succeeded ? (
          <motion.div
            {...fadeInUp(0)}
            className="flex flex-col items-start justify-center gap-2 rounded-2xl border border-white/10 bg-white/4 p-6 md:p-8"
          >
            <p className="text-sm font-semibold text-[#78f3d2]">
              Message envoyé !
            </p>
            <p className="text-xs text-[rgba(232,229,223,0.7)]">
              Merci, je vous répondrai dès que possible.
            </p>
          </motion.div>
        ) : (
          <motion.form
            {...fadeInUp(0)}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/4 p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.68rem] uppercase tracking-[0.15em] text-white/38">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  className={INPUT_CLASS}
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.68rem] uppercase tracking-[0.15em] text-white/38">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="votre@email.com"
                  className={INPUT_CLASS}
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-xs text-red-400"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[0.68rem] uppercase tracking-[0.15em] text-white/38">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Votre message..."
                rows={5}
                className={`${INPUT_CLASS} resize-none`}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-xs text-red-400"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="flex w-fit items-center gap-2 rounded-full border border-[rgba(120,243,210,0.3)] bg-[rgba(120,243,210,0.08)] px-5 py-2.5 text-sm font-semibold text-[#78f3d2] transition-colors duration-200 hover:bg-[rgba(120,243,210,0.15)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send size={14} />
              {state.submitting ? "Envoi..." : "Envoyer"}
            </button>
          </motion.form>
        )}

        {/* ── Liens directs ───────────────────────────── */}
        <motion.div {...fadeInUp(0.1)} className="flex flex-col gap-3">
          <p className="section-label">Liens directs</p>
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/4 px-4 py-3.5 transition-colors duration-200 hover:border-white/18 hover:bg-white/7"
            >
              <link.icon size={15} className="shrink-0 text-[#78f3d2]/65" />
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.12em] text-white/32">
                  {link.label}
                </p>
                <p className="text-xs text-[rgba(232,229,223,0.7)]">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
