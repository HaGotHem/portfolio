// Titre de page (Fraunces), avec support des <em> pour le mot mis en avant.
const PageTitle = ({ children, className = "", style }) => (
  <h1
    className={`mb-[clamp(2rem,4vw,3.5rem)] font-fraunces text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.9] font-medium tracking-[-0.03em] text-[#efebe4] [&_em]:font-fraunces-italic [&_em]:text-[#78f3d2] [&_em]:not-italic ${className}`}
    style={style}
  >
    {children}
  </h1>
);

export default PageTitle;
