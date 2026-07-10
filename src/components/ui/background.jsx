import { useEffect, useState } from "react";
import Beams from "../Beams.jsx";

const Background = () => {
  // Respecte la préférence système "réduire les animations" : évite un
  // rendu 3D permanent inutile (accessibilité + économie GPU/batterie).
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  // Onglet en arrière-plan = démonte le canvas WebGL (coupe tout rendu GPU)
  // plutôt que de continuer à animer un fond invisible.
  const [isVisible, setIsVisible] = useState(
    () => document.visibilityState === "visible",
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (event) => setPrefersReducedMotion(event.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () =>
      setIsVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );
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
      {!prefersReducedMotion && isVisible && (
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={8}
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
