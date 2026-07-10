import { useEffect, useState } from "react";
import Beams from "../Beams.jsx";

const Background = () => {
  // Respecte la préférence système "réduire les animations" : évite un
  // rendu 3D permanent inutile (accessibilité + économie GPU/batterie).
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (event) => setPrefersReducedMotion(event.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        background: prefersReducedMotion ? "#0f161e" : undefined,
      }}
    >
      {!prefersReducedMotion && (
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={40}
        />
      )}
    </div>
  );
};

export default Background;
