import React from "react";
import cssimage from "../../public/Icon5.png";
import jsimage from "../../public/Icon4.png";
import reactimage from "../../public/Icon3.png";
import figmaimage from "../../public/Icon1.png";
import uiuximage from "../../public/uiux.png";
import htmlimage from "../../public/Icon2.png";
import temptwo from "../../public/OIG3.jpeg";
import Image from "next/image";

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

{
  /* {icons.map((icon, index) => (
            <div key={index} className="skillimg">
              <Image className="skill" src={icon.src} alt={icon.alt} />
            </div>
          ))} */
}

export default function Skills() {
  return (
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
      </div>
    </div>
  );
}
