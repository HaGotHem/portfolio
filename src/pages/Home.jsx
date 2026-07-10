import { TextEffect } from "../components/motion-primitives/text-effect.tsx";

const Home = () => {
  return (
    <section className="home-hero px-6 pt-28 md:pt-36">
      <div className="home-hero__container mx-auto max-w-7xl">
        <p className="home-hero__eyebrow">
          - Portfolio - BTS SIO SLAM - 2025/26
        </p>

        <div className="home-hero__grid" id="home-hero">
          <TextEffect
            per="line"
            as="div"
            className="home-hero__headline"
            segmentWrapperClassName="block overflow-hidden"
            variants={{
              container: {
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.18 },
                },
              },
              item: {
                hidden: { opacity: 0, y: 36 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: "easeOut" },
                },
              },
            }}
          >
            {`Développeur
en devenir,
curieux
de nature.`}
          </TextEffect>

          <aside className="home-hero__bio">
            <p>
              <strong>Thomas Bertacchi</strong> - étudiant en première année de
              BTS SIO option SLAM à Mediaschool Nice. Passionné par le
              développement web, les sports mécaniques et l&apos;aéronautique.
            </p>
            <p>
              Actuellement à la recherche d'un{" "}
              <strong>stage de 4 semaines</strong> entre{" "}
              <strong>juillet et août 2026</strong> pour mettre en pratique mes
              compétences et acquérir une première expérience professionnelle.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Home;
