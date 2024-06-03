import React from "react";
import Image from "next/image";
import wavinghand from "../../public/wavinghand.png";

export default function Aboutmemobile() {
  return (
    <div className="about_me_mobile">
      <div className="right_element_mobile">
        <img
          className="ula_pixelart_mobile"
          src="https://i.ibb.co/LPxpCg3/ula-pixel-art.png"
          alt=""
        />
        {/* <p className="pixelart_caption_mobile">I'M ULA!</p> */}
      </div>
      <div className="left_element_mobile">
        <div className="hello_container_mobile">
          <div>
            <p className="hello_mobile">HELLO</p>
            <p className="hello_two_mobile">WORLD</p>
          </div>
        </div>
        <p className="hello_description_mobile">
          I'm a full-stack developer using JavaScript and React to turn pixels
          on a screen into full-fledged user experiences. I’m passionate about
          leveraging the ever-evolving tech landscape to create human solutions
          that surprise & delight.
        </p>
        <p className="hello_description_mobile">
          Beyond the screen, you'll find me hiking, listening to audiobooks, and
          traveling.
        </p>
      </div>
    </div>
  );
}
