"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const statisticsData = [
  {
    number: "01",
    title: "Data-Driven Insights",
    description: "We analyze your conversion funnel using advanced analytics and user behavior tracking to identify exactly where revenue is leaking.",
  },
  {
    number: "02",
    title: "Proven Testing Framework",
    description: "Our systematic A/B testing approach has generated millions in additional revenue for e-commerce brands across the GCC.",
  },
  {
    number: "03",
    title: "Expert CRO Team",
    description: "8+ years of specialized experience helping brands achieve an average 35% lift in conversion rates.",
  },
  {
    number: "04",
    title: "Continuous Optimization",
    description: "We don't stop at one win. Our ongoing testing cycles ensure your store keeps improving month after month.",
  },
  {
    number: "05",
    title: "GCC Market Expertise",
    description: "Deep understanding of Arabic users, cultural nuances, and Gulf market behavior patterns.",
  },
  {
    number: "06",
    title: "100% Results Guaranteed",
    description: "If we don't improve your conversions, you don't pay. That's our commitment to your success.",
  },
];

// Animation constants
const ANIMATION_DURATION = 24; // Total duration in seconds for one cycle
const TOTAL_STEPS = statisticsData.length;
const STEP_INTERVAL_PERCENTAGE = 100 / TOTAL_STEPS;
const SLIDE_CHANGE_TIMING = 3; // The percentage of the animation cycle for a slide to transition

export const StatisticsSection = (): JSX.Element => {
  return (
    <>
      {/* Animation styles */}
      <style>{`
        .carousel-item-stats {
          display: flex;
          align-items: center;
          position: absolute;
          width: 100%;
          will-change: transform, opacity;
          animation: carousel-animate-vertical-stats ${ANIMATION_DURATION}s linear infinite;
        }
        @keyframes carousel-animate-vertical-stats {
          0% {
            transform: translateY(100%) scale(0.6);
            opacity: 0;
            visibility: hidden;
          }
          ${SLIDE_CHANGE_TIMING}%,
          ${STEP_INTERVAL_PERCENTAGE}% {
            transform: translateY(100%) scale(0.7);
            opacity: 0.4;
            visibility: visible;
          }
          ${STEP_INTERVAL_PERCENTAGE + SLIDE_CHANGE_TIMING}%,
          ${STEP_INTERVAL_PERCENTAGE * 2}% {
            transform: translateY(0) scale(1);
            opacity: 1;
            visibility: visible;
          }
          ${STEP_INTERVAL_PERCENTAGE * 2 + SLIDE_CHANGE_TIMING}%,
          ${STEP_INTERVAL_PERCENTAGE * 3}% {
            transform: translateY(-100%) scale(0.7);
            opacity: 0.4;
            visibility: visible;
          }
          ${STEP_INTERVAL_PERCENTAGE * 3 + SLIDE_CHANGE_TIMING}% {
            transform: translateY(-100%) scale(0.6);
            opacity: 0;
            visibility: visible;
          }
          100% {
            transform: translateY(-100%) scale(0.6);
            opacity: 0;
            visibility: hidden;
          }
        }
      `}</style>

      <section className="flex flex-col items-start gap-2 px-0 py-[100px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-full h-[546px] bg-[#131612]">
          <img
            className="absolute top-[102px] left-[596px] w-[844px] h-[348px]"
            alt="Sicky bar"
            src="/figmaAssets/sicky-bar.png"
          />

          <div className="flex flex-col w-[665px] items-start justify-center gap-8 absolute top-20 left-[60px] rounded-xl">
            <h2 className="relative self-stretch mt-[-1.00px] font-display-02-semi-bold font-[number:var(--display-02-semi-bold-font-weight)] text-white text-[length:var(--display-02-semi-bold-font-size)] tracking-[var(--display-02-semi-bold-letter-spacing)] leading-[var(--display-02-semi-bold-line-height)] [font-style:var(--display-02-semi-bold-font-style)]">
              Let&apos;s Turn More Visitors Into Buyers
            </h2>

            <p className="relative self-stretch font-subheading-regular font-[number:var(--subheading-regular-font-weight)] text-white text-[length:var(--subheading-regular-font-size)] tracking-[var(--subheading-regular-letter-spacing)] leading-[var(--subheading-regular-line-height)] [font-style:var(--subheading-regular-font-style)]">
              Book your free strategy session today.
              <br /> We&apos;ll audit your store, uncover where revenue is
              leaking, and create a custom conversion plan designed for your
              growth.
            </p>

            <Button 
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 relative flex-[0_0_auto] bg-secondary-500 rounded h-auto hover:bg-secondary-500"
              onClick={() => {
                document.getElementById('testimonials-booking-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <span className="relative w-fit mt-[-1.00px] font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-neutral-900 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                Book My Free Strategy Session
              </span>
            </Button>

            <p className="relative self-stretch font-subheading-semi-bold font-[number:var(--subheading-semi-bold-font-weight)] text-white text-[length:var(--subheading-semi-bold-font-size)] tracking-[var(--subheading-semi-bold-letter-spacing)] leading-[var(--subheading-semi-bold-line-height)] [font-style:var(--subheading-semi-bold-font-style)]">
              100% free. No obligation. Actionable insights guaranteed.
            </p>
          </div>

          {/* Carousel viewport */}
          <div className="absolute top-[calc(50.00%_-_229px)] left-[825px] w-[515px] h-[458px] flex justify-center items-center overflow-hidden">
            {statisticsData.map((stat, index) => {
              // Calculate the delay for each item to create the carousel effect
              const animationDelayFraction = ANIMATION_DURATION / TOTAL_STEPS;
              const animationDelay = animationDelayFraction * (index - 2);

              return (
                <div
                  key={`stat-${stat.number}`}
                  className="carousel-item-stats"
                  style={{ animationDelay: `${animationDelay}s` }}
                >
                  <Card className="flex flex-col w-full h-[458px] items-start justify-center p-3 bg-[#6ae49926] rounded-3xl overflow-hidden border border-solid border-[#b0f1c980] shadow-[inset_0px_0px_0px_9px_#ffffff08]">
                    <CardContent className="relative flex flex-col flex-1 self-stretch w-full grow rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.3)_100%),radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%)] p-8 gap-6">
                      <div className="text-[80px] font-display-01-semi-bold font-[number:var(--display-01-semi-bold-font-weight)] text-secondary-200 opacity-15 leading-none">
                        {stat.number}
                      </div>
                      <div className="flex flex-col gap-4">
                        <h3 className="font-heading-h4-semi-bold font-[number:var(--heading-h4-semi-bold-font-weight)] text-secondary-200 text-[length:var(--heading-h4-semi-bold-font-size)] tracking-[var(--heading-h4-semi-bold-letter-spacing)] leading-[var(--heading-h4-semi-bold-line-height)] [font-style:var(--heading-h4-semi-bold-font-style)]">
                          {stat.title}
                        </h3>
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#6ae499] to-transparent"></div>
                        <p className="font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-shadeswhite text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
                          {stat.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
