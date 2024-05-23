"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import museum from "../public/museum.png";
import bunny from "../public/bunny.png";
import calculator from "../public/calculator.png";
import resume from "../public/resume.png";
import art from "../public/art.png";
import mountains from "../public/mountains.webp";
import backgroundimg from "../public/background-smaller.webp";
import buildingsmobile from "../public/buildings v2.webp";
import treesmobile from "../public/trees v2.webp";
import Footnote from "./components_web/footnote";
import Footnotemobile from "./components_mobile/footnote_mobile";
import Skills from "./components_web/skills";
import Skillsmobile from "./components_mobile/skills_mobile";
import Projects from "./components_web/projects";
import Projectsmobile from "./components_mobile/projects_mobile";
import Aboutme from "./components_web/aboutme";
import Aboutmemobile from "./components_mobile/aboutme_mobile";
import Landscape from "./components_web/landscape";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [zoomFactor, setZoomFactor] = useState(1);
  const [showTint, setShowTint] = useState(false);
  const [elementVisibility, setElementVisibility] = useState({
    element1: false,
    element2: false,
    element3: false,
    element4: false,
    element5: false,
  });
  const [lineLength, setLineLength] = useState(0);
  const [startDrawingPoint, setStartDrawingPoint] = useState(600);

  // const [icons, setIcons] = useState([
  //   { src: htmlimage, alt: "HTML" },
  //   { src: cssimage, alt: "CSS" },
  //   { src: jsimage, alt: "JavaScript" },
  //   { src: reactimage, alt: "React" },
  //   { src: uiuximage, alt: "UI/UX" },
  //   { src: figmaimage, alt: "Figma" },
  //   { src: temptwo, alt: "Placeholder" },
  //   { src: temptwo, alt: "Placeholder" },
  // ]);

  const [srcBunny, setSrcBunny] = useState(bunny);
  const [srcMuseum, setSrcMuseum] = useState(museum);
  const [srcCalculator, setSrcCalculator] = useState(calculator);
  const [srcArt, setSrcArt] = useState(art);
  const [srcResume, setSrcResume] = useState(resume);

  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaChange = (e) => {
      setIsMobile(e.matches);
    };

    // Set initial state
    setIsMobile(mediaQuery.matches);

    // Add listener
    mediaQuery.addEventListener("change", handleMediaChange);

    // Clean up listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);
  const endDrawingPoint = 800;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPositions = window.scrollY;
      if (
        scrollPositions >= startDrawingPoint &&
        scrollPositions < endDrawingPoint
      ) {
        const newLength = scrollPositions - startDrawingPoint;
        setLineLength(newLength);
      } else if (scrollPositions >= endDrawingPoint) {
        const newLengths = scrollPositions - 200;
        setStartDrawingPoint(newLengths);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const zoomInThreshold = 800;
    const maxZoomFactor = 1.3;
    let newZoomFactor = 1 + scrollPosition / zoomInThreshold;
    newZoomFactor = Math.min(newZoomFactor, maxZoomFactor);

    setZoomFactor(newZoomFactor);
  }, [scrollPosition]);

 
  const mountainsYMobile = Math.max(0, scrollPosition * 0.15);
  const mountainsScaleMobile = Math.min(1 + scrollPosition / 2000, 8);

  const buildingsYMobile = Math.max(0, scrollPosition * 0.5);
  const buildingsScaleMobile = Math.min(1 + scrollPosition / 800, 8);

  const treesYMobile = Math.max(0, scrollPosition * 0.65);
  const treesScaleMobile = Math.min(1 + scrollPosition / 800, 10);

  useEffect(() => {
    if (scrollPosition >= 1000 && scrollPosition < 1500) {
      setShowTint(true);
    }
  }, [scrollPosition]);

  const darkness = Math.min(scrollPosition / 1500, 1);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main">
      {isMobile ? (
        <div>
          <div className="background">
            <Image className="backgroundimg" src={backgroundimg} />
            <div className="heading_container_mobile">
              <h1 className="name_intro_mobile">HELLO, MY NAME IS</h1>
              <h1 className="name_mobile">ULA LAPKUS</h1>
              <h1 className="name_caption_mobile">
                SELF-TAUGHT FULLSTACK ENGINEER
              </h1>
              <h1 className="name_caption_mobile">IN SALT LAKE CITY, UT</h1>
            </div>
            <Image
              src={mountains}
              className="mountains_mobile"
              style={{
                transform: `translateY(${mountainsYMobile}px) scale(${mountainsScaleMobile})`,
              }}
            />
            <Image
              className="buildings_mobile"
              src={buildingsmobile}
              style={{
                transform: `translateY(${buildingsYMobile}px) scale(${buildingsScaleMobile})`,
              }}
            />
            <Image
              className="trees_mobile"
              src={treesmobile}
              style={{
                transform: `translateY(${treesYMobile}px) scale(${treesScaleMobile})`,
              }}
            />

            {showTint && (
              <div
                className="dark-tint"
                style={{
                  backgroundColor: `rgba(0, 0, 0, ${darkness})`,
                  height: "200vh",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 1,
                }}
              />
            )}
          </div>
          <div className="new_filler">
            <div className="new_filler_child"></div>
          </div>
          <Aboutmemobile />
          <Projectsmobile />
          <Skillsmobile />
          <Footnotemobile />
        </div>
      ) : (
        <div>
          <Landscape />
          <div className="new_filler">
            <div className="new_filler_child"></div>
          </div>
          <Aboutme />
          <Projects />
          <Skills />
          <Footnote />
        </div>
      )}

      {/* {icons.map((icon, index) => (
            <div key={index} className="skillimg">
              <Image className="skill" src={icon.src} alt={icon.alt} />
            </div>
          ))} */}
    </div>
  );
};

export default Navbar;
