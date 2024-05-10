"use client";

import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
import Image from "next/image";
import memorygame from "../public/memorygame.png";
import rabbit from "../public/Bunny2.png";
import calculator from "../public/calculator.png";
import avocado from "../public/avocado.jpg";
import iconimage from "../public/icons.png";

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
    const zoomInThreshold = 800; // Adjust this value to change when zooming starts
    const maxZoomFactor = 1.3; // Adjust this value to change the maximum zoom level

    let newZoomFactor = 1 + scrollPosition / zoomInThreshold;
    newZoomFactor = Math.min(newZoomFactor, maxZoomFactor);

    setZoomFactor(newZoomFactor);
  }, [scrollPosition]);

  useEffect(() => {
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

  const darkness = Math.min(scrollPosition / 1500, 1);

  return (
    <div className="background">
      <div className="intro_border">
        {/* <div className="scrollpositioncss">{scrollPosition}</div> */}
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
            position: "relative",
          }}
        >
          <div
            className={`element ${
              elementVisibility.element1 ? "visible" : "hidden"
            }`}
          >
            <div className="hi">Hello</div>
            <div className="name">My name is Ula</div>
          </div>
          <div
            className={`elementtwo ${
              elementVisibility.element2 ? "visible" : "hidden"
            }`}
          >
            <div className="about_child">
              I'm a self-taught web developer motivated by curiosity and
              passion. I focus on building frontends in React, but I have
              experience working across the entire stack.
            </div>
          </div>
          {showTint && (
            <div
              className="dark-tint"
              style={{
                backgroundColor: `rgba(0, 0, 0, ${darkness})`,
                height: "100vh",
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
      </div>
      <div className="filler">
        {lineLength > 0 && (
          <div
            style={{
              width: "1px",
              height: `${lineLength}px`,
              backgroundColor: "gray",
              position: "fixed",
              top: `${startDrawingPoint}px`,
              left: "50%",
              overflow: "hidden",
              zIndex: "1",
            }}
          ></div>
        )}
        <div className="temp_box"></div>
      </div>

      <div className="projects">
        <div className="projects-container">
          <div className="website">
            <Image className="museum" src={memorygame} />
            <div className="overlay">
              <div className="image_text">Museum Memory Game</div>
              <a
                href="https://www.museummatch.org/"
                target="_blank"
                className="image_text_two"
              >
                EXPLORE
              </a>
            </div>
          </div>
          <div className="website rabbit_background">
            <Image className="rabbit" src={rabbit} />
            <div className="overlay">
              <div className="image_text">Habit Rabbit</div>
              <a
                href="https://www.habit-rabbit.xyz/"
                target="_blank"
                className="image_text_two"
              >
                EXPLORE
              </a>
            </div>
          </div>
          <div className="website">
            <Image className="museum" src={avocado} />
            <div className="overlay">
              <div className="image_text">Art Portfolio</div>
              <a
                href="https://www.museummatch.org/"
                target="_blank"
                className="image_text_two"
              >
                EXPLORE
              </a>
            </div>
          </div>
          <div className="website">
            <Image className="museum" src={calculator} />
            <div className="overlay">
              <div className="image_text">Calculator</div>
              <a
                href="https://calculator-ulapkus.vercel.app/"
                target="_blank"
                className="image_text_two"
              >
                EXPLORE
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="skills">
        <div className="skills_container">
          <Image className="iconimage" src={iconimage} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
