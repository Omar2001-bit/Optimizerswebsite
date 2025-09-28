import React from "react";
import { Button } from "@/components/ui/button";
import { ClientsResultsSection } from "./sections/ClientsResultsSection";
import { ContactSection } from "./sections/ContactSection";
import { ContentSection } from "./sections/ContentSection";
import { DataTableSection } from "./sections/DataTableSection";
import { FeatureSection } from "./sections/FeatureSection";
import { FooterSection } from "./sections/FooterSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { InfoWrapperSection } from "./sections/InfoWrapperSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NodeSection } from "./sections/NodeSection";
import { OverviewSection } from "./sections/OverviewSection";
import { ServicesSection } from "./sections/ServicesSection";
import { StatisticsSection } from "./sections/StatisticsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WhatWeDoSection } from "./sections/WhatWeDoSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

const navigationItems = [
  "Services",
  "ROI Calculator",
  "Case Studies",
  "Team",
  "Contact",
];

const brandLogos = [
  {
    width: "w-[289.13px]",
    height: "h-[60px]",
    backgroundImage:
      "bg-[url(/figmaAssets/2fe3278a-ce58-4000-b160-a7415574aac1.png)]",
  },
  {
    width: "w-[168px]",
    height: "h-[60px]",
    backgroundImage: "bg-[url(/figmaAssets/squadio-logo-2.png)]",
  },
  {
    width: "w-[124px]",
    height: "h-[60.06px]",
    backgroundImage:
      "bg-[url(/figmaAssets/b6b89180-4d95-4361-ac5a-0a68e0db06c0.svg)]",
  },
  {
    width: "w-[72px]",
    height: "h-[60.23px]",
    backgroundImage:
      "bg-[url(/figmaAssets/vitrine-furniture-09082019-ee834ce7-e8ea-4e00-878d-60378a796ff0-.png)]",
  },
  {
    width: "w-[90px]",
    height: "h-[72px]",
    backgroundImage:
      "bg-[url(/figmaAssets/el-kalb-el-4a2y---white-and-no-background.png)]",
  },
  {
    width: "w-[83.44px]",
    height: "h-[72.26px]",
    backgroundImage: "bg-[url(/figmaAssets/regal-en-logo-01.png)]",
  },
];

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-dark-mode900 overflow-hidden w-full min-w-[1440px] relative">
      <header className="flex w-[1376px] h-[76px] items-center justify-between px-8 py-4 flex-nowrap fixed top-3 left-[calc(50.00%_-_688px)] bg-[#ffffff1a] rounded overflow-hidden border-[none] backdrop-blur-[23.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(23.5px)_brightness(100%)] z-50 before:content-[''] before:absolute before:inset-0 before:p-px before:rounded before:[background:linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(10,57,28,0.3)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <img
          className="relative w-[119px] h-[22px]"
          alt="Frame"
          src="/figmaAssets/frame-2131328421.svg"
        />

        <nav className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className="relative w-fit mt-[-1.00px] font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p1-regular-font-size)] tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p1-regular-font-style)] cursor-pointer hover:opacity-80"
            >
              {item}
            </div>
          ))}
        </nav>

        <div className="inline-flex items-center justify-end gap-5 relative flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto] cursor-pointer">
            <img
              className="relative w-6 h-6"
              alt="En svg"
              src="/figmaAssets/en-svg.svg"
            />

            <img
              className="relative w-4 h-4"
              alt="Outline arrows alt"
              src="/figmaAssets/outline---arrows---alt-arrow-right.svg"
            />
          </div>

          <Button className="px-4 py-2 relative flex-[0_0_auto] bg-secondary-500 inline-flex items-center justify-center gap-2 rounded h-auto">
            <div className="font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-neutral-900 text-[length:var(--paragraph-p1-semi-bold-font-size)] leading-[var(--paragraph-p1-semi-bold-line-height)] whitespace-nowrap relative w-fit mt-[-1.00px] font-paragraph-p1-semi-bold tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
              Get Free Audit
            </div>
          </Button>
        </div>
      </header>

      <HeroSection />

      <div className="relative w-full flex justify-center mt-[297px]">
        <div className="w-[806px] h-[658px] bg-[url(/figmaAssets/q-44e26a19-png.png)] bg-cover bg-[50%_50%]" />
      </div>

      <div className="relative w-full flex justify-center mt-[-105px]">
        <div className="w-[806px] h-[579px] bg-[url(/figmaAssets/q-44e26a19-png-1.png)] bg-cover bg-[50%_50%]" />
      </div>

      <section className="flex flex-col w-[1144px] items-start justify-center p-[9px] relative mx-auto mt-[157px] bg-[#ffffff03] rounded-3xl overflow-hidden border border-solid border-[#6ae49933] shadow-[inset_0px_0px_0px_9px_#ffffff08]">
        <div className="flex flex-col items-center justify-center gap-6 px-5 py-6 relative self-stretch w-full flex-[0_0_auto] rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%)]">
          <h2 className="relative self-stretch mt-[-1.00px] font-heading-h5-semi-bold font-[number:var(--heading-h5-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h5-semi-bold-font-size)] text-center tracking-[var(--heading-h5-semi-bold-letter-spacing)] leading-[var(--heading-h5-semi-bold-line-height)] [font-style:var(--heading-h5-semi-bold-font-style)]">
            Trusted by Leading GCC &amp; MENA Brands
          </h2>

          <div className="inline-flex items-center gap-10 relative flex-[0_0_auto]">
            {brandLogos.map((logo, index) => (
              <div
                key={index}
                className={`relative ${logo.width} ${logo.height} ${logo.backgroundImage} bg-cover bg-[50%_50%]`}
              />
            ))}
          </div>

          <img
            className="absolute top-0 right-[57px] w-[180px] h-2"
            alt="Mask group"
            src="/figmaAssets/mask-group-67.svg"
          />

          <img
            className="absolute left-[57px] bottom-[-7px] w-[180px] h-2"
            alt="Mask group"
            src="/figmaAssets/mask-group-69.svg"
          />
        </div>
      </section>

      <div className="flex flex-col w-full items-start relative">
        <ClientsResultsSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <WhatWeDoSection />
        <DataTableSection />
        <OverviewSection />
        <FeatureSection />
        <InfoWrapperSection />
        <MainContentSection />
        <ContentSection />
        <NodeSection />
        <StatisticsSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
};
