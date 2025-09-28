import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const processSteps = [
  {
    number: "01",
    title: "Discovery — Deep Dive Analysis",
    description:
      "We align with your business goals, audit your analytics and tracking, and ensure the data we use is 100% reliable",
    containerClasses:
      "w-[644px] top-0 left-[124px] p-[6.5px] rounded-[17.33px] border-[0.72px] blur-[2px] opacity-50",
    contentClasses:
      "gap-[11.55px] p-[17.33px] rounded-[11.55px] border-[0.72px] backdrop-blur-[5.41px]",
    numberClasses:
      "w-[72.92px] text-[52px] tracking-[-2.08px] leading-[57.8px]",
    titleClasses:
      "text-[16.6px] tracking-[-0.33px] leading-[20.2px] mt-[-0.72px]",
    descriptionClasses: "text-[11.6px] leading-[13.7px]",
    gapClasses: "gap-[11.55px]",
    topMaskSrc: "/figmaAssets/mask-group-51.svg",
    bottomMaskSrc: "/figmaAssets/mask-group-52.svg",
    lineSrc: "/figmaAssets/line-72-5.svg",
    topMaskClasses: "top-0 right-[41px] w-[130px] h-1.5",
    bottomMaskClasses: "left-[41px] bottom-[-5px] w-[130px] h-1.5",
  },
  {
    number: "02",
    title: "Research — User Behavior Insights",
    description:
      "Using heatmaps, session recordings, usability tests, polls, and analytics, we uncover why users don't convert",
    containerClasses:
      "w-[723px] top-[108px] left-[84px] p-[7.3px] rounded-[19.46px] border-[0.81px] blur-[1px] opacity-60",
    contentClasses:
      "gap-[12.97px] p-[19.46px] rounded-[12.97px] border-[0.81px] backdrop-blur-[6.08px]",
    numberClasses:
      "w-[81.89px] text-[58.4px] tracking-[-2.33px] leading-[64.9px]",
    titleClasses:
      "text-[18.6px] tracking-[-0.37px] leading-[22.7px] mt-[-0.81px]",
    descriptionClasses: "text-[13px] leading-[15.4px]",
    gapClasses: "gap-[12.97px]",
    topMaskSrc: "/figmaAssets/mask-group-55.svg",
    bottomMaskSrc: "/figmaAssets/mask-group-46.svg",
    lineSrc: "/figmaAssets/line-72.svg",
    topMaskClasses: "top-0 right-[46px] w-[146px] h-1.5",
    bottomMaskClasses: "left-[46px] -bottom-1.5 w-[146px] h-1.5",
  },
  {
    number: "03",
    title: "Ideation — Creative Test Development",
    description:
      "Our CRO experts craft hypotheses and test ideas based on psychology, UX best practices, and proven copywriting principles",
    containerClasses:
      "w-[826px] top-[229px] left-[33px] p-[8.33px] rounded-[22.22px] border-[0.93px] shadow-[inset_0px_0px_0px_8.33px_#ffffff08] opacity-70",
    contentClasses:
      "gap-[14.82px] p-[22.22px] rounded-[14.82px] border-[0.93px] backdrop-blur-[6.95px]",
    numberClasses:
      "w-[93.53px] text-[66.7px] tracking-[-2.67px] leading-[74.1px]",
    titleClasses:
      "text-[21.3px] tracking-[-0.43px] leading-[25.9px] mt-[-0.93px]",
    descriptionClasses: "text-[14.8px] leading-[17.6px]",
    gapClasses: "gap-[14.82px]",
    topMaskSrc: "/figmaAssets/mask-group-36.svg",
    bottomMaskSrc: "/figmaAssets/mask-group-34.svg",
    lineSrc: "/figmaAssets/line-72-1.svg",
    topMaskClasses: "top-0 right-[53px] w-[167px] h-[7px]",
    bottomMaskClasses: "left-[53px] bottom-[-7px] w-[167px] h-[7px]",
  },
  {
    number: "04",
    title: "Prioritization — Strategic Planning",
    description:
      "We rank experiments using the ICE framework (Impact, Confidence, Ease) to focus on the tests that will drive the highest ROI first",
    containerClasses:
      "w-[892px] top-[394px] left-0 p-[9px] rounded-3xl border shadow-[inset_0px_0px_0px_9px_#ffffff08,0px_8px_50px_#000000,0px_-8px_50px_#000000]",
    contentClasses: "gap-4 p-6 rounded-2xl border backdrop-blur-[7.5px]",
    numberClasses:
      "w-[101px] font-[number:var(--display-01-semi-bold-font-weight)] text-[length:var(--display-01-semi-bold-font-size)] tracking-[var(--display-01-semi-bold-letter-spacing)] leading-[var(--display-01-semi-bold-line-height)] font-display-01-semi-bold [font-style:var(--display-01-semi-bold-font-style)]",
    titleClasses:
      "font-heading-h5-semi-bold font-[number:var(--heading-h5-semi-bold-font-weight)] text-[length:var(--heading-h5-semi-bold-font-size)] tracking-[var(--heading-h5-semi-bold-letter-spacing)] leading-[var(--heading-h5-semi-bold-line-height)] [font-style:var(--heading-h5-semi-bold-font-style)] mt-[-1.00px]",
    descriptionClasses:
      "font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]",
    gapClasses: "gap-4",
    topMaskSrc: "/figmaAssets/mask-group-39.svg",
    bottomMaskSrc: "/figmaAssets/mask-group-43.svg",
    lineSrc: "/figmaAssets/line-72-2.svg",
    topMaskClasses: "top-0 right-[57px] w-[180px] h-2",
    bottomMaskClasses: "left-[57px] bottom-[-7px] w-[180px] h-2",
    isHighlighted: true,
  },
  {
    number: "05",
    title: "Experimentation — Testing & Implementation",
    description:
      "We launch tests, run QA, and analyze results in real time — building a knowledge base of what works for your store",
    containerClasses:
      "w-[786px] top-[570px] left-[53px] p-[7.93px] rounded-[21.15px] border-[0.88px] shadow-[inset_0px_0px_0px_7.93px_#ffffff08] opacity-70",
    contentClasses:
      "gap-[14.1px] p-[21.15px] rounded-[14.1px] border-[0.88px] backdrop-blur-[6.61px]",
    numberClasses: "w-[89px] text-[63.4px] tracking-[-2.54px] leading-[70.5px]",
    titleClasses:
      "text-[20.3px] tracking-[-0.41px] leading-[24.7px] mt-[-0.88px]",
    descriptionClasses: "text-[14.1px] leading-[16.7px]",
    gapClasses: "gap-[14.1px]",
    topMaskSrc: "/figmaAssets/mask-group-41.svg",
    bottomMaskSrc: "/figmaAssets/mask-group-42.svg",
    lineSrc: "/figmaAssets/line-72-4.svg",
    topMaskClasses: "top-0 right-[50px] w-[159px] h-[7px]",
    bottomMaskClasses: "left-[50px] -bottom-1.5 w-[159px] h-[7px]",
  },
  {
    number: "06",
    title: "Results — Optimization & Scale",
    description:
      "Winning experiments are rolled out site-wide. Then the cycle repeats — so your store keeps improving every month",
    containerClasses:
      "w-[723px] top-[703px] left-[84px] p-[7.3px] rounded-[19.46px] border-[0.81px] blur-[1px] opacity-60",
    contentClasses:
      "gap-[12.97px] p-[19.46px] rounded-[12.97px] border-[0.81px] backdrop-blur-[6.08px]",
    numberClasses:
      "w-[81.89px] text-[58.4px] tracking-[-2.33px] leading-[64.9px]",
    titleClasses:
      "text-[19.6px] tracking-[-0.39px] leading-[23.9px] mt-[-0.81px]",
    descriptionClasses: "text-[13.6px] leading-[16.2px]",
    gapClasses: "gap-[12.97px]",
    topMaskSrc: "/figmaAssets/mask-group-40.svg",
    bottomMaskSrc: "/figmaAssets/mask-group-37.svg",
    lineSrc: "/figmaAssets/line-72.svg",
    topMaskClasses: "top-0 right-[46px] w-[146px] h-1.5",
    bottomMaskClasses: "left-[46px] -bottom-1.5 w-[146px] h-1.5",
  },
];

export const FeatureSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[1040px] bg-dark-mode900">
      <div className="absolute top-[100px] left-[516px] w-[892px] h-[840px]">
        {processSteps.map((step, index) => (
          <div
            key={`step-${step.number}`}
            className={`flex flex-col items-start justify-center absolute ${step.containerClasses} ${
              step.isHighlighted ? "bg-[#6ae4990a]" : "bg-[#ffffff03]"
            } overflow-hidden border-solid ${
              step.isHighlighted ? "border-[#ffffff1a]" : "border-[#ffffff1a]"
            }`}
          >
            <Card
              className={`flex items-center justify-center relative w-full flex-[0_0_auto] border-solid ${
                step.isHighlighted ? "border-[#6ae49933]" : "border-[#6ae49933]"
              } backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(${
                step.isHighlighted
                  ? "7.5px"
                  : step.contentClasses.includes("5.41px")
                    ? "5.41px"
                    : step.contentClasses.includes("6.08px")
                      ? "6.08px"
                      : step.contentClasses.includes("6.95px")
                        ? "6.95px"
                        : "6.61px"
              })_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%)] ${step.contentClasses}`}
            >
              <CardContent className="flex items-center justify-center w-full p-0">
                <img
                  className={`absolute ${step.topMaskClasses}`}
                  alt="Mask group"
                  src={step.topMaskSrc}
                />

                <div
                  className={`flex items-center justify-center opacity-15 font-semibold text-secondary-200 relative ${
                    step.isHighlighted
                      ? step.numberClasses
                      : `${step.numberClasses} [font-family:'Sora',Helvetica]`
                  }`}
                >
                  {step.number}
                </div>

                <div
                  className={`flex flex-col items-start relative flex-1 grow ${step.gapClasses}`}
                >
                  <div
                    className={`relative self-stretch font-semibold text-secondary-200 ${
                      step.isHighlighted
                        ? step.titleClasses
                        : `${step.titleClasses} [font-family:'Sora',Helvetica]`
                    }`}
                  >
                    {step.title}
                  </div>

                  <img
                    className="relative self-stretch w-full h-px"
                    alt="Line"
                    src={step.lineSrc}
                  />

                  <div
                    className={`relative self-stretch font-normal text-shadeswhite ${
                      step.isHighlighted
                        ? step.descriptionClasses
                        : `${step.descriptionClasses} [font-family:'Sora',Helvetica]`
                    }`}
                  >
                    {step.description}
                  </div>
                </div>

                <img
                  className={`absolute ${step.bottomMaskClasses}`}
                  alt="Mask group"
                  src={step.bottomMaskSrc}
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="inline-flex flex-col items-start gap-6 absolute top-[calc(50.00%_-_209px)] left-8">
        <h1 className="relative self-stretch mt-[-1.00px] font-heading-h1-semi-bold font-[number:var(--heading-h1-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h1-semi-bold-font-size)] tracking-[var(--heading-h1-semi-bold-letter-spacing)] leading-[var(--heading-h1-semi-bold-line-height)] [font-style:var(--heading-h1-semi-bold-font-style)]">
          Our Proven Conversion Optimization Process
        </h1>

        <p className="relative w-[389px] font-subheading-regular font-[number:var(--subheading-regular-font-weight)] text-shadeswhite text-[length:var(--subheading-regular-font-size)] tracking-[var(--subheading-regular-letter-spacing)] leading-[var(--subheading-regular-line-height)] [font-style:var(--subheading-regular-font-style)]">
          We follow a systematic 6-step approach that has generated millions in
          additional revenue for e-commerce brands across the GCC.
        </p>

        <Button className="inline-flex items-center justify-center gap-2 px-5 py-3.5 relative flex-[0_0_auto] bg-secondary-500 rounded h-auto">
          <span className="relative w-fit mt-[-1.00px] font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-neutral-900 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)]">
            Book a Free CRO Audit
          </span>
        </Button>
      </div>
    </section>
  );
};
