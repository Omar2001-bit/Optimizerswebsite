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
    <section id="section-hero" className="flex w-full h-[676px] items-end pt-0 pb-[60px] px-10 relative rounded-2xl overflow-hidden shadow-[0px_15px_61.7px_#93939340] bg-[linear-gradient(0deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_100%),url(../figmaAssets/hero.png)_50%_50%_/_cover]">
      <Card id="hero-card" className="w-[493px] bg-[#ffffff33] border border-solid border-[#6ae49933] rounded-xl backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
        <CardContent id="hero-card-content" className="flex flex-col items-start gap-12 p-8">
          <div id="hero-main-content" className="flex flex-col items-start gap-6 w-full">
            <h1 id="hero-title" className="font-heading-h1-small-semi-bold font-[number:var(--heading-h1-small-semi-bold-font-weight)] text-white text-[length:var(--heading-h1-small-semi-bold-font-size)] tracking-[var(--heading-h1-small-semi-bold-letter-spacing)] leading-[var(--heading-h1-small-semi-bold-line-height)] [font-style:var(--heading-h1-small-semi-bold-font-style)]">
              Your ads bring visitors,
              <br />
              we turn them into buyers.
            </h1>

            <p id="hero-description" className="font-subheading-regular font-[number:var(--subheading-regular-font-weight)] text-white text-[length:var(--subheading-regular-font-size)] tracking-[var(--subheading-regular-letter-spacing)] leading-[var(--subheading-regular-line-height)] [font-style:var(--subheading-regular-font-style)]">
              If you&apos;re investing in ads but not seeing enough sales,
              we&apos;ll find the leaks in your funnel, fix them, and maximize
              your returns.
            </p>

            <Button id="hero-cta-button" className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-secondary-500 rounded h-auto hover:bg-secondary-400">
              <span id="hero-cta-button-text" className="font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-neutral-900 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                Start Your Journey Now
              </span>
            </Button>
          </div>

          <div id="hero-platforms-section" className="flex flex-col items-start gap-4 w-full">
            <h2 id="hero-platforms-title" className="font-heading-h6-small-semi-bold font-[number:var(--heading-h6-small-semi-bold-font-weight)] text-white text-[length:var(--heading-h6-small-semi-bold-font-size)] tracking-[var(--heading-h6-small-semi-bold-letter-spacing)] leading-[var(--heading-h6-small-semi-bold-line-height)] [font-style:var(--heading-h6-small-semi-bold-font-style)]">
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
