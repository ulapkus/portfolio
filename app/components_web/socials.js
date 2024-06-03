import React, { useState, useEffect } from "react";
import linkedin from "../../public/linkedin.png";
import emailicon from "../../public/email.png";
import github from "../../public/github.png";
import Image from "next/image";

export default function Socials() {
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [instructions, setInstructions] = useState("EMAIL ME");
  const email = "ulapkus@gmail.com";

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage("");
      setInstructions("EMAIL ME");
    }, 5000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);

  function showInstruction() {
    setInstructions(`CLICK TO COPY EMAIL`);
  }

  function hideInstruction() {
    if (copySuccessMessage == "EMAIL COPIED!") {
      setInstructions("");
    } else {
      setInstructions("EMAIL ME");
    }
  }

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage(`EMAIL COPIED!`);
    setInstructions("");
  }

  return (
    <div className="footnote">
      <div className="footnote_container">
        <a
          href="https://www.linkedin.com/in/ula-lapkus-8651a22b4/"
          target="_blank"
          className="footnote_link"
        >
          <Image src={linkedin} alt="" className="footnote_icon" />
          <p className="footnote_caption">LINKEDIN</p>
        </a>
      </div>
      <div className="footnote_container">
        <a
          href="https://github.com/ulapkus"
          target="_blank"
          className="footnote_link"
        >
          <Image src={github} alt="" className="footnote_icon" />
          <p className="footnote_caption">GITHUB</p>
        </a>
      </div>
      <div
        className="footnote_container_email"
        onClick={copyEmail}
        onMouseOver={showInstruction}
        onMouseOut={hideInstruction}
      >
        <Image src={emailicon} alt="" className="footnote_icon_email" />
        <p className="footnote_caption_email">
          {copySuccessMessage} {instructions}
        </p>
      </div>
    </div>
  );
}
