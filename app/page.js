"use client";

import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
import arrow from "../public/images.png";
import Image from "next/image";
import browser from "../public/browser.png";
import useScrollSnap from "react-use-scroll-snap";
import backgroundd from "../public/backgroundd.png";

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
    // Adjust these values to control the zoom behavior
    const zoomInThreshold = 800; // Adjust this value to change when zooming starts
    const maxZoomFactor = 1.3; // Adjust this value to change the maximum zoom level

    let newZoomFactor = 1 + scrollPosition / zoomInThreshold;
    newZoomFactor = Math.min(newZoomFactor, maxZoomFactor);

    setZoomFactor(newZoomFactor);

    // Show the tint when reaching the max zoom level
    // if (newZoomFactor === maxZoomFactor) {
    // setShowTint(true);
    // } else {
    //   setShowTint(false);
    // }
  }, [scrollPosition]);

  useEffect(() => {
    // Update visibility based on scroll position
    if (scrollPosition >= 0 && scrollPosition < 100) {
      setElementVisibility({
        element1: true,
        element2: false,
        element3: false,
        element4: false,
        element5: false,
      });
    } else if (scrollPosition >= 100 && scrollPosition < 499) {
      setElementVisibility({
        element1: false,
        element2: false,
        element3: false,
        element4: false,
        element5: false,
      });
    } else if (scrollPosition >= 500 && scrollPosition < 1000) {
      setElementVisibility({
        element1: false,
        element2: true,
        element3: false,
        element4: false,
        element5: false,
      });
    } else if (scrollPosition >= 1000 && scrollPosition < 1500) {
      setElementVisibility({
        element1: false,
        element2: true,
        element3: false,
        element4: false,
        element5: false,
      });
      setShowTint(true);
    } else if (scrollPosition >= 1500 && scrollPosition < 2000) {
      setElementVisibility({
        element1: false,
        element2: false,
        element3: false,
        element4: false,
        element5: false,
      });
    } else if (scrollPosition >= 500 && scrollPosition < 600) {
      setElementVisibility({
        element1: false,
        element2: false,
        element3: false,
        element4: false,
        element5: true,
      });
    } else {
      setElementVisibility({
        element1: false,
        element2: false,
        element3: false,
        element4: false,
        element5: false,
      });
    }
  }, [scrollPosition]);

  return (
    <div
      className="background"
      // style={{ backgroundColor: bgColor }}
      // ref={scrollRef}
    >
      {/* <Image src={backgroundd} /> */}

      <div className="intro_border">
        <div
          className="intro_border_two"
          style={{
            backgroundImage: `url('https://i.ibb.co/TL08NVy/backgroundd.png')`,
            backgroundSize: `${zoomFactor * 100}%`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            transform: `scale(${zoomFactor})`,
            transition: "transform 0.5s ease", // Smooth transition for zoom effect
          }}
        >
          <div
            className={`element ${
              elementVisibility.element1 ? "visible" : "hidden"
            }`}
          >
            {/* <div className={`content ${showTint ? "hidden" : ""}`}> */}
            <div className="hi">Hello</div>
            <div className="name">My name is Ula</div>
          </div>

          <div
            className={`elementtwo ${
              elementVisibility.element2 ? "visible" : "hidden"
            }`}
          >
            {/* <div className="about-parent"> */}
            {/* <div className="about"> */}
            <div className="about_child">
              I'm a self-taught web developer motivated by curiosity and
              passion. I focus on building frontends in React, but I have
              experience working across the entire stack.
            </div>
            {/* </div> */}
          </div>
          {/* </div> */}
          {showTint && <div className="dark-tint" />}
        </div>
        <div className="projects">
          <div className="word">hi!</div>
        </div>
      </div>

      <div className="resume">
      </div>
    </div>
  );
};

export default Navbar;
