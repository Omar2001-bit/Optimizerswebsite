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
  { label: "Services", sectionId: "section-services" },
  { label: "ROI Calculator", sectionId: "roi-calculator-section" },
  { label: "Case Studies", sectionId: "section-case-studies" },
  { label: "Team", sectionId: "section-team" },
  { label: "Contact", sectionId: "section-contact" },
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
    <div id="main-container" className="bg-dark-mode900 overflow-hidden w-full relative">
      <header id="header-navigation" className="flex w-full max-w-[1371px] h-[76px] items-center justify-between px-4 md:px-8 py-4 flex-wrap md:flex-nowrap fixed top-3 left-1/2 transform -translate-x-1/2 bg-[#ffffff1a] rounded overflow-hidden border-[none] backdrop-blur-[23.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(23.5px)_brightness(100%)] z-[100] mx-4 before:content-[''] before:absolute before:inset-0 before:p-px before:rounded before:[background:linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(10,57,28,0.3)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <img
          id="logo-main"
          className="relative w-[119px] h-[22px]"
          alt="Frame"
          src="/figmaAssets/frame-2131328421.svg"
        />

        <nav id="main-navigation" className="hidden lg:inline-flex items-start gap-4 relative flex-[0_0_auto]">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              id={`nav-item-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="relative w-fit mt-[-1.00px] font-normal text-shadeswhite text-[14px] tracking-[0px] leading-[17px] whitespace-nowrap cursor-pointer hover:opacity-80"
              onClick={() => {
                document.getElementById(item.sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {item.label}
            </div>
          ))}
        </nav>

        <div id="header-actions" className="inline-flex items-center justify-end gap-5 relative flex-[0_0_auto]">
          <div id="language-selector" className="hidden md:inline-flex items-center justify-center gap-1 relative flex-[0_0_auto] cursor-pointer">
            <img
              id="lang-flag-icon"
              className="relative w-6 h-6"
              alt="En svg"
              src="/figmaAssets/en-svg.svg"
            />

            <img
              id="lang-dropdown-arrow"
              className="relative w-4 h-4"
              alt="Outline arrows alt"
              src="/figmaAssets/outline---arrows---alt-arrow-right.svg"
            />
          </div>

          <Button 
            id="button-free-audit" 
            className="px-3 md:px-4 py-2 relative flex-[0_0_auto] bg-secondary-500 inline-flex items-center justify-center gap-2 rounded h-auto hover:bg-secondary-500"
            onClick={() => {
              document.getElementById('testimonials-booking-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            <div className="font-semibold text-neutral-900 text-[12px] md:text-[14px] leading-[17px] whitespace-nowrap relative w-fit mt-[-1.00px] tracking-[0px]">
              Get Free Audit
            </div>
          </Button>
        </div>
      </header>

      <HeroSection />



      <section id="section-brand-logos" className="flex flex-col w-full max-w-[1144px] items-start justify-center p-[9px] relative mx-auto mt-[100px] md:mt-[157px] mb-[100px] md:mb-[160px] px-4 bg-[#ffffff03] rounded-3xl overflow-hidden border border-solid border-[#6ae49933] shadow-[inset_0px_0px_0px_9px_#ffffff08]">
        <div id="brand-logos-container" className="flex flex-col items-center justify-center gap-6 px-5 py-6 relative self-stretch w-full flex-[0_0_auto] rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%)]">
          <h2 id="brand-logos-title" className="relative self-stretch mt-[-1.00px] font-semibold text-shadeswhite text-[23px] text-center tracking-[-0.46px] leading-[28px]">
            Trusted by Leading GCC &amp; MENA Brands
          </h2>

          <div id="brand-logos-list" className="flex flex-wrap items-center justify-center gap-6 md:gap-10 relative">
            {brandLogos.map((logo, index) => (
              <div
                key={index}
                id={`brand-logo-${index + 1}`}
                className={`relative ${logo.width} ${logo.height} ${logo.backgroundImage} bg-cover bg-[50%_50%] grayscale hover:grayscale-0 transition-all duration-300`}
              />
            ))}
          </div>

          <img
            id="brand-logos-top-decoration"
            className="absolute top-0 right-[57px] w-[180px] h-2"
            alt="Mask group"
            src="/figmaAssets/mask-group-67.svg"
          />

          <img
            id="brand-logos-bottom-decoration"
            className="absolute left-[57px] bottom-[-7px] w-[180px] h-2"
            alt="Mask group"
            src="/figmaAssets/mask-group-69.svg"
          />
        </div>
      </section>

      <div id="main-content-sections" className="flex flex-col w-full items-start relative">
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
