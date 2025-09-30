"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Data has been simplified: removed containerClasses, blur, opacity, and isHighlighted properties
const processSteps = [
  {
    number: "01",
    title: "Discovery — Deep Dive Analysis",
    description: "We align with your business goals, audit your analytics and tracking, and ensure the data we use is 100% reliable",
    lineSrc: "/figmaAssets/line-72-2.svg",
    topMaskSrc: "/figmaAssets/mask-group-39.svg",
    bottomMaskSrc: "/figmaAssets/mask-group-43.svg",
  },
  {
    number: "02",
    title: "Research — User Behavior Insights",
    description: "Using heatmaps, session recordings, usability tests, polls, and analytics, we uncover why users don't convert",
    lineSrc: "/figmaAssets/line-72-2.svg",
    topMaskSrc: "/figmaAssets/mask-group-39.svg",
    bottomMaskSrc: "/figmaAssets/mask-group-43.svg",
  },
  {
    number: "03",
    title: "Ideation — Creative Test Development",
    description: "Our CRO experts craft hypotheses and test ideas based on psychology, UX best practices, and proven copywriting principles",
    lineSrc: "/figmaAssets/line-72-2.svg",
    topMaskSrc: "/figmaAssets/mask-group-39.svg",
    bottomMaskSrc: "/figmaAssets/mask-group-43.svg",
  },
  {
    number: "04",
    title: "Prioritization — Strategic Planning",
    description: "We rank experiments using the ICE framework (Impact, Confidence, Ease) to focus on the tests that will drive the highest ROI first",
    lineSrc: "/figmaAssets/line-72-2.svg",
    topMaskSrc: "/figmaAssets/mask-group-39.svg",
    bottomMaskSrc: "/figmaAssets/mask-group-43.svg",
  },
  {
    number: "05",
    title: "Experimentation — Testing & Implementation",
    description: "We launch tests, run QA, and analyze results in real time — building a knowledge base of what works for your store",
    lineSrc: "/figmaAssets/line-72-2.svg",
    topMaskSrc: "/figmaAssets/mask-group-39.svg",
    bottomMaskSrc: "/figmaAssets/mask-group-43.svg",
  },
  {
    number: "06",
    title: "Results — Optimization & Scale",
    description: "Winning experiments are rolled out site-wide. Then the cycle repeats — so your store keeps improving every month",
    lineSrc: "/figmaAssets/line-72-2.svg",
    topMaskSrc: "/figmaAssets/mask-group-39.svg",
    bottomMaskSrc: "/figmaAssets/mask-group-43.svg",
  },
];

// Animation constants
const ANIMATION_DURATION = 24; // Total duration in seconds for one cycle
const TOTAL_STEPS = processSteps.length;
const STEP_INTERVAL_PERCENTAGE = 100 / TOTAL_STEPS;
const SLIDE_CHANGE_TIMING = 3; // The percentage of the animation cycle for a slide to transition

export const FeatureSection = (): JSX.Element => {
  return (
    <>
      {/* 
        This style block contains the CSS animation logic. 
        For best practice, this should be moved to a global CSS file.
      */}
      <style jsx global>{`
        .carousel-item {
          display: flex;
          align-items: center;
          position: absolute;
          width: 100%;
          opacity: 0;
          will-change: transform, opacity;
          animation: carousel-animate-vertical ${ANIMATION_DURATION}s linear infinite;
        }
        @keyframes carousel-animate-vertical {
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

      <section className="relative w-full h-[1040px] bg-dark-mode900 overflow-hidden">
        {/* Left side content */}
        <div className="inline-flex flex-col items-start gap-6 absolute top-[calc(50.00%_-_209px)] left-8 z-10">
            <h1 className="relative self-stretch mt-[-1.00px] font-heading-h1-semi-bold font-[number:var(--heading-h1-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h1-semi-bold-font-size)] tracking-[var(--heading-h1-semi-bold-letter-spacing)] leading-[var(--heading-h1-semi-bold-line-height)] [font-style:var(--heading-h1-semi-bold-font-style)] whitespace-pre-wrap">
                {`Our Proven\nConversion\nOptimization\nProcess`}
            </h1>
            <p className="relative w-[389px] font-subheading-regular font-[number:var(--subheading-regular-font-weight)] text-shadeswhite text-[length:var(--subheading-regular-font-size)] tracking-[var(--subheading-regular-letter-spacing)] leading-[var(--subheading-regular-line-height)] [font-style:var(--subheading-regular-font-style)]">
                We follow a systematic 6-step approach that has generated millions in additional revenue for e-commerce brands across the GCC.
            </p>
            <Button className="inline-flex items-center justify-center gap-2 px-5 py-3.5 relative flex-[0_0_auto] bg-secondary-500 rounded h-auto">
                <span className="relative w-fit mt-[-1.00px] font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-neutral-900 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)]">
                    Book a Free CRO Audit
                </span>
            </Button>
        </div>

        {/* Right side carousel viewport */}
        <div className="absolute top-[100px] left-[516px] w-[892px] h-[840px] flex justify-center items-center">
          {processSteps.map((step, index) => {
            // Calculate the delay for each item to create the carousel effect
            const animationDelayFraction = ANIMATION_DURATION / TOTAL_STEPS;
            const animationDelay = animationDelayFraction * (index - 2);

            return (
              <div
                key={`step-${step.number}`}
                className="carousel-item"
                style={{ animationDelay: `${animationDelay}s` }}
              >
                <div
                  className="w-full p-[9px] rounded-3xl border border-solid border-[#ffffff1a] bg-[#6ae4990a] shadow-[inset_0px_0px_0px_9px_#ffffff08,0px_8px_50px_#000000,0px_-8px_50px_#000000]"
                >
                  <Card className="flex items-center justify-center relative w-full border-solid border-[#6ae49933] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%)] gap-4 p-6 rounded-2xl border">
                    <CardContent className="flex items-center justify-center w-full p-0">
                      <img className="absolute top-0 right-[57px] w-[180px] h-2" alt="Top mask" src={step.topMaskSrc} />
                      <div className="relative w-[101px] opacity-15 font-semibold text-secondary-200 font-display-01-semi-bold font-[number:var(--display-01-semi-bold-font-weight)] text-[length:var(--display-01-semi-bold-font-size)] tracking-[var(--display-01-semi-bold-letter-spacing)] leading-[var(--display-01-semi-bold-line-height)] [font-style:var(--display-01-semi-bold-font-style)]">
                        {step.number}
                      </div>
                      <div className="flex flex-col items-start relative flex-1 grow gap-4">
                        <div className="relative self-stretch font-semibold text-secondary-200 font-heading-h5-semi-bold font-[number:var(--heading-h5-semi-bold-font-weight)] text-[length:var(--heading-h5-semi-bold-font-size)] tracking-[var(--heading-h5-semi-bold-letter-spacing)] leading-[var(--heading-h5-semi-bold-line-height)] [font-style:var(--heading-h5-semi-bold-font-style)] mt-[-1.00px]">
                          {step.title}
                        </div>
                        <img className="relative self-stretch w-full h-px" alt="Line" src={step.lineSrc} />
                        <div className="relative self-stretch font-normal text-shadeswhite font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
                          {step.description}
                        </div>
                      </div>
                      <img className="absolute left-[57px] bottom-[-7px] w-[180px] h-2" alt="Bottom mask" src={step.bottomMaskSrc} />
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};