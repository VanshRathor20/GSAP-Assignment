import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Car from "./Car";
import YellowCard from "./YellowCard";
import GreyCard from "./GreyCard";
import BlueCard from "./BlueCard";
import OrangeCard from "./OrangeCard";

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
  const sectionRef = useRef();
  const carRef = useRef();
  const textRef = useRef();
  const topCardsRef = useRef([]);
  const bottomCardsRef = useRef([]);

  //scroll section animation
  useGSAP(() => {
    // Set initial states - car starts at left, green banner hidden
    gsap.set(textRef.current, { width: "5%" });
    gsap.set(carRef.current, { left: "0%", xPercent: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
      },
    });

    // Car and green banner move together as one unit
    // Both use left percentage for perfect sync
    tl.to(
      carRef.current,
      {
        left: "85%",
        ease: "none",
        duration: 1,
      },
      0,
    );

    tl.to(
      textRef.current,
      {
        width: "100%",
        ease: "none",
        duration: 1,
      },
      0,
    );

    // 1. Yellow card animation
    tl.from(
      topCardsRef.current[0],
      {
        opacity: 0,
        y: -50,
        duration: 0.2,
      },
      0.3,
    );

    // 2. Blue card animation
    tl.from(
      bottomCardsRef.current[0],
      {
        opacity: 0,
        y: 50,
        duration: 0.2,
      },
      0.4,
    );

    // 3. Grey card animation
    tl.from(
      topCardsRef.current[1],
      {
        opacity: 0,
        y: -50,
        duration: 0.2,
      },
      0.5,
    );

    // 4. Orange card animation
    tl.from(
      bottomCardsRef.current[1],
      {
        opacity: 0,
        y: 50,
        duration: 0.2,
      },
      0.6,
    );
  }, [sectionRef]);

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-gray-300 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Black Road Section - Behind green banner */}
      <div className="absolute w-full h-40 bg-black z-0"></div>

      {/* Green Banner with Text - On top of black */}
      <div
        ref={textRef}
        className="absolute left-0 h-40 bg-[#2DD881] flex items-center z-10 overflow-hidden"
      >
        <h1
          className="text-black font-black text-9xl tracking-tight whitespace-nowrap px-8"
          style={{ fontFamily: "Arial Black, sans-serif" }}
        >
          WELCOME ITZFIZZ
        </h1>
      </div>

      {/* Car */}
      <Car ref={carRef} />

      {/* Top Stats Cards (Yellow & Grey) */}
      <div className="absolute top-10 right-10 flex gap-6">
        <div ref={(el) => (topCardsRef.current[0] = el)}>
          <YellowCard />
        </div>
        <div ref={(el) => (topCardsRef.current[1] = el)}>
          <GreyCard />
        </div>
      </div>

      {/* Bottom Stats Cards (Blue & Orange) */}
      <div className="absolute bottom-10 right-10 flex gap-6">
        <div ref={(el) => (bottomCardsRef.current[0] = el)}>
          <BlueCard />
        </div>
        <div ref={(el) => (bottomCardsRef.current[1] = el)}>
          <OrangeCard />
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
