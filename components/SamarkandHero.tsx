"use client";

import { useRef, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

// Animation configuration constants
const ANIMATION_CONFIG = {
  scrollTrigger: {
    start: "top top",
    end: "+=1000",
    scrub: 1,
    pin: true,
  },
  imageAnimations: [
    { selector: ".img-1", x: "-100%" },
    { selector: ".img-2", x: "-120%" },
    { selector: ".img-4", x: "100%" },
    { selector: ".img-5", x: "120%" },
    { selector: ".img-7", x: "-20%" },
    { selector: ".img-8", x: "-20%", y: "70%" },
    { selector: ".img-9", x: "20%", y: "-70%" },
    { selector: ".img-10", x: "20%" },
  ],
  centerImage: {
    width: "100vw",
    height: "100vh",
    ease: "power2.inOut",
  },
} as const;

// Image data configuration
const IMAGE_DATA = [
  {
    src: "/images/image-4.png",
    alt: "Samarkand architecture detail",
    className: "img-2 w-3xs h-[50%]",
    width: 480,
    height: 480,
    dataSpeed: "0.7",
  },
  {
    src: "/images/image-1.png",
    alt: "Samarkand landscape",
    className: "img-7",
    width: 480,
    height: 260,
  },
  {
    src: "/images/image-2.png",
    alt: "Samarkand architecture",
    className: "img-8",
    width: 480,
    height: 260,
  },
  {
    src: "/images/image-1.png",
    alt: "Samarkand landscape",
    className: "img-9",
    width: 480,
    height: 260,
  },
  {
    src: "/images/image-2.png",
    alt: "Samarkand architecture",
    className: "img-10",
    width: 480,
    height: 260,
  },
  {
    src: "/images/image-3.png",
    alt: "Samarkand cultural detail",
    className: "img-5 w-3xs h-[50%]",
    width: 480,
    height: 480,
    dataSpeed: "0.7",
  },
] as const;

const SamarkandHero = () => {
  const container = useRef<HTMLElement>(null);

  // Memoize the animation setup to prevent unnecessary re-runs
  const animationSetup = useMemo(() => {
    return () => {
      if (!container.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          ...ANIMATION_CONFIG.scrollTrigger,
        },
      });

      // Apply side image animations
      ANIMATION_CONFIG.imageAnimations.forEach(({ selector, ...props }) => {
        tl.to(selector, props, 0);
      });

      // Center image expansion
      tl.to(".img-3", ANIMATION_CONFIG.centerImage, 0);

      // Text fade in
      tl.fromTo(".img-text", { opacity: 0 }, { opacity: 1 }, 0);
    };
  }, []);

  useGSAP(animationSetup, { scope: container });

  return (
    <section
      ref={container}
      className="h-[100vh] relative bg-white overflow-hidden"
    >
      <div
        className="grid grid-cols-5 gap-4 justify-center bg-cover bg-center items-start h-full relative z-10"
        style={{ backgroundImage: "url(/images/samarkhand.jpg)" }}
        data-speed="1"
      >
        {/* Left side images */}
        <div className="w-full h-full col-span-2 flex justify-end items-center bg-white p-10 gap-10 img-1">
          <Image
            className={IMAGE_DATA[0].className}
            src={IMAGE_DATA[0].src}
            alt={IMAGE_DATA[0].alt}
            width={IMAGE_DATA[0].width}
            height={IMAGE_DATA[0].height}
            data-speed={IMAGE_DATA[0].dataSpeed}
            priority
          />
          <div className="space-y-10" data-speed="0.8">
            <Image
              className={IMAGE_DATA[1].className}
              src={IMAGE_DATA[1].src}
              alt={IMAGE_DATA[1].alt}
              width={IMAGE_DATA[1].width}
              height={IMAGE_DATA[1].height}
            />
            <Image
              className={IMAGE_DATA[2].className}
              src={IMAGE_DATA[2].src}
              alt={IMAGE_DATA[2].alt}
              width={IMAGE_DATA[2].width}
              height={IMAGE_DATA[2].height}
            />
          </div>
        </div>

        {/* Center title */}
        <div className="w-3xs flex text-center items-center h-full z-20">
          <h1 className="text-6xl font-bold text-white img-text uppercase">
            Samarkand
          </h1>
        </div>

        {/* Right side images */}
        <div className="w-full h-full col-span-2 flex justify-start items-center bg-white p-10 gap-10 img-4">
          <div className="space-y-10" data-speed="0.8">
            <Image
              className={IMAGE_DATA[3].className}
              src={IMAGE_DATA[3].src}
              alt={IMAGE_DATA[3].alt}
              width={IMAGE_DATA[3].width}
              height={IMAGE_DATA[3].height}
            />
            <Image
              className={IMAGE_DATA[4].className}
              src={IMAGE_DATA[4].src}
              alt={IMAGE_DATA[4].alt}
              width={IMAGE_DATA[4].width}
              height={IMAGE_DATA[4].height}
            />
          </div>
          <Image
            className={IMAGE_DATA[5].className}
            src={IMAGE_DATA[5].src}
            alt={IMAGE_DATA[5].alt}
            width={IMAGE_DATA[5].width}
            height={IMAGE_DATA[5].height}
            data-speed={IMAGE_DATA[5].dataSpeed}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default SamarkandHero;
