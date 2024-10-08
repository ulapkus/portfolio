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

export default function Projectsmobile() {
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
    <div className="my_projects_mobile_container">
      <div className="my_projects_mobile">
        <div className="my_projects_left_mobile">
          <a href="https://www.habit-rabbit.xyz/" target="_blank">
            <div
              className="website_mobile"
              onMouseEnter={() => setSrcBunny(bunnydark)}
              onMouseLeave={() => setSrcBunny(bunny)}
            >
              <div className="tech_container_mobile">
                <p className="tech_mobile">NEXTAUTH.JS</p>
                <p className="tech_mobile">MONGODB</p>
              </div>
              <div className="proj_left_bunny_mobile">
                <Image
                  className="icon_bunny_mobile"
                  alt=""
                  src={srcBunny}
                  priority
                />
              </div>
              <p className="title_mobile">HABIT RABBIT</p>
              <div className="new_element_cont_mobile">
                <p className="new_element_mobile">HABIT TRACKING APP</p>
                <Image src={arrow} className="arrow" alt="" />
              </div>
            </div>
          </a>{" "}
          <a href="https://www.museummatch.org/" target="_blank">
            <div
              className="website_mobile"
              onMouseEnter={() => setSrcMuseum(museumdark)}
              onMouseLeave={() => setSrcMuseum(museum)}
            >
              <div className="tech_container_mobile">
                <p className="tech_mobile">REACT.JS</p>
                <p className="tech_mobile">NEXT.JS</p>
              </div>
              <div className="proj_left_mobile">
                <Image
                  className="icon_museum_mobile"
                  src={srcMuseum}
                  alt=""
                  priority
                />
              </div>
              <p className="title_mobile">MUSEUM MEMORY</p>
              <div className="new_element_cont_mobile">
                <p className="museum_element_mobile">MEMORY GAME</p>
                <Image src={arrow} className="arrow" alt="" />
              </div>
            </div>
          </a>
        </div>
        <div className="my_projects_center_mobile">
          <a href="https://calculator-ulapkus.vercel.app/" target="_blank">
            <div
              className="website_mobile"
              onMouseEnter={() => setSrcCalculator(calculatordark)}
              onMouseLeave={() => setSrcCalculator(calculator)}
            >
              <div className="tech_container_mobile">
                <p className="tech_mobile">REACT.JS</p>
                <p className="tech_mobile">NEXT.JS</p>
              </div>
              <div className="proj_center_mobile">
                <Image
                  alt=""
                  className="icon_calculator_mobile"
                  src={srcCalculator}
                  priority
                />
              </div>
              <p className="title_mobile">CALCULATOR</p>
              <div className="new_element_cont_mobile">
                <p className="new_element_mobile">CLASSIC CALCULATOR</p>
                <Image src={arrow} className="arrow" alt="" />
              </div>
            </div>
          </a>{" "}
          <a href="https://www.artbykriste.com/" target="_blank">
            <div
              className="website_mobile"
              onMouseEnter={() => setSrcArt(artdark)}
              onMouseLeave={() => setSrcArt(art)}
            >
              <div className="tech_container_mobile">
                <p className="tech_mobile">REACT.JS</p>
                <p className="tech_mobile">NEXT.JS</p>
              </div>
              <div className="proj_center_mobile">
                <Image
                  className="icon_art_mobile"
                  src={srcArt}
                  alt=""
                  priority
                />
              </div>
              <div className="art_title">
                <p className="title_mobile_art">ART</p>
                <p className="title_mobile_art">BY KRISTE</p>
              </div>
              <div className="new_element_cont_mobile">
                <p className="new_element_mobile">CUSTOM ART PORTFOLIO</p>
                <Image src={arrow} className="arrow" alt="" />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div
        className="my_projects_right_mobile"
        onMouseEnter={() => setSrcResume(resumedark)}
        onMouseLeave={() => setSrcResume(resume)}
      >
        <div className="tech_container_resume_mobile">
          <p className="tech_mobile">PDF</p>
        </div>
        <div className="resume_container" onClick={handleButtonClick}>
          <Image
            className="icon_resume_mobile"
            src={srcResume}
            priority
            alt=""
          />
          <div className="resume">
            <p className="title_mobile_art">MY_RESUME</p>
            <p className="title_mobile_art">.PDF</p>
          </div>
        </div>
      </div>
    </div>
  );
}
