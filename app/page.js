"use client";

import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
import Image from "next/image";
import wavinghand from "../public/wavinghand.png";
import memorygame from "../public/memorygame.png";
import rabbit from "../public/Bunny2.png";
import calculator from "../public/calculator.png";
import avocado from "../public/avocado.jpg";
import arrow from "../public/rightarrow.png";
import cssimage from "../public/Icon5.png";
import jsimage from "../public/Icon4.png";
import reactimage from "../public/Icon3.png";
import figmaimage from "../public/Icon1.png";
import uiuximage from "../public/uiux.png";
import htmlimage from "../public/Icon2.png";
import temptwo from "../public/OIG3.jpeg";

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

  const [icons, setIcons] = useState([
    { src: htmlimage, alt: "HTML" },
    { src: cssimage, alt: "CSS" },
    { src: jsimage, alt: "JavaScript" },
    { src: reactimage, alt: "React" },
    { src: uiuximage, alt: "UI/UX" },
    { src: figmaimage, alt: "Figma" },
    { src: temptwo, alt: "Placeholder" },
    { src: temptwo, alt: "Placeholder" },
  ]);
  const [showLeftElement, setShowLeftElement] = useState(false);
  const [showRightElement, setShowRightElement] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPositions = window.scrollY;

      if (scrollPositions >= 2100) {
        setShowLeftElement(true);
      }

      if (scrollPositions >= 2400) {
        setShowRightElement(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, [showLeftElement, showRightElement]);

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

  const mountainsTranslateY = Math.max(0, scrollPosition * 0.5);
  const mountainsScale = Math.min(1 + scrollPosition / 3000, 8);

  const buildingsTranslateY = Math.max(0, scrollPosition * 0.4);
  const buildingsScale = Math.min(1 + scrollPosition / 800, 8);

  const treesTranslateY = Math.max(0, scrollPosition * 0.15);
  const treesScale = Math.min(1 + scrollPosition / 800, 10);

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
      <div className="background">
        <div className="heading_container">
          <h1 className="name_intro">HELLO, MY NAME IS</h1>
          <h1 className="name">ULA LAPKUS</h1>
          <h1 className="name_caption">SELF-TAUGHT FULLSTACK ENGINEER</h1>
          <h1 className="name_caption">IN SALT LAKE CITY, UT</h1>
        </div>
        <img
          src="https://i.ibb.co/C0w5Zg6/mountains-v2b-copy.png"
          className="mountains"
          style={{
            height: "180vh",
            transform: `translateY(${mountainsTranslateY}px) scale(${mountainsScale})`,
          }}
        />
        {/* <div
          className="mountains"
          style={{
            backgroundImage: `url('https://i.ibb.co/C0w5Zg6/mountains-v2b-copy.png')`,
            backgroundSize: `${zoomFactor * 100}%`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "150vh",
            transform: `scale(${firstImageScale})`,
            transition: "transform 0.3s ease",
            position: "absolute",
          }}
        > */}
        <img
          className="buildings"
          src="https://i.ibb.co/pjbYR4G/buildings.webp"
          style={{
            height: "90vh",
            transform: `translateY(${buildingsTranslateY}px) scale(${buildingsScale})`,
          }}
        />
        <img
          className="trees"
          src="https://i.ibb.co/pXmhy88/trees.webp"
          style={{
            height: "99vh",
            transform: `translateY(${treesTranslateY}px) scale(${treesScale})`,
          }}
        />

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
      <div className="new_filler">
        <div className="new_filler_child"></div>
      </div>
      {/* <div className="filler">
        {lineLength > 0 && (
          <div
            style={{
              width: "100px",
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
      </div> */}
      <div className="projects">
        <div className={`left-element ${showLeftElement ? "show" : ""}`}>
          <div>
            <p className="hello">
              Hey
              <Image className="wavinghand" src={wavinghand} />
            </p>
            <p className="hello_two">Nice to meet ya!</p>
          </div>
          <p className="hello_description">
            I'm a full stack developer passionate about JavaScript, React, and
            the vast realm of web development. The blend of creativity, logical
            thinking, and the ever-evolving tech landscape fuels my enthusiasm
            for crafting web solutions. Beyond the screen, you'll find me
            hiking, listening to audiobooks, and traveling.
          </p>
        </div>
        <div className={`right-element ${showRightElement ? "show" : ""}`}>
          {/* Content of the right element */}
          Right Element
        </div>
        {/* <div className="projects-container">
          <div className="website">
            <Image className="museum" src={memorygame} />
            <div className="overlay">
              <div className="image_text">Museum Memory Game</div>
              <a
                href="https://www.museummatch.org/"
                target="_blank"
                className="image_text_two"
              >
                <div className="explore"> EXPLORE </div>
                <Image className="arrow" src={arrow} />
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
                <div className="explore"> EXPLORE </div>
                <Image className="arrow" src={arrow} />
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
                <div className="explore"> EXPLORE </div>
                <Image className="arrow" src={arrow} />
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
                <div className="explore"> EXPLORE </div>
                <Image className="arrow" src={arrow} />
              </a>
            </div>
          </div>
        </div> */}
      </div>
      <div className="skills">
        <div className="my-skills">MY SKILLS</div>
        <div className="skills-noarrows">
          <div className="skillimg">
            <Image className="htmlimg skill" src={htmlimage} />
            <div className="img_caption">HTML</div>
          </div>
          <div className="skillimg">
            <Image className="cssimg skill" src={cssimage} />
            <div className="img_caption">CSS</div>
          </div>
          <div className="skillimg">
            <Image className="jsimg skill" src={jsimage} />
            <div className="img_caption">JAVASCRIPT</div>
          </div>
          <div className="skillimg">
            <Image className="reactimg skill" src={reactimage} />
            <div className="img_caption">REACT.JS</div>
          </div>
          <div className="skillimg">
            <Image className="uiuximg skill" src={uiuximage} />
            <div className="img_caption">UI/UX</div>
          </div>
          <div className="skillimg">
            <Image className="figmaimg skill" src={figmaimage} />
            <div className="img_caption">FIGMA</div>
          </div>
          <div className="skillimg">
            <Image className="tempimg skill" src={temptwo} />
            <div className="img_caption">TEMP</div>
          </div>
          <div className="skillimg">
            <Image className="temptwoimg skill" src={temptwo} />
            <div className="img_caption">TEMP</div>
          </div>
          <div className="skillimg">
            <Image className="htmlimg skill" src={htmlimage} />
            <div className="img_caption">HTML</div>
          </div>
          <div className="skillimg">
            <Image className="cssimg skill" src={cssimage} />
            <div className="img_caption">CSS</div>
          </div>
          <div className="skillimg">
            <Image className="jsimg skill" src={jsimage} />
            <div className="img_caption">JAVASCRIPT</div>
          </div>
          <div className="skillimg">
            <Image className="reactimg skill" src={reactimage} />
            <div className="img_caption">REACT.JS</div>
          </div>
          <div className="skillimg">
            <Image className="uiuximg skill" src={uiuximage} />
            <div className="img_caption">UI/UX</div>
          </div>
          <div className="skillimg">
            <Image className="figmaimg skill" src={figmaimage} />
            <div className="img_caption">FIGMA</div>
          </div>
          <div className="skillimg">
            <Image className="tempimg skill" src={temptwo} />
            <div className="img_caption">TEMP</div>
          </div>
          <div className="skillimg">
            <Image className="temptwoimg skill" src={temptwo} />
            <div className="img_caption">TEMP</div>
          </div>

          {/* {icons.map((icon, index) => (
            <div key={index} className="skillimg">
              <Image className="skill" src={icon.src} alt={icon.alt} />
            </div>
          ))} */}
        </div>
      </div>
      <div className="my_projects">
        <div className="website">
          <Image className="museum" src={memorygame} />
          {/* <div className="overlay">
            <div className="image_text">Museum Memory Game</div>
            <a
              href="https://www.museummatch.org/"
              target="_blank"
              className="image_text_two"
            >
              <div className="explore"> EXPLORE </div>
              <Image className="arrow" src={arrow} />
            </a>
          </div> */}
          <div className="description">
            <p className="title">Museum Memory Game</p>
            <div>React</div>
            <div>HTML</div>
          </div>
        </div>
        <div className="website">
          <div className="description">
            <p className="title">Habit Rabbit</p>
            <div className="tech_container">
              <div className="tech">React.js</div>
              <div className="tech">NextAuth</div>
              <div className="tech">MongoDB</div>
            </div>
          </div>
          <div className="rabbit_background">
            <Image className="rabbit" src={rabbit} />
          </div>
          {/* <div className="overlay">
            <div className="image_text">Habit Rabbit</div>
            <a
              href="https://www.habit-rabbit.xyz/"
              target="_blank"
              className="image_text_two"
            >
              <div className="explore"> EXPLORE </div>
              <Image className="arrow" src={arrow} />
            </a>
          </div> */}
        </div>
        <div className="website">
          <Image className="museum" src={avocado} />
          {/* <div className="overlay">
            <div className="image_text">Art Portfolio</div>
            <a
              href="https://www.museummatch.org/"
              target="_blank"
              className="image_text_two"
            >
              <div className="explore"> EXPLORE </div>
              <Image className="arrow" src={arrow} />
            </a>
          </div> */}{" "}
          <div className="description">Description</div>
        </div>
        <div className="website">
          {" "}
          <div className="description">Description</div>
          <Image className="museum" src={calculator} />
          {/* <div className="overlay">
            <div className="image_text">Calculator</div>
            <a
              href="https://calculator-ulapkus.vercel.app/"
              target="_blank"
              className="image_text_two"
            >
              <div className="explore"> EXPLORE </div>
              <Image className="arrow" src={arrow} />
            </a>
          </div> */}
        </div>
      </div>
      {/* <div className="footnote">
     Linked in, etc..
      </div> */}
    </div>
  );
};

export default Navbar;
