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
      // gsap.to(".img-1", {
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
          end: "200% top",
          markers: true,
          scrub: 1,
        },
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });

      gsap.to(".img-1", {
        scrollTrigger: {
          trigger: ".img-holder",
          start: "top top",
          end: "200% top",
          markers: true,
          scrub: 1,
        },
        x: -800,
      });

      gsap.to(".img-2", {
        scrollTrigger: {
          trigger: ".img-holder",
          start: "top top",
          end: "200% top",
          markers: true,
          scrub: 1,
        },
        x: -800,
      });

      gsap.to(".img-3", {
        scrollTrigger: {
          trigger: ".img-holder",
          start: "top top",
          end: "200% top",
          markers: true,
          scrub: 1,
        },
        x: 800,
      });

      gsap.to(".img-4", {
        scrollTrigger: {
          trigger: ".img-holder",
          start: "top top",
          end: "200% top",
          markers: true,
          scrub: 1,
        },
        x: 800,
      });
    },
    { scope: container }
  );

  return (
    <section className="relative" ref={container}>
      <div className="h-[300vh]">
        <div className="flex items-center justify-between sticky top-0">
          <div className="flex gap-12">
            <img className="img-1" src="/images/image-4.png" alt="" />
            <div className="img-2 space-y-12">
              <img src="/images/image-1.png" alt="" />
              <img src="/images/image-2.png" alt="" />
            </div>
          </div>
          <div>
            <div className="img-holder">
              <img
                className="w-full h-screen object-cover"
                src="/images/samarkhand.jpg"
                alt="samarkhand"
              />
            </div>
          </div>
          <div className="flex gap-12">
            <div className="img-3 space-y-12">
              <img src="/images/image-1.png" alt="" />
              <img src="/images/image-2.png" alt="" />
            </div>
            <img className="img-4" src="/images/image-4.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageAnimation;
