import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";

const ScrollSection = () => {
  const boxref = useRef();
  useGSAP(() => {
    gsap.to(boxref.current, {
      x: 100,
      rotate: 360,
      borderRadius: "50%",
      duration: 1,
    });
  }, []);
  return (
    <div ref={boxref} className="box bg-emerald-700 w-10 h-10 p-10 text-center">
      App
    </div>
  );
}

export default ScrollSection