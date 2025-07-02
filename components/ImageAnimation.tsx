"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ImageAnimation = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // gsap.to(".box", {
      //   scrollTrigger: {
      //     trigger: ".box",
      //     start: "top bottom",
      //     end: "top top",
      //     markers: true,
      //     scrub: 1,
      //   },
      //   x: 400,
      // });

      gsap.to(".img-holder", {
        scrollTrigger: {
          trigger: ".img-holder",
          start: "top top",
          end: "bottom top",
          markers: true,
          scrub: 1,
        },
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });
    },
    { scope: container }
  );

  return (
    <section className="relative" ref={container}>
      {/* <div className="box"></div> */}
      <div className="h-[200vh]">
        <div className="img-holder">
          <img
            className="w-full h-screen object-cover"
            src="/images/samarkhand.jpg"
            alt="samarkhand"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageAnimation;
