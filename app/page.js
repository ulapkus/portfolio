"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import wavinghand from "../public/wavinghand.png";
import museum from "../public/museum.png";
import bunny from "../public/bunny.png";
import calculator from "../public/calculator.png";
import resume from "../public/resume.png";
import art from "../public/art.png";
import cssimage from "../public/Icon5.png";
import jsimage from "../public/Icon4.png";
import reactimage from "../public/Icon3.png";
import figmaimage from "../public/Icon1.png";
import uiuximage from "../public/uiux.png";
import htmlimage from "../public/Icon2.png";
import temptwo from "../public/OIG3.jpeg";
import email from "../public/email.png";
import github from "../public/github.png";
import linkedin from "../public/linkedin.png";
import artdark from "../public/art_dark.png";
import museumdark from "../public/museum_dark.png";
import calculatordark from "../public/calculator_dark.png";
import bunnydark from "../public/bunny_dark.png";
import resumedark from "../public/resumdark.png";
import arrow from "../public/arrow.png";
import mountains from "../public/mountains.webp";
import buildings from "../public/buildings.webp";
import trees from "../public/trees.webp";
import backgroundimg from "../public/background-smaller.webp";

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

  const mountainsTranslateY = Math.max(0, scrollPosition * 0.5);
  const mountainsScale = Math.min(1 + scrollPosition / 3000, 8);

  const buildingsTranslateY = Math.max(0, scrollPosition * 0.4);
  const buildingsScale = Math.min(1 + scrollPosition / 800, 8);

  const treesTranslateY = Math.max(0, scrollPosition * 0.15);
  const treesScale = Math.min(1 + scrollPosition / 800, 10);

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
      <div className="background">
        <Image className="backgroundimg" src={backgroundimg} />
        <div className="heading_container">
          <h1 className="name_intro">HELLO, MY NAME IS</h1>
          <h1 className="name">ULA LAPKUS</h1>
          <h1 className="name_caption">SELF-TAUGHT FULLSTACK ENGINEER</h1>
          <h1 className="name_caption">IN SALT LAKE CITY, UT</h1>
        </div>
        <Image
          src={mountains}
          className="mountains"
          style={{
            transform: `translateY(${mountainsTranslateY}px) scale(${mountainsScale})`,
          }}
        />
        <Image
          className="buildings"
          src={buildings}
          style={{
            transform: `translateY(${buildingsTranslateY}px) scale(${buildingsScale})`,
          }}
        />
        <Image
          className="trees"
          src={trees}
          style={{
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
      <div className="projects">
        <div className="left_element">
          <div className="hello_container">
            <p className="hello">HELLO</p>
            <p className="hello_two">
              WORLD <Image className="wavinghand" src={wavinghand} />
            </p>
          </div>
          <p className="hello_description">
            I'm a full-stack developer using JavaScript and React to turn pixels
            on a screen into full-fledged user experiences. I’m passionate about
            leveraging the ever-evolving tech landscape to create human
            solutions that surprise & delight.
          </p>
          <p className="hello_description">
            Beyond the screen, you'll find me hiking, listening to audiobooks,
            and traveling.
          </p>
        </div>
        <div className="right_element">
          <img
            className="ula_pixelart"
            src="https://i.ibb.co/LPxpCg3/ula-pixel-art.png"
          />
          <p className="pixelart_caption">I'M ULA!</p>
        </div>
      </div>

      {/* {icons.map((icon, index) => (
            <div key={index} className="skillimg">
              <Image className="skill" src={icon.src} alt={icon.alt} />
            </div>
          ))} */}

      {isMobile ? (
        <div className="my_projects_mobile_container">
          <div className="my_projects_mobile">
            <div className="my_projects_left">
              <div
                className="website"
                onMouseEnter={() => setSrcBunny(bunnydark)}
                onMouseLeave={() => setSrcBunny(bunny)}
              >
                <div className="tech_container">
                  <p className="tech">REACT.JS</p>
                  <p className="tech">NEXTAUTH</p>
                  <p className="tech">MONGODB</p>
                </div>
                <div className="proj_left_bunny">
                  <Image className="icon_bunny" src={srcBunny} />
                  <p className="title">HABIT RABBIT</p>
                </div>
                <div className="new_element_cont">
                  <p className="new-element">A HABIT TRACKING APP</p>
                  <a href="https://www.habit-rabbit.xyz/" target="_blank">
                    <Image src={arrow} className="arrow" />
                  </a>
                </div>
              </div>
              <div
                className="website"
                onMouseEnter={() => setSrcMuseum(museumdark)}
                onMouseLeave={() => setSrcMuseum(museum)}
              >
                <div className="tech_container">
                  <p className="tech">REACT.JS</p>
                  <p className="tech">NEXT.JS</p>
                </div>
                <div className="proj_left">
                  <Image className="icon_museum" src={srcMuseum} />
                  <p className="title">MUSEUM MEMORY</p>
                </div>
                <div className="new_element_cont">
                  <p className="new-element">MUSEUM-THEMED MEMORY GAME</p>
                  <a href="https://www.museummatch.org/" target="_blank">
                    <Image src={arrow} className="arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div className="my_projects_center">
              <div
                className="website"
                onMouseEnter={() => setSrcCalculator(calculatordark)}
                onMouseLeave={() => setSrcCalculator(calculator)}
              >
                <div className="tech_container">
                  <p className="tech">REACT.JS</p>
                  <p className="tech">NEXT.JS</p>
                </div>
                <div className="proj_center">
                  <Image className="icon" src={srcCalculator} />
                  <p className="title">CALCULATOR</p>
                </div>
                <div className="new_element_cont">
                  <p className="new-element">A JAVASCRIPT CALCULATOR</p>
                  <a
                    href="https://calculator-ulapkus.vercel.app/"
                    target="_blank"
                  >
                    <Image src={arrow} className="arrow" />
                  </a>
                </div>
              </div>
              <div
                className="website"
                onMouseEnter={() => setSrcArt(artdark)}
                onMouseLeave={() => setSrcArt(art)}
              >
                <div className="tech_container">
                  <p className="tech">REACT.JS</p>
                  <p className="tech">NEXT.JS</p>
                </div>
                <div className="proj_center">
                  <Image className="icon_art" src={srcArt} />
                  <div className="art_title">
                    <p className="title">KRISTE'S</p>
                    <p className="title">ART</p>
                  </div>
                  <div className="new_element_cont">
                    <p className="new-element">CUSTOM ART PORTFOLIO</p>
                    {/* need to add correct url */}
                    <a
                      href="https://calculator-ulapkus.vercel.app/"
                      target="_blank"
                    >
                      <Image src={arrow} className="arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="my_projects_right"
            onMouseEnter={() => setSrcResume(resumedark)}
            onMouseLeave={() => setSrcResume(resume)}
          >
            <div className="tech_container">
              <p className="tech">PDF</p>
            </div>
            <Link href="/resume" target="_blank">
              <div className="resume_container">
                <Image className="icon_resume" src={srcResume} />
                <div className="resume">
                  <p className="title">MY_RESUME</p>
                  <p className="title">.PDF</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="my_projects">
          <div className="my_projects_left">
            <div
              className="website"
              onMouseEnter={() => setSrcBunny(bunnydark)}
              onMouseLeave={() => setSrcBunny(bunny)}
            >
              <div className="tech_container">
                <p className="tech">REACT.JS</p>
                <p className="tech">NEXTAUTH</p>
                <p className="tech">MONGODB</p>
              </div>
              <div className="proj_left_bunny">
                <Image className="icon_bunny" src={srcBunny} />
                <p className="title">HABIT RABBIT</p>
              </div>
              <div className="new_element_cont">
                <p className="new-element">A HABIT TRACKING APP</p>
                <a href="https://www.habit-rabbit.xyz/" target="_blank">
                  <Image src={arrow} className="arrow" />
                </a>
              </div>
            </div>
            <div
              className="website"
              onMouseEnter={() => setSrcMuseum(museumdark)}
              onMouseLeave={() => setSrcMuseum(museum)}
            >
              <div className="tech_container">
                <p className="tech">REACT.JS</p>
                <p className="tech">NEXT.JS</p>
              </div>
              <div className="proj_left">
                <Image className="icon_museum" src={srcMuseum} />
                <p className="title">MUSEUM MEMORY</p>
              </div>
              <div className="new_element_cont">
                <p className="new-element">MUSEUM-THEMED MEMORY GAME</p>
                <a href="https://www.museummatch.org/" target="_blank">
                  <Image src={arrow} className="arrow" />
                </a>
              </div>
            </div>
          </div>
          <div className="my_projects_center">
            <div
              className="website"
              onMouseEnter={() => setSrcCalculator(calculatordark)}
              onMouseLeave={() => setSrcCalculator(calculator)}
            >
              <div className="tech_container">
                <p className="tech">REACT.JS</p>
                <p className="tech">NEXT.JS</p>
              </div>
              <div className="proj_center">
                <Image className="icon" src={srcCalculator} />
                <p className="title">CALCULATOR</p>
              </div>
              <div className="new_element_cont">
                <p className="new-element">A JAVASCRIPT CALCULATOR</p>
                <a
                  href="https://calculator-ulapkus.vercel.app/"
                  target="_blank"
                >
                  <Image src={arrow} className="arrow" />
                </a>
              </div>
            </div>
            <div
              className="website"
              onMouseEnter={() => setSrcArt(artdark)}
              onMouseLeave={() => setSrcArt(art)}
            >
              <div className="tech_container">
                <p className="tech">REACT.JS</p>
                <p className="tech">NEXT.JS</p>
              </div>
              <div className="proj_center">
                <Image className="icon_art" src={srcArt} />
                <div className="art_title">
                  <p className="title">KRISTE'S</p>
                  <p className="title">ART</p>
                </div>
                <div className="new_element_cont">
                  <p className="new-element">CUSTOM ART PORTFOLIO</p>
                  {/* need to add correct url */}
                  <a
                    href="https://calculator-ulapkus.vercel.app/"
                    target="_blank"
                  >
                    <Image src={arrow} className="arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="my_projects_right"
            onMouseEnter={() => setSrcResume(resumedark)}
            onMouseLeave={() => setSrcResume(resume)}
          >
            <div className="tech_container">
              <p className="tech">PDF</p>
            </div>
            <Link href="/resume" target="_blank">
              <div className="resume_container">
                <Image className="icon_resume" src={srcResume} />
                <div className="resume">
                  <p className="title">MY_RESUME</p>
                  <p className="title">.PDF</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
      <div className="skills">
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
        </div>
      </div>
      <div className="footnote">
        <a
          href="https://www.linkedin.com/in/ula-lapkus-8651a22b4/"
          target="_blank"
        >
          <div className="footnote_container">
            <Image src={linkedin} className="footnote_icon" />
            <p className="footnote_caption">LINKEDIN</p>
          </div>
        </a>
        <a href="https://github.com/ulapkus" target="_blank">
          <div className="footnote_container">
            <Image src={github} className="footnote_icon" />
            <p className="footnote_caption">GITHUB</p>
          </div>
        </a>
        <div className="footnote_container_email">
          <Image src={email} className="footnote_icon_email" />
          <p className="footnote_caption">EMAIL ME</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
