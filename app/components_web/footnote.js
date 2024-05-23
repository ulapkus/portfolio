import React from "react";
import linkedin from "../../public/linkedin.png";
import email from "../../public/email.png";
import github from "../../public/github.png";
import Image from "next/image";

export default function Footnote() {
  return (
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
  );
}
