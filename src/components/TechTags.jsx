// Liste de "puces" technologies, réutilisée sur les cartes projet et le CV.
const TechTags = ({ tech }) => (
  <ul className="tech-tags">
    {tech.map((t) => (
      <li key={t}>{t}</li>
    ))}
  </ul>
);

export default TechTags;
