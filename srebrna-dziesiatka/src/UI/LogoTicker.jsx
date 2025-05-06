import React, { useEffect, useRef } from "react";


const logos = [
  "/logo-anbi.jpg",
  "/logo-black.png",
  "/logo-arkop.jpg",
  "/logo-hot_sun.png",
  "/logo-vestalia.jpg",
  "/logo-boltech.svg",
  "/logo-plexi.jpg",
  "/logo-anbi.jpg",
  "/logo-black.png",
  "/logo-arkop.jpg",
  "/logo-hot_sun.png",
  "/logo-vestalia.jpg",
  "/logo-boltech.svg",
  "/logo-plexi.jpg",

];

export default function LogoTicker() {
  const trackRef = useRef(null);

  useEffect(() => {
    const imgs = Array.from(trackRef.current.querySelectorAll("img"));
    Promise.all(
      imgs.map(
        (img) =>
          img.complete ? Promise.resolve() : new Promise((res) => (img.onload = res))
      )
    ).then(() => {
      const w = trackRef.current.scrollWidth / 2;      
      trackRef.current.style.setProperty("--track-w", `${w}px`);
      trackRef.current.style.setProperty("--duration", `${Math.max(12, w / 200)}s`);
    });
  }, []);

  return (
    <div className="ticker">
      <div className="ticker__track" ref={trackRef}>
        {logos.concat(logos).map((src, idx) => (
          <img src={src} alt="logo" className="ticker__logo" key={idx} />
        ))}
      </div>
    </div>
  );
}
