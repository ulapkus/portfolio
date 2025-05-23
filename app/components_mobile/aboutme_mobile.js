import React from "react";

export default function Aboutmemobile() {
  return (
    <div className="about_me_section_mobile">
      <div className="about_me_mobile">
        <div className="right_element_mobile">
          <img
            className="ula_pixelart_mobile"
            src="https://i.ibb.co/LPxpCg3/ula-pixel-art.png"
            alt=""
          />
        </div>
        <div className="left_element_mobile">
          <div className="hello_container_mobile">
            <div>
              <p className="hello_mobile">HELLO</p>
              <p className="hello_two_mobile">WORLD</p>
            </div>
          </div>
          <p className="hello_description_mobile">
            I'm a full-stack developer using React and React Native to turn
            pixels on a screen into full-fledged user experiences. My dream
            would be to work for a company passionate about traveling (I'm
            talking about you, <span className="wanderlog">Wanderlog</span>!)
          </p>
          <p className="hello_description_mobile">
            Beyond the screen, you'll find me hiking with friends, listening to
            audiobooks, and traveling.
          </p>
        </div>
      </div>
    </div>
  );
}
