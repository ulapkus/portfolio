import React from "react";
import Image from "next/image";
import wavinghand from "../../public/wavinghand.png";
import ulaPixel from "../../public/ulaPixelArt.png";

export default function Aboutme() {
  return (
    <div className="about_me_section">
      <div className="about_me">
        <div className="left_element">
          <div className="hello_container">
            <p className="hello">HELLO</p>
            <p className="hello_two">
              WORLD <Image className="wavinghand" src={wavinghand} alt="" />
            </p>
          </div>
          <p className="hello_description">
            I'm a full-stack developer using React and React Native to turn
            pixels on a screen into full-fledged user experiences. I have an eye
            for design and am passionate about turning code into fully fledged
            user experiences.
          </p>
          <p className="hello_description">
            Beyond the screen, you'll find me hiking, listening to audiobooks,
            and traveling.
          </p>
        </div>
        <div className="right_element">
          <Image priority className="ula_pixelart" src={ulaPixel} alt="" />
          <p className="pixelart_caption">I'M ULA!</p>
        </div>
      </div>
    </div>
  );
}
