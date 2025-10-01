"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const servicesData = [
  {
    title: "Ongoing CRO Programs",
    description: "A continuous cycle of research, testing, and improvement that boost results over time.",
    topMask: "/figmaAssets/mask-group-2.svg",
    bottomMask: "/figmaAssets/mask-group-29.svg",
    position: "top-[216px] left-[calc(50.00%_-_688px)]",
    animateFrom: { x: -200, y: 0 },
  },
  {
    title: "A/B Testing",
    description: "Run systematic experiments to discover which design, copy, or flow converts best.",
    topMask: "/figmaAssets/mask-group-18.svg",
    bottomMask: "/figmaAssets/mask-group-71.svg",
    position: "top-[216px] left-[calc(50.00%_+_258px)]",
    animateFrom: { x: 200, y: -100 },
  },
  {
    title: "GA4 Implementation & Tracking",
    description: "Set up advanced tracking to measure every step of the customer journey.",
    topMask: "/figmaAssets/mask-group-38.svg",
    bottomMask: "/figmaAssets/mask-group-4.svg",
    position: "top-[404px] left-[calc(50.00%_+_258px)]",
    titleWidth: "w-[364px]",
    animateFrom: { x: 200, y: 150 },
  },
  {
    title: "CRO Audits",
    description: "Analyze your funnel to spot leaks, friction points, and hidden opportunities.",
    topMask: "/figmaAssets/mask-group-23.svg",
    bottomMask: "/figmaAssets/mask-group-7.svg",
    position: "top-[404px] left-[calc(50.00%_-_688px)]",
    animateFrom: { x: -200, y: 150 },
  },
  {
    title: "Landing Page Optimization",
    description: "Design and refine landing pages built to maximize conversions.",
    topMask: "/figmaAssets/mask-group-28.svg",
    bottomMask: "/figmaAssets/mask-group-14.svg",
    position: "top-[592px] left-[calc(50.00%_-_214px)]",
    animateFrom: { x: 0, y: 200 },
  },
];

const backgroundFrames = [
    { className: "top-[210px] left-[628px] w-[166px] h-[166px] rounded-[10.19px] bg-[url(/figmaAssets/frame-37613.png)] bg-cover", animateFrom: { x: 0, y: -300, scale: 0.5 } },
    { className: "top-[367px] left-[558px] w-[175px] h-[175px] rounded-[10.77px] border border-solid border-[#ffffff33] rotate-[17.91deg] [background:url(/figmaAssets/frame-37614.png)_50%_50%_/_cover]", animateFrom: { x: -250, y: 200, scale: 0.5 } },
    { className: "top-[262px] left-[534px] w-[178px] h-[178px] rounded-[10.98px] rotate-[-25.19deg] [background:url(/figmaAssets/frame-37617.png)_50%_50%_/_cover]", animateFrom: { x: -300, y: 0, scale: 0.5 } },
    { className: "top-[367px] left-[740px] w-[175px] h-[175px] rounded-[10.76px] rotate-[34.12deg] bg-[url(/figmaAssets/frame-37618.png)] bg-cover", animateFrom: { x: 250, y: 200, scale: 0.5 } },
    { className: "top-[236px] left-[710px] w-[187px] h-[187px] rounded-[11.51px] rotate-[-11.61deg] bg-[url(/figmaAssets/frame-37616.png)] bg-cover", animateFrom: { x: 300, y: -200, scale: 0.5 } },
];


export const ServicesSection = (): JSX.Element => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // CORRECTED: Animation now completes when the top of the section reaches the top of the screen.
    offset: ["start end", "start start"],
  });

  return (
    <section id="section-services" ref={ref} className="relative w-full min-h-[950px] bg-dark-mode900 py-[100px] md:py-[200px]">
      <div className="max-w-[1440px] mx-auto relative h-full">
        {servicesData.map((service, index) => {
          const x = useTransform(scrollYProgress, [0, 1], [service.animateFrom.x, 0]);
          const y = useTransform(scrollYProgress, [0, 1], [service.animateFrom.y, 0]);
          const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]); // Fade in a little faster than the movement

          return (
              <motion.div
                key={index}
                id={`service-card-wrapper-${index}`}
                style={{ x, y, opacity }}
                className={`absolute ${service.position}`}
              >
                <Card id={`service-card-${index}`} className="flex flex-col w-[430px] items-start justify-center p-[9px] bg-[#ffffff03] rounded-3xl overflow-hidden border border-solid border-[#ffffff1a] shadow-[inset_0px_0px_0px_9px_#ffffff08]">
                  <CardContent id={`service-card-content-${index}`} className="flex flex-col items-center justify-center gap-4 p-6 relative self-stretch w-full rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%)]">
                      <h3 id={`service-title-${index}`} className={`relative ${service.titleWidth || "self-stretch"} mt-[-1.00px] font-semibold text-shadeswhite text-[23px] tracking-[-0.46px] leading-[28px]`}>
                          {service.title}
                      </h3>
                      <p id={`service-description-${index}`} className="relative self-stretch font-normal text-shadeswhite text-[16px] tracking-[0px] leading-[19px]">
                          {service.description}
                      </p>
                      <img id={`service-top-mask-${index}`} className="absolute top-0 right-[57px] w-[180px] h-2" alt="Mask group" src={service.topMask}/>
                      <img id={`service-bottom-mask-${index}`} className="absolute left-[57px] bottom-[-7px] w-[180px] h-2" alt="Mask group" src={service.bottomMask}/>
                  </CardContent>
                </Card>
              </motion.div>
          );
        })}

        <Button 
          id="services-cta-button" 
          className="px-5 py-3.5 absolute top-[760px] left-[calc(50.00%_-_149px)] border border-solid border-[#6ae499] inline-flex items-center justify-center gap-2 rounded h-auto bg-transparent hover:bg-transparent hover:text-secondary-500"
          onClick={() => {
            document.getElementById('section-feature-process')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          <span id="services-cta-button-text" className="font-semibold text-[18px] text-secondary-500 tracking-[0px] leading-[21.6px]">
            See How Our Process Works
          </span>
        </Button>

        <header id="services-header" className="flex w-[870px] items-center absolute top-[60px] left-[calc(50.00%_-_434px)] flex-col gap-6">
          <h1 id="services-title" className="relative self-stretch mt-[-1.00px] font-semibold text-shadeswhite text-center text-[48px] tracking-[-1.92px] leading-[56px]">
            Our Services
          </h1>
        </header>

        {backgroundFrames.map((frame, index) => {
          const x = useTransform(scrollYProgress, [0, 1], [frame.animateFrom.x, 0]);
          const y = useTransform(scrollYProgress, [0, 1], [frame.animateFrom.y, 0]);
          const scale = useTransform(scrollYProgress, [0, 1], [frame.animateFrom.scale, 1]);
          const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

          return (
              <motion.div
                key={index}
                id={`services-bg-frame-${index}`}
                style={{ x, y, scale, opacity }}
                className={`absolute ${frame.className}`}
              />
          );
        })}
      </div>
    </section>
  );
};