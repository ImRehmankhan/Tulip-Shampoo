import React from "react";
import tulip from "../assets/tulip.mp4";

export default function FullScreenVideo({ poster }) {
  return (
 <section className="w-full h-screen bg-black">
  <video
    className="w-full h-full object-fit"
    src={tulip}
    poster={poster}
    autoPlay
    muted
    loop
    playsInline
  />
</section>

  );
}
