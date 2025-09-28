import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const servicesData = [
  {
    title: "Ongoing CRO Programs",
    description:
      "A continuous cycle of research, testing, and improvement that boost results over time.",
    topMask: "/figmaAssets/mask-group-2.svg",
    bottomMask: "/figmaAssets/mask-group-29.svg",
    position: "top-[216px] left-[calc(50.00%_-_688px)]",
  },
  {
    title: "A/B Testing",
    description:
      "Run systematic experiments to discover which design, copy, or flow converts best.",
    topMask: "/figmaAssets/mask-group-18.svg",
    bottomMask: "/figmaAssets/mask-group-71.svg",
    position: "top-[216px] left-[calc(50.00%_+_258px)]",
  },
  {
    title: "GA4 Implementation & Tracking",
    description:
      "Set up advanced tracking to measure every step of the customer journey.",
    topMask: "/figmaAssets/mask-group-38.svg",
    bottomMask: "/figmaAssets/mask-group-4.svg",
    position: "top-[404px] left-[calc(50.00%_+_258px)]",
    titleWidth: "w-[364px]",
  },
  {
    title: "CRO Audits",
    description:
      "Analyze your funnel to spot leaks, friction points, and hidden opportunities.",
    topMask: "/figmaAssets/mask-group-23.svg",
    bottomMask: "/figmaAssets/mask-group-7.svg",
    position: "top-[404px] left-[calc(50.00%_-_688px)]",
  },
  {
    title: "Landing Page Optimization",
    description:
      "Design and refine landing pages built to maximize conversions.",
    topMask: "/figmaAssets/mask-group-28.svg",
    bottomMask: "/figmaAssets/mask-group-14.svg",
    position: "top-[592px] left-[calc(50.00%_-_214px)]",
  },
];

const backgroundFrames = [
  {
    className:
      "top-[210px] left-[628px] w-[166px] h-[166px] rounded-[10.19px] bg-[url(/figmaAssets/frame-37613.png)] bg-cover bg-[50%_50%]",
  },
  {
    className:
      "top-[367px] left-[558px] w-[175px] h-[175px] rounded-[10.77px] border border-solid border-[#ffffff33] rotate-[17.91deg] [background:url(..//figmaAssets/frame-37614.png)_50%_50%_/_cover]",
  },
  {
    className:
      "top-[262px] left-[534px] w-[178px] h-[178px] rounded-[10.98px] rotate-[-25.19deg] [background:url(..//figmaAssets/frame-37617.png)_50%_50%_/_cover]",
  },
  {
    className:
      "top-[367px] left-[740px] w-[175px] h-[175px] rounded-[10.76px] rotate-[34.12deg] bg-[url(/figmaAssets/frame-37618.png)] bg-cover bg-[50%_50%]",
  },
  {
    className:
      "top-[236px] left-[710px] w-[187px] h-[187px] rounded-[11.51px] rotate-[-11.61deg] bg-[url(/figmaAssets/frame-37616.png)] bg-cover bg-[50%_50%]",
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[950px] bg-dark-mode900">
      {servicesData.map((service, index) => (
        <Card
          key={index}
          className={`flex flex-col w-[430px] items-start justify-center p-[9px] absolute ${service.position} bg-[#ffffff03] rounded-3xl overflow-hidden border border-solid border-[#ffffff1a] shadow-[inset_0px_0px_0px_9px_#ffffff08]`}
        >
          <CardContent className="flex flex-col items-center justify-center gap-4 p-6 relative self-stretch w-full flex-[0_0_auto] rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%)]">
            <h3
              className={`relative ${service.titleWidth || "self-stretch"} mt-[-1.00px] font-heading-h5-semi-bold font-[number:var(--heading-h5-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h5-semi-bold-font-size)] tracking-[var(--heading-h5-semi-bold-letter-spacing)] leading-[var(--heading-h5-semi-bold-line-height)] [font-style:var(--heading-h5-semi-bold-font-style)]`}
            >
              {service.title}
            </h3>

            <p className="relative self-stretch font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
              {service.description}
            </p>

            <img
              className="absolute top-0 right-[57px] w-[180px] h-2"
              alt="Mask group"
              src={service.topMask}
            />

            <img
              className="absolute left-[57px] bottom-[-7px] w-[180px] h-2"
              alt="Mask group"
              src={service.bottomMask}
            />
          </CardContent>
        </Card>
      ))}

      <Button className="px-5 py-3.5 absolute top-[800px] left-[calc(50.00%_-_149px)] border border-solid border-[#6ae499] inline-flex items-center justify-center gap-2 rounded h-auto bg-transparent hover:bg-[#6ae49910]">
        <span className="font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-secondary-500 text-[length:var(--paragraph-p3-semi-bold-font-size)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap relative w-fit mt-[-1.00px] font-paragraph-p3-semi-bold tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] [font-style:var(--paragraph-p3-semi-bold-font-style)]">
          See How Our Process Works
        </span>
      </Button>

      <header className="flex w-[870px] items-center absolute top-[100px] left-[calc(50.00%_-_434px)] flex-col gap-6">
        <h1 className="relative self-stretch mt-[-1.00px] font-heading-h1-semi-bold font-[number:var(--heading-h1-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h1-semi-bold-font-size)] text-center tracking-[var(--heading-h1-semi-bold-letter-spacing)] leading-[var(--heading-h1-semi-bold-line-height)] [font-style:var(--heading-h1-semi-bold-font-style)]">
          Our Services
        </h1>
      </header>

      {backgroundFrames.map((frame, index) => (
        <div key={index} className={`absolute ${frame.className}`} />
      ))}
    </section>
  );
};
