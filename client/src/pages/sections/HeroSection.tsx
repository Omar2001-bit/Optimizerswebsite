"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const platformLogos = [
  {
    src: "/figmaAssets/6687d1be6301f78fecf93bc7-63bd507de1ccf48089402fa4-uoyhhm4z-weg3a.png",
    alt: "Img",
    className: "w-[60px] h-8 object-cover",
  },
  {
    src: "/figmaAssets/b9b3c47f-590c-9afc-97bc-b866bad86a72.png",
    alt: "Bbcf c afc",
    className: "w-[73px] h-8",
  },
  {
    src: "/figmaAssets/358-3589718-shopify-logo-white-transparent-1.png",
    alt: "Element shopify",
    className: "w-28 h-8 object-cover",
  },
  {
    src: "/figmaAssets/woocommerce-logo-1.png",
    alt: "Woocommerce logo",
    className: "w-14 h-8",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section id="section-hero" className="flex w-full h-[676px] items-end pt-0 pb-[60px] px-10 relative rounded-2xl overflow-hidden shadow-[0px_15px_61.7px_#93939340]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://core.optimizers.agency/wp-content/uploads/2025/09/Optimizers-Header_1.mp4"
      >
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 w-full h-full bg-black/40 z-10 pointer-events-none"></div>

      <Card id="hero-card" className="relative z-20 w-[493px] bg-[#ffffff33] border border-solid border-[#6ae49933] rounded-xl backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
        <CardContent id="hero-card-content" className="flex flex-col items-start gap-12 p-8">
          <div id="hero-main-content" className="flex flex-col items-start gap-6 w-full">
            <h1 id="hero-title" className="font-semibold text-white text-[34px] tracking-[-1.36px] leading-[40px]">
              Your ads bring visitors,
              <br />
              we turn them into buyers.
            </h1>

            <p id="hero-description" className="font-normal text-white text-[20px] tracking-[0px] leading-[24px]">
              If you&apos;re investing in ads but not seeing enough sales,
              we&apos;ll find the leaks in your funnel, fix them, and maximize
              your returns.
            </p>

            <Button 
              id="hero-cta-button" 
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-secondary-500 rounded h-auto hover:bg-secondary-500"
              onClick={() => {
                document.getElementById('testimonials-booking-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <span id="hero-cta-button-text" className="font-semibold text-neutral-900 text-[18px] tracking-[0px] leading-[21.6px] whitespace-nowrap">
                Start Your Journey Now
              </span>
            </Button>
          </div>

          <div id="hero-platforms-section" className="flex flex-col items-start gap-4 w-full">
            <h2 id="hero-platforms-title" className="font-semibold text-white text-[16px] tracking-[-0.32px] leading-[19px]">
              Built for leading platforms:
            </h2>

            <div id="hero-platforms-logos" className="inline-flex items-start gap-4">
              {platformLogos.map((logo, index) => (
                <img
                  key={index}
                  id={`hero-platform-logo-${index + 1}`}
                  className={`relative ${logo.className}`}
                  alt={logo.alt}
                  src={logo.src}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};