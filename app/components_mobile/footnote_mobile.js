import React from "react";
import linkedin from "../../public/linkedin.png";
import email from "../../public/email.png";
import github from "../../public/github.png";
import Image from "next/image";

export default function Footnotemobile() {
  return (
    <div className="footnote_mobile">
      <a
        href="https://www.linkedin.com/in/ula-lapkus-8651a22b4/"
        target="_blank"
      >
        <div className="footnote_container_mobile">
          <Image src={linkedin} className="footnote_icon_mobile" />
          <p className="footnote_caption_mobile">LINKEDIN</p>
        </div>
      </a>
      <a href="https://github.com/ulapkus" target="_blank">
        <div className="footnote_container_mobile">
          <Image src={github} className="footnote_icon_mobile" />
          <p className="footnote_caption_mobile">GITHUB</p>
        </div>
      </a>
      <div className="footnote_container_email_mobile">
        <Image src={email} className="footnote_icon_email_mobile" />
        <p className="footnote_caption_mobile">EMAIL ME</p>
      </div>
    </div>
  );
}
