import React from "react";
import Image from "next/image";
import wavinghand from "../../public/wavinghand.png";

export default function Aboutme() {
  return (
    <div className="about_me">
      <div className="left_element">
        <div className="hello_container">
          <p className="hello">HELLO</p>
          <p className="hello_two">
            WORLD <Image className="wavinghand" src={wavinghand}  alt=""/>
          </p>
        </div>
        <p className="hello_description">
          I'm a full-stack developer using JavaScript and React to turn pixels
          on a screen into full-fledged user experiences. I’m passionate about
          leveraging the ever-evolving tech landscape to create human solutions
          that surprise & delight.
        </p>
        <p className="hello_description">
          Beyond the screen, you'll find me hiking, listening to audiobooks, and
          traveling.
        </p>
      </div>
      <div className="right_element">
        <img
          className="ula_pixelart"
          src="https://i.ibb.co/LPxpCg3/ula-pixel-art.png" alt=""
        />
        <p className="pixelart_caption">I'M ULA!</p>
      </div>
    </div>
  );
}
