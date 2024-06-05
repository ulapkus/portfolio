import React, { useState, useEffect } from "react";
import Image from "next/image";
import backgroundimg from "../../public/background-smaller.webp";
import mountains from "../../public/mountains.webp";
import buildings from "../../public/buildings.webp";
import trees from "../../public/trees.webp";
import stars from "../../public/stars.gif";
import Aboutme from "./aboutme";

export default function Landscape() {
  const [scrollPosition, setScrollPosition] = useState(0);

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

  const mountainsY = Math.max(0, scrollPosition * 0.5);
  const mountainsScale = Math.min(1 + scrollPosition / 3000, 8);

  const buildingsY = Math.max(0, scrollPosition * 0.4);
  const buildingsScale = Math.min(1 + scrollPosition / 800, 8);

  const treesY = Math.max(0, scrollPosition * 0.15);
  const treesScale = Math.min(1 + scrollPosition / 800, 10);

  const isVisible = scrollPosition > 100; // Adjust scroll position as needed

  return (
    <div className="container">
      <div className="background">
        <Image className="backgroundimg" src={backgroundimg} alt="" priority />
        <div className="heading_container">
          <h1 className="name_intro">HELLO, MY NAME IS</h1>
          <h1 className="name">ULA LAPKUS</h1>
          <h1 className="name_caption">SELF-TAUGHT FULLSTACK ENGINEER</h1>
          <h1 className="name_caption">IN SALT LAKE CITY, UT</h1>
        </div>
        <Image
          priority
          src={mountains}
          alt=""
          className="mountains"
          style={{
            transform: `translateY(${mountainsY}px) scale(${mountainsScale})`,
          }}
        />
        <Image
          className="buildings"
          alt=""
          src={buildings}
          priority
          style={{
            transform: `translateY(${buildingsY}px) scale(${buildingsScale})`,
          }}
        />
        <Image
          priority
          alt=""
          className="trees"
          src={trees}
          style={{
            transform: `translateY(${treesY}px) scale(${treesScale})`,
          }}
        />
        <div
          className="dark_tint"
          style={{
            backgroundColor: `rgba(0, 0, 0, ${darkness})`,
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 5,
          }}
        />
      </div>
      <div className="foreground">
        <Image className="stars" src={stars} alt="" />
        <Aboutme />
      </div>
    </div>
  );
}
