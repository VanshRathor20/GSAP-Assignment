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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
      },
    });

    // Text reveal animation
    tl.from(textRef.current, {
      x: "-100%",
      opacity: 0,
      duration: 0.5,
    });

    //car movement animation
    tl.to(
      carRef.current,
      {
        x: "85vw",
        ease: "none",
        duration: 1,
      },
      "<0.3",
    );

    // Top cards animation (Yellow & Grey)
    tl.from(
      topCardsRef.current,
      {
        opacity: 0,
        y: -50,
        stagger: 0.2,
        duration: 0.3,
      },
      "<0.2",
    );

    // Bottom cards animation (Blue & Orange)
    tl.from(
      bottomCardsRef.current,
      {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.3,
      },
      "<0.2",
    );
  }, [sectionRef]);

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-gray-300 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Green Banner with Text */}
      <div className="absolute w-full h-40 bg-[#2DD881] flex items-center z-10">
        <h1
          ref={textRef}
          className="text-black font-black text-8xl tracking-tight whitespace-nowrap px-8"
          style={{ fontFamily: "Arial Black, sans-serif" }}
        >
          WELCOME ITZFIZZ
        </h1>
      </div>

      {/* Black Road Section */}
      <div className="absolute w-full h-40 bg-black top-[calc(50%+5rem)]"></div>

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
