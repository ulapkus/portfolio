import React, { useState, useEffect } from "react";
import linkedin from "../../public/linkedin.png";
import emailicon from "../../public/email.png";
import github from "../../public/github.png";
import Image from "next/image";

export default function Socialsmobile() {
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [instructions, setInstructions] = useState("EMAIL");
  const email = "ulapkus@gmail.com";

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage("");
      setInstructions("EMAIL");
    }, 5000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);

  function hideInstruction() {
    if (copySuccessMessage === "") {
      setInstructions("EMAIL");
    } else {
      setInstructions("");
    }
  }

  function showInstruction() {
    if (copySuccessMessage === "") {
      setInstructions("CLICK TO COPY EMAIL");
    }
  }

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage("EMAIL COPIED!");
    setInstructions("");
  }

  return (
    <div className="footnote_mobile">
      <div className="footnote_container_mobile">
        <a
          href="https://www.linkedin.com/in/ula-lapkus-8651a22b4/"
          target="_blank"
          className="footnote_link_mobile"
        >
          <Image src={linkedin} className="footnote_icon_mobile" alt="" />
          <p className="footnote_caption_mobile">LINKEDIN</p>
        </a>
      </div>
      <div className="footnote_container_mobile">
        <a
          href="https://github.com/ulapkus"
          target="_blank"
          className="footnote_link_mobile"
        >
          <Image src={github} className="footnote_icon_mobile" alt="" />
          <p className="footnote_caption_mobile">GITHUB</p>
        </a>
      </div>
      <div
        className="footnote_container_email_mobile"
        onClick={copyEmail}
        onMouseOver={showInstruction}
        onMouseOut={hideInstruction}
      >
        <Image src={emailicon} className="footnote_icon_email_mobile" alt="" />
        <p className="footnote_caption_mobile">
          {copySuccessMessage} {instructions}
        </p>
      </div>
    </div>
  );
}
