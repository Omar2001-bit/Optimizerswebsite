"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const serviceCards = [
  {
    title: "A/B Tests",
    description:
      "Experimentation projects to validate key hypotheses and identify what drives conversions",
    topMask: "/figmaAssets/mask-group-19.svg",
    bottomMask: "/figmaAssets/mask-group-24.svg",
    backgroundImage: "",
  },
  {
    title: "Monitor & Audit Funnels",
    description:
      "Catch leaks early and ensure your store runs at peak performance",
    topMask: "/figmaAssets/mask-group-22.svg",
    bottomMask: "/figmaAssets/mask-group-16.svg",
    backgroundImage:
      "url(../figmaAssets/background-overlay-border-overlayblur.png)",
  },
  {
    title: "Optimize Landing Pages",
    description:
      "Design and test landing pages that maximize conversions, tailored for Arabic and GCC audiences",
    topMask: "/figmaAssets/mask-group-56.svg",
    bottomMask: "/figmaAssets/mask-group-3.svg",
    backgroundImage: "",
  },
  {
    title: "Data-Driven Design (UI/UX)",
    description:
      "Designs built for customers, rooted in analytics, consumer psychology, and Arabic UX best practices",
    topMask: "/figmaAssets/mask-group-32.svg",
    bottomMask: "/figmaAssets/mask-group-15.svg",
    backgroundImage: "",
  },
  {
    title: "Pre-Test Analysis",
    description: "Uncover opportunities before launching A/B tests",
    topMask: "/figmaAssets/mask-group-30.svg",
    bottomMask: "/figmaAssets/mask-group-25.svg",
    backgroundImage:
      "url(../figmaAssets/background-overlay-border-overlayblur-1.png)",
  },
  {
    title: "Heuristic Research & Competitive Analysis",
    description:
      "Expert insights into user behavior and competitor benchmarks to guide smarter decisions",
    topMask: "/figmaAssets/mask-group-12.svg",
    bottomMask: "/figmaAssets/mask-group-35.svg",
    backgroundImage: "",
  },
  {
    title: "Deliver Ongoing Insights",
    description:
      "Share experiment scorecards, growth reports, and actionable learnings",
    topMask: "/figmaAssets/mask-group-58.svg",
    bottomMask: "/figmaAssets/mask-group-27.svg",
    backgroundImage:
      "url(../figmaAssets/background-overlay-border-overlayblur-2.png)",
  },
  {
    title: "Ensure Accurate Tracking",
    description:
      "Accurate setup and tracking of GA4 and other analytics setups to measure performance across your entire funnel",
    topMask: "/figmaAssets/mask-group-31.svg",
    bottomMask: "/figmaAssets/mask-group-33.svg",
    backgroundImage:
      "url(../figmaAssets/background-overlay-border-overlayblur-3.png)",
  },
];

export const WhatWeDoSection = (): JSX.Element => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // CORRECTED: The animation is now spread over a longer scroll duration, making it feel later.
    offset: ["start end", "end end"],
  });

  return (
    <section ref={ref} id="section-what-we-do" className="w-full bg-dark-mode900 pt-[100px] md:pt-[200px] pb-[100px] md:pb-[200px] px-4 md:px-8">
      <div id="what-we-do-header" className="max-w-[870px] mx-auto flex flex-col items-center gap-[40px] md:gap-[60px] mb-[40px] md:mb-[60px]">
        <h1 id="what-we-do-title" className="font-semibold text-shadeswhite text-[32px] md:text-[48px] text-center tracking-[-1.92px] leading-[40px] md:leading-[56px]">
          What We Do
        </h1>
        <h2 id="what-we-do-subtitle" className="font-semibold text-shadeswhite text-[24px] md:text-[34px] text-center tracking-[-1.36px] leading-[30px] md:leading-[40px]">
          Ongoing CRO Programs — The Engine of Growth
        </h2>
        <p id="what-we-do-description" className="[font-family:'Sora',Helvetica] font-normal text-shadeswhite text-[20px] text-center tracking-[0] leading-6">
          <span className="leading-6">The biggest wins come from </span>
          <span className="font-semibold leading-6">
            a continuous cycle of research, testing, and improvement{" "}
          </span>
          <span className="leading-6">
            that compounds results over time. Our retainers give GCC e-commerce
            brands{" "}
          </span>
          <span className="font-semibold leading-6">
            a dedicated CRO team
          </span>
          <span className="leading-6"> that works month after month to:</span>
        </p>
      </div>

      <div id="what-we-do-services-grid-1" className="max-w-[1376px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {serviceCards.slice(0, 4).map((card, index) => {
          const start = 0.12 + (index * 0.07);
          const end = start + 0.26;

          const rotateY = useTransform(scrollYProgress, [start, end], [90, 0]);
          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

          return (
            <motion.div
              key={index}
              id={`what-we-do-card-${index}`}
              className="w-full bg-[#6ae4990a] rounded-3xl overflow-hidden border border-solid border-[#ffffff1a] shadow-[inset_0px_0px_0px_9px_#ffffff08] p-[9px]"
              style={{
                rotateY,
                opacity,
                perspective: 1000,
                transformStyle: "preserve-3d",
              }}
            >
              <CardContent
                className={`flex flex-col items-start justify-start gap-4 p-6 relative w-full h-full rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] ${card.backgroundImage ? 'has-background-image' : ''}`}
                style={{
                  background: card.backgroundImage
                    ? "radial-gradient(50% 50% at 50% 0%, rgba(168,127,255,0.04) 0%, rgba(168,127,255,0) 100%), linear-gradient(0deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.05) 100%)"
                    : "radial-gradient(50% 50% at 50% 0%, rgba(168,127,255,0.04) 0%, rgba(168,127,255,0) 100%), linear-gradient(0deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.05) 100%)",
                  '--bg-image': card.backgroundImage ? `${card.backgroundImage}` : 'none'
                } as React.CSSProperties & { '--bg-image': string }}
              >
                <h3 className="font-semibold text-shadeswhite text-[23px] tracking-[-0.46px] leading-[28px] text-left min-h-[56px]">
                  {card.title}
                </h3>
                <p className="font-normal text-shadeswhite text-[16px] tracking-[0px] leading-[19px] text-left">
                  {card.description}
                </p>
                <img className="absolute top-0 right-[57px] w-[180px] h-2" alt="Mask group" src={card.topMask} />
                <img className="absolute left-[57px] bottom-[-7px] w-[180px] h-2" alt="Mask group" src={card.bottomMask} />
              </CardContent>
            </motion.div>
          );
        })}
      </div>

      <div id="what-we-do-services-grid-2" className="max-w-[1376px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-[60px]">
        {serviceCards.slice(4, 8).map((card, index) => {
          const i = index + 4;
          const start = 0.12 + (i * 0.07);
          const end = start + 0.26;

          const rotateY = useTransform(scrollYProgress, [start, end], [90, 0]);
          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
          return (
            <motion.div
              key={i}
              id={`what-we-do-card-${i}`}
              className="w-full bg-[#6ae4990a] rounded-3xl overflow-hidden border border-solid border-[#ffffff1a] shadow-[inset_0px_0px_0px_9px_#ffffff08] p-[9px]"
              style={{
                rotateY,
                opacity,
                perspective: 1000,
                transformStyle: "preserve-3d",
              }}
            >
              <CardContent
                className={`flex flex-col items-start justify-start gap-4 p-6 relative w-full h-full rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] ${card.backgroundImage ? 'has-background-image' : ''}`}
                style={{
                  background: card.backgroundImage
                    ? "radial-gradient(50% 50% at 50% 0%, rgba(168,127,255,0.04) 0%, rgba(168,127,255,0) 100%), linear-gradient(0deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.05) 100%)"
                    : "radial-gradient(50% 50% at 50% 0%, rgba(168,127,255,0.04) 0%, rgba(168,127,255,0) 100%), linear-gradient(0deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.05) 100%)",
                  '--bg-image': card.backgroundImage ? `${card.backgroundImage}` : 'none'
                } as React.CSSProperties & { '--bg-image': string }}
              >
                <h3 className="font-semibold text-shadeswhite text-[23px] tracking-[-0.46px] leading-[28px] text-left min-h-[56px]">
                  {card.title}
                </h3>
                <p className="font-normal text-shadeswhite text-[16px] tracking-[0px] leading-[19px] text-left">
                  {card.description}
                </p>
                <img className="absolute top-0 right-[57px] w-[180px] h-2" alt="Mask group" src={card.topMask} />
                <img className="absolute left-[57px] bottom-[-7px] w-[180px] h-2" alt="Mask group" src={card.bottomMask} />
              </CardContent>
            </motion.div>
          );
        })}
      </div>

      <div id="what-we-do-cta-section" className="flex justify-center">
        <Button 
          id="what-we-do-cta-button" 
          className="px-5 py-3.5 bg-secondary-500 text-neutral-900 font-semibold text-[18px] tracking-[0px] leading-[21.6px] rounded h-auto hover:bg-secondary-500"
          onClick={() => {
            document.getElementById('testimonials-booking-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          Talk to a CRO Expert
        </Button>
      </div>
    </section>
  );
};