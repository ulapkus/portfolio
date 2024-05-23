import React from "react";
import cssimage from "../../public/Icon5.png";
import jsimage from "../../public/Icon4.png";
import reactimage from "../../public/Icon3.png";
import figmaimage from "../../public/Icon1.png";
import uiuximage from "../../public/uiux.png";
import htmlimage from "../../public/Icon2.png";
import temptwo from "../../public/OIG3.jpeg";
import Image from "next/image";

export default function Skillsmobile() {
  return (
    <div className="skills">
      <div className="skills-noarrows">
        <div className="skillimg_mobile">
          <Image className="htmlimg skill" src={htmlimage} />
          <div className="img_caption">HTML</div>
        </div>
        <div className="skillimg_mobile">
          <Image className="cssimg skill" src={cssimage} />
          <div className="img_caption">CSS</div>
        </div>
        <div className="skillimg_mobile">
          <Image className="jsimg skill" src={jsimage} />
          <div className="img_caption">JAVASCRIPT</div>
        </div>
        <div className="skillimg_mobile">
          <Image className="reactimg skill" src={reactimage} />
          <div className="img_caption">REACT.JS</div>
        </div>
        <div className="skillimg_mobile">
          <Image className="uiuximg skill" src={uiuximage} />
          <div className="img_caption">UI/UX</div>
        </div>
        <div className="skillimg_mobile">
          <Image className="figmaimg skill" src={figmaimage} />
          <div className="img_caption">FIGMA</div>
        </div>
        <div className="skillimg_mobile">
          <Image className="tempimg skill" src={temptwo} />
          <div className="img_caption">TEMP</div>
        </div>
        <div className="skillimg_mobile">
          <Image className="temptwoimg skill" src={temptwo} />
          <div className="img_caption">TEMP</div>
        </div>
        <div className="skillimg_mobile">
          <Image className="htmlimg skill" src={htmlimage} />
          <div className="img_caption">HTML</div>
        </div>
        <div className="skillimg_mobile">
          <Image className="cssimg skill" src={cssimage} />
          <div className="img_caption">CSS</div>
        </div>
        <div className="skillimg_mobile">
          <Image className="jsimg skill" src={jsimage} />
          <div className="img_caption">JAVASCRIPT</div>
        </div>
        <div className="skillimg_mobile">
          <Image className="reactimg skill" src={reactimage} />
          <div className="img_caption">REACT.JS</div>
        </div>
        <div className="skillimg_mobile">
          <Image className="uiuximg skill" src={uiuximage} />
          <div className="img_caption">UI/UX</div>
        </div>
        <div className="skillimg_mobile">
          <Image className="figmaimg skill" src={figmaimage} />
          <div className="img_caption">FIGMA</div>
        </div>
        <div className="skillimg_mobile">
          <Image className="tempimg skill" src={temptwo} />
          <div className="img_caption">TEMP</div>
        </div>
        <div className="skillimg_mobile">
          <Image className="temptwoimg skill" src={temptwo} />
          <div className="img_caption">TEMP</div>
        </div>
      </div>
    </div>
  );
}
