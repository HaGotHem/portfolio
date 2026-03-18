import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const containerRef = useRef(null);
  const [pillStyle, setPillStyle] = useState(null);

  useEffect(() => {
    const activeLink = containerRef.current?.querySelector(
      'a[aria-current="page"]',
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

  const linkClass = ({ isActive }) =>
    `relative z-10 px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
      isActive ? "text-white" : ""
    }`;

  return (
    <div className="nav-container flex justify-around max-w-xxl items-center gap-10">
      <div className="nav-header bg-auto bg-white border-2-white rounded-full p-4 mx-auto mt-10 flex">
        <p className="nav-header-title text-xl font-bold flex">Mon Portfolio</p>
      </div>
      <div
        ref={containerRef}
        className="navlinks relative bg-white rounded-full p-4 mx-auto mt-10 flex justify-between gap-10 text-l"
      >
        {pillStyle && (
          <div
            className="absolute bg-black rounded-full transition-all duration-300 ease-in-out"
            style={{
              left: pillStyle.left,
              width: pillStyle.width,
              top: pillStyle.top,
              height: pillStyle.height,
            }}
          />
        )}
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
