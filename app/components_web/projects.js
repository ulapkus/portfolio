import React, { useState } from "react";
import Image from "next/image";
import museum from "../../public/museum.png";
import bunny from "../../public/bunny.png";
import calculator from "../../public/calculator.png";
import resume from "../../public/resume.png";
import art from "../../public/art.png";
import artdark from "../../public/art_dark.png";
import museumdark from "../../public/museum_dark.png";
import calculatordark from "../../public/calculator_dark.png";
import bunnydark from "../../public/bunny_dark.png";
import resumedark from "../../public/resumdark.png";
import arrow from "../../public/arrow.png";

export default function Projects() {
  const [srcBunny, setSrcBunny] = useState(bunny);
  const [srcMuseum, setSrcMuseum] = useState(museum);
  const [srcCalculator, setSrcCalculator] = useState(calculator);
  const [srcArt, setSrcArt] = useState(art);
  const [srcResume, setSrcResume] = useState(resume);

  const handleButtonClick = () => {
    const pdfUrl = "/myresume.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
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
            <p className="new_element">A HABIT TRACKING APP</p>
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
            <p className="new_element">MUSEUM-THEMED MEMORY GAME</p>
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
            <p className="new_element">A JAVASCRIPT CALCULATOR</p>
            <a href="https://calculator-ulapkus.vercel.app/" target="_blank">
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
              <p className="new_element">CUSTOM ART PORTFOLIO</p>
              {/* need to add correct url */}
              <a href="https://calculator-ulapkus.vercel.app/" target="_blank">
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
        <div className="resume_container" onClick={handleButtonClick}>
          <Image className="icon_resume" src={srcResume} />

          <div className="resume">
            <p className="title">MY_RESUME</p>
            <p className="title">.PDF</p>
          </div>
        </div>
      </div>
    </div>
  );
}
