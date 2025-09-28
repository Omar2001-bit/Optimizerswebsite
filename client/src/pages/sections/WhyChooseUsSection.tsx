import React from "react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const WhyChooseUsSection = (): JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const featureCards = [
    {
      title: "Proven Track Record",
      description: (
        <>
          <span className="text-white leading-[0.1px]">
            8+ years helping brands achieve an average{" "}
          </span>
          <span className="font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-white leading-[var(--paragraph-p2-semi-bold-line-height)] font-paragraph-p2-semi-bold [font-style:var(--paragraph-p2-semi-bold-font-style)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] text-[length:var(--paragraph-p2-semi-bold-font-size)]">
            35% lift in conversion rates.
          </span>
        </>
      ),
      height: "h-[221px]",
      topMask: "/figmaAssets/mask-group-21.svg",
      bottomMask: "/figmaAssets/mask-group-13.svg",
      icon: "/figmaAssets/group.png",
      iconClasses: "w-[42.40%] h-[47.96%] top-[44.34%] left-[52.55%]",
      blurElement: "top-5 left-28",
      descriptionWidth: "self-stretch",
    },
    {
      title: "Specialized Expertise",
      description: (
        <>
          <span className="text-white leading-[0.1px]">
            Certified CRO specialists with deep understanding of{" "}
          </span>
          <span className="font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-white leading-[var(--paragraph-p2-semi-bold-line-height)] font-paragraph-p2-semi-bold [font-style:var(--paragraph-p2-semi-bold-font-style)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] text-[length:var(--paragraph-p2-semi-bold-font-size)]">
            Arabic users, cultural nuances, and GCC market behavior.
          </span>
        </>
      ),
      height: "h-[340px]",
      topMask: "/figmaAssets/mask-group-17.svg",
      bottomMask: "/figmaAssets/mask-group-6.svg",
      icon: "/figmaAssets/group-1.png",
      iconClasses: "w-[30.09%] h-[33.82%] top-[61.69%] left-[64.96%]",
      blurElement: "top-[139px] left-28",
      descriptionWidth: "w-[194px]",
    },
    {
      title: "100% Guarantee",
      description: (
        <>
          <span className="text-white leading-[0.1px]">
            If we don&apos;t improve your conversions,{" "}
          </span>
          <span className="font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-white leading-[var(--paragraph-p2-semi-bold-line-height)] font-paragraph-p2-semi-bold [font-style:var(--paragraph-p2-semi-bold-font-style)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] text-[length:var(--paragraph-p2-semi-bold-font-size)]">
            you don&apos;t <br />
            pay.
          </span>
        </>
      ),
      height: "h-[221px]",
      topMask: "/figmaAssets/mask-group-9.svg",
      bottomMask: "/figmaAssets/mask-group-48.svg",
      icon: "/figmaAssets/group-2.png",
      iconClasses: "top-[91px] left-[177px] w-[126px] h-[121px]",
      blurElement: "top-5 left-28",
      descriptionWidth: "self-stretch",
    },
    {
      title: "Fastest Setup, Continuous Growth",
      description: (
        <>
          <span className="text-white leading-[0.1px]">
            Your first experiments live in just{" "}
          </span>
          <span className="font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-white leading-[var(--paragraph-p2-semi-bold-line-height)] font-paragraph-p2-semi-bold [font-style:var(--paragraph-p2-semi-bold-font-style)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] text-[length:var(--paragraph-p2-semi-bold-font-size)]">
            14 days
          </span>
          <span className="text-white leading-[0.1px]">
            , <br />
            with ongoing <br />
            testing cycles for sustained impact
          </span>
          <span className="text-white leading-[19px]">.</span>
        </>
      ),
      height: "h-[340px]",
      topMask: "/figmaAssets/mask-group-11.svg",
      bottomMask: "/figmaAssets/mask-group-8.svg",
      icon: "/figmaAssets/startup-bar-chart-streamline-ux.svg",
      iconClasses:
        "w-[37.26%] top-[calc(50.00%_+_41px)] left-[58.50%] h-[117px]",
      blurElement: "top-[139px] left-28",
      descriptionWidth: "w-[204px]",
    },
  ];

  return (
    <section id="section-why-choose-us" className="w-full bg-dark-mode900 py-[100px] px-4">
      <div id="why-choose-us-container" className="max-w-7xl mx-auto">
        <div id="why-choose-us-header" className="flex flex-col items-center justify-center gap-6 mb-16">
          <h2 id="why-choose-us-title" className="font-heading-h1-semi-bold font-[number:var(--heading-h1-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h1-semi-bold-font-size)] text-center tracking-[var(--heading-h1-semi-bold-letter-spacing)] leading-[var(--heading-h1-semi-bold-line-height)] [font-style:var(--heading-h1-semi-bold-font-style)]">
            Why Choose Our CRO Agency?
          </h2>

          <p id="why-choose-us-description" className="max-w-2xl font-subheading-regular font-[number:var(--subheading-regular-font-weight)] text-shadeswhite text-[length:var(--subheading-regular-font-size)] text-center tracking-[var(--subheading-regular-letter-spacing)] leading-[var(--subheading-regular-line-height)] [font-style:var(--subheading-regular-font-style)]">
            We don&apos;t just run tests — we deliver measurable business
            growth.
          </p>
        </div>

        <div ref={ref} id="why-choose-us-features-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              id={`why-choose-us-feature-card-${index}`}
              className={`${card.height} rounded-2xl overflow-hidden border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(27,140,70,0.2)_100%),radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%)] relative`}
              initial={{
                x: `calc(-50vw + 50%)`, // Start from center of viewport
                y: `calc(-25vh + 25%)`,
                rotate: index * 8 - 12, // Stagger rotations: -12°, -4°, 4°, 12°
                z: index * 15,
                scale: 0.8,
                opacity: 0.7
              }}
              animate={isInView ? {
                x: 0, // Move to natural grid position
                y: 0,
                rotate: 0,
                z: 0,
                scale: 1,
                opacity: 1
              } : {
                x: `calc(-50vw + 50%)`,
                y: `calc(-25vh + 25%)`,
                rotate: index * 8 - 12,
                z: index * 15,
                scale: 0.8,
                opacity: 0.7
              }}
              transition={{
                duration: 1.2,
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
                type: "spring",
                stiffness: 80,
                damping: 15
              }}
              style={{
                transformOrigin: 'center center',
                perspective: 1000,
                transformStyle: "preserve-3d",
                zIndex: 20 - index
              }}
            >
              <CardContent id={`why-choose-us-feature-card-content-${index}`} className="p-0 h-full relative">
                <div id={`why-choose-us-feature-content-${index}`} className="flex flex-col w-[266px] items-start gap-3 absolute top-6 left-6">
                  <h3 id={`why-choose-us-feature-title-${index}`} className="font-heading-h5-semi-bold font-[number:var(--heading-h5-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h5-semi-bold-font-size)] tracking-[var(--heading-h5-semi-bold-letter-spacing)] leading-[var(--heading-h5-semi-bold-line-height)] [font-style:var(--heading-h5-semi-bold-font-style)]">
                    {card.title}
                  </h3>

                  <div
                    id={`why-choose-us-feature-description-${index}`}
                    className={`relative ${card.descriptionWidth} [font-family:'Sora',Helvetica] font-normal text-shadeswhite text-base tracking-[0] leading-4`}
                  >
                    {card.description}
                  </div>
                </div>

                <img
                  id={`why-choose-us-feature-top-mask-${index}`}
                  className="absolute top-0 right-[57px] w-[180px] h-2"
                  alt="Mask group"
                  src={card.topMask}
                />

                <div
                  id={`why-choose-us-feature-blur-element-${index}`}
                  className={`absolute ${card.blurElement} w-[90px] h-[312px] -rotate-90 backdrop-blur-[17.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17.5px)_brightness(100%)] bg-[linear-gradient(270deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.1)_100%)]`}
                />

                <img
                  id={`why-choose-us-feature-icon-${index}`}
                  className={`absolute ${card.iconClasses}`}
                  alt="Feature icon"
                  src={card.icon}
                />

                <img
                  id={`why-choose-us-feature-bottom-mask-${index}`}
                  className="absolute left-9 bottom-[-7px] w-[180px] h-px"
                  alt="Mask group"
                  src={card.bottomMask}
                />
              </CardContent>
            </motion.div>
          ))}
        </div>

        <div id="why-choose-us-cta-section" className="flex justify-center">
          <Button id="why-choose-us-cta-button" className="px-5 py-3.5 bg-secondary-500 h-auto rounded">
            <span id="why-choose-us-cta-button-text" className="font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-neutral-900 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] [font-style:var(--paragraph-p3-semi-bold-font-style)]">
              Get Your Free CRO Audit
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
