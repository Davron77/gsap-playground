"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const ImageAnimation = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // ScrollSmoother.create({
      //   smooth: 1,
      //   effects: true,
      // });

      // gsap.registerPlugin(ScrollTrigger);
      // ScrollTrigger.create({
      //   trigger: ".box-c",
      //   pin: true,
      //   start: "center center",
      //   end: "+=300",
      //   markers: true,
      // });

      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=1000",
          scrub: 1,
          pin: true,
          // markers: true,
        },
      });

      // Phase 2: Side images slide out
      tl.to(".img-1", { x: "-100%" }, 0);
      tl.to(".img-2", { x: "-120%" }, 0);
      tl.to(".img-4", { x: "100%" }, 0);
      tl.to(".img-5", { x: "120%" }, 0);
      tl.to(".img-7", { x: "-20%" }, 0);
      tl.to(".img-8", { x: "-20%", y: "70%" }, 0);
      tl.to(".img-9", { x: "20%", y: "-70%" }, 0);
      tl.to(".img-10", { x: "20%" }, 0);

      // Phase 3: Center image expands
      tl.to(
        ".img-3",
        {
          width: "100vw",
          height: "100vh",
          ease: "power2.inOut",
        },
        0
      );
    },
    { scope: container }
  );

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
        <div className="w-full h-full col-span-2 flex justify-center items-center bg-white p-10 gap-10 img-1">
          <Image
            className="img-2 w-3xs h-[400px]"
            src={"/images/image-4.png"}
            alt="aa"
            width={480}
            height={260}
            data-speed="0.7"
          />
          <div className="space-y-10" data-speed="0.8">
            <Image
              className="img-7"
              src={"/images/image-1.png"}
              alt="aa"
              width={480}
              height={260}
            />
            <Image
              className="img-8"
              src={"/images/image-2.png"}
              alt="aa"
              width={480}
              height={260}
            />
          </div>
        </div>
        <div className="w-3xs h-full z-20"></div>
        <div className="w-full h-full col-span-2 flex justify-center items-center bg-white p-10 gap-10 img-4">
          <div className="space-y-10" data-speed="0.8">
            <Image
              className="img-9"
              src={"/images/image-1.png"}
              alt="aa"
              width={480}
              height={260}
            />
            <Image
              className="img-10"
              src={"/images/image-2.png"}
              alt="aa"
              width={480}
              height={260}
            />
          </div>
          <Image
            className="img-5 w-3xs h-[400px]"
            src={"/images/image-3.png"}
            alt="aa"
            width={480}
            height={260}
            data-speed="0.7"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageAnimation;
