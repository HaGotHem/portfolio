import tableauDeSynthese from "../assets/tableau_de_synthese.pdf";

// ── Page ───────────────────────────────────────────────
function PdfPreview({ url }) {
  return (
    <iframe
      src={url}
      title="PDF preview"
      className="rounded-lg border border-gray-200 dark:border-gray-700 w-full h-[80vh] mx-auto"
    />
  );
}

const TabSkill = () => (
  <section className="py-10 md:py-14">
    <PdfPreview url={tableauDeSynthese} />
  </section>
);

export default TabSkill;
