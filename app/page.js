"use client";

import React, { useState, useEffect } from "react";
import Footnote from "./components_web/footnote";
import Footnotemobile from "./components_mobile/footnote_mobile";
import Skills from "./components_web/skills";
import Skillsmobile from "./components_mobile/skills_mobile";
import Projects from "./components_web/projects";
import Projectsmobile from "./components_mobile/projects_mobile";
import Aboutme from "./components_web/aboutme";
import Aboutmemobile from "./components_mobile/aboutme_mobile";
import Landscape from "./components_web/landscape";
import Landscapemobile from "./components_mobile/landscape_mobile";

export default function Portfolio() {
const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      const handleMediaChange = (e) => {
        setIsMobile(e.matches);
      };
      setIsMobile(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleMediaChange);
      return () => {
        mediaQuery.removeEventListener("change", handleMediaChange);
      };
    }
  }, []);
  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 768px)");
  //   const handleMediaChange = (e) => {
  //     setIsMobile(e.matches);
  //   };
  //   setIsMobile(mediaQuery.matches);
  //   mediaQuery.addEventListener("change", handleMediaChange);
  //   return () => {
  //     mediaQuery.removeEventListener("change", handleMediaChange);
  //   };
  // }, []);

  return (
    <div className="main">
      {isMobile ? (
        <div>
          <Landscapemobile />
          <Aboutmemobile />
          <Projectsmobile />
          <Skillsmobile />
          <Footnotemobile />
        </div>
      ) : (
        <div>
          <Landscape />
          <Aboutme />
          <Projects />
          <Skills />
          <Footnote />
        </div>
      )}
    </div>
  );
}
