import React from "react";
import { Button } from "@/components/ui/button";

export const ContentSection = (): JSX.Element => {
  const gradientBars = Array.from({ length: 12 }, (_, index) => index);

  return (
    <section className="flex flex-col items-start gap-2 px-0 py-[100px] relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex items-center gap-[13px] relative self-stretch w-full flex-[0_0_auto] bg-dark-mode700">
        <div className="inline-flex h-[681px] items-center relative flex-[0_0_auto] bg-dark-mode700">
          {gradientBars.map((index) => (
            <div
              key={`gradient-bar-${index}`}
              className="relative self-stretch w-10 backdrop-blur-[17.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17.5px)_brightness(100%)] bg-[linear-gradient(270deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.1)_100%)]"
            />
          ))}
        </div>

        <img
          className="relative flex-[0_0_auto]"
          alt="Overlay border"
          src="/figmaAssets/overlay-border-shadow.svg"
        />

        <div className="flex w-96 items-start absolute top-20 left-[calc(50.00%_-_688px)] flex-col gap-6">
          <h1 className="relative self-stretch mt-[-1.00px] font-heading-h1-semi-bold font-[number:var(--heading-h1-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h1-semi-bold-font-size)] tracking-[var(--heading-h1-semi-bold-letter-spacing)] leading-[var(--heading-h1-semi-bold-line-height)] [font-style:var(--heading-h1-semi-bold-font-style)]">
            Learn CRO From Our CEO
          </h1>

          <p className="relative self-stretch font-subheading-regular font-[number:var(--subheading-regular-font-weight)] text-shadeswhite text-[length:var(--subheading-regular-font-size)] tracking-[var(--subheading-regular-letter-spacing)] leading-[var(--subheading-regular-line-height)] [font-style:var(--subheading-regular-font-style)]">
            Get insider insights into the strategies that have generated
            millions in additional revenue for Gulf-based e-commerce brands.
          </p>

          <Button
            variant="outline"
            className="px-5 py-3.5 relative flex-[0_0_auto] border border-solid border-[#6ae499] inline-flex items-center justify-center gap-2 rounded bg-transparent h-auto"
            asChild
          >
            <a
              href="https://www.youtube.com/watch?v=8zECN_jyCG4"
              rel="noopener noreferrer"
              target="_blank"
              className="font-normal text-secondary-500 text-lg leading-[18px] relative w-fit mt-[-1.00px] [font-family:'Sora',Helvetica] tracking-[0]"
            >
              <span className="font-[number:var(--paragraph-p3-semi-bold-font-weight)] leading-[var(--paragraph-p3-semi-bold-line-height)] underline font-paragraph-p3-semi-bold [font-style:var(--paragraph-p3-semi-bold-font-style)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] text-[length:var(--paragraph-p3-semi-bold-font-size)]">
                Watch Now
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
