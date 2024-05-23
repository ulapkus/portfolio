import React, { useState, useEffect } from "react";
import Image from "next/image";
import backgroundimg from "../../public/background-smaller.webp";
import mountains from "../../public/mountains.webp";
import buildingsmobile from "../../public/buildings v2.webp";
import treesmobile from "../../public/trees v2.webp";

export default function Landscapemobile() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showTint, setShowTint] = useState(false);

  useEffect(() => {
    if (scrollPosition >= 1000 && scrollPosition < 1500) {
      setShowTint(true);
    }
  }, [scrollPosition]);

  const darkness = Math.min(scrollPosition / 1500, 1);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mountainsYMobile = Math.max(0, scrollPosition * 0.15);
  const mountainsScaleMobile = Math.min(1 + scrollPosition / 2000, 8);

  const buildingsYMobile = Math.max(0, scrollPosition * 0.5);
  const buildingsScaleMobile = Math.min(1 + scrollPosition / 800, 8);

  const treesYMobile = Math.max(0, scrollPosition * 0.65);
  const treesScaleMobile = Math.min(1 + scrollPosition / 800, 10);

  return (
    <div className="background">
      <Image className="backgroundimg" src={backgroundimg} />
      <div className="heading_container_mobile">
        <h1 className="name_intro_mobile">HELLO, MY NAME IS</h1>
        <h1 className="name_mobile">ULA LAPKUS</h1>
        <h1 className="name_caption_mobile">SELF-TAUGHT FULLSTACK ENGINEER</h1>
        <h1 className="name_caption_mobile">IN SALT LAKE CITY, UT</h1>
      </div>
      <Image
        src={mountains}
        className="mountains_mobile"
        style={{
          transform: `translateY(${mountainsYMobile}px) scale(${mountainsScaleMobile})`,
        }}
      />
      <Image
        className="buildings_mobile"
        src={buildingsmobile}
        style={{
          transform: `translateY(${buildingsYMobile}px) scale(${buildingsScaleMobile})`,
        }}
      />
      <Image
        className="trees_mobile"
        src={treesmobile}
        style={{
          transform: `translateY(${treesYMobile}px) scale(${treesScaleMobile})`,
        }}
      />

      {showTint && (
        <div
          className="dark-tint"
          style={{
            backgroundColor: `rgba(0, 0, 0, ${darkness})`,
            height: "200vh",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        />
      )}
    </div>
  );
}
