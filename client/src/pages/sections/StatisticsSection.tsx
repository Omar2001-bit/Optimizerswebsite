import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const StatisticsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-2 px-0 py-[100px] relative self-stretch w-full flex-[0_0_auto]">
      <div className="relative w-full h-[546px] bg-[#131612]">
        <img
          className="absolute top-[102px] left-[596px] w-[844px] h-[348px]"
          alt="Sicky bar"
          src="/figmaAssets/sicky-bar.png"
        />

        <div className="flex flex-col w-[665px] items-start justify-center gap-8 absolute top-20 left-[60px] rounded-xl backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
          <h2 className="relative self-stretch mt-[-1.00px] font-display-02-semi-bold font-[number:var(--display-02-semi-bold-font-weight)] text-white text-[length:var(--display-02-semi-bold-font-size)] tracking-[var(--display-02-semi-bold-letter-spacing)] leading-[var(--display-02-semi-bold-line-height)] [font-style:var(--display-02-semi-bold-font-style)]">
            Let&apos;s Turn More Visitors Into Buyers
          </h2>

          <p className="relative self-stretch font-subheading-regular font-[number:var(--subheading-regular-font-weight)] text-white text-[length:var(--subheading-regular-font-size)] tracking-[var(--subheading-regular-letter-spacing)] leading-[var(--subheading-regular-line-height)] [font-style:var(--subheading-regular-font-style)]">
            Book your free strategy session today.
            <br /> We&apos;ll audit your store, uncover where revenue is
            leaking, and create a custom conversion plan designed for your
            growth.
          </p>

          <Button className="inline-flex items-center justify-center gap-2 px-5 py-3.5 relative flex-[0_0_auto] bg-secondary-500 rounded h-auto hover:bg-secondary-400">
            <span className="relative w-fit mt-[-1.00px] font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-neutral-900 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)]">
              Book My Free Strategy Session
            </span>
          </Button>

          <p className="relative self-stretch font-subheading-semi-bold font-[number:var(--subheading-semi-bold-font-weight)] text-white text-[length:var(--subheading-semi-bold-font-size)] tracking-[var(--subheading-semi-bold-letter-spacing)] leading-[var(--subheading-semi-bold-line-height)] [font-style:var(--subheading-semi-bold-font-style)]">
            100% free. No obligation. Actionable insights guaranteed.
          </p>
        </div>

        <Card className="flex flex-col w-[515px] h-[458px] items-start justify-center p-3 absolute top-[calc(50.00%_-_229px)] left-[825px] bg-[#6ae49926] rounded-3xl overflow-hidden border border-solid border-[#b0f1c980] shadow-[inset_0px_0px_0px_9px_#ffffff08]">
          <CardContent className="relative flex-1 self-stretch w-full grow rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.3)_100%),radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%),url(..//figmaAssets/background-overlay-border-overlayblur-4.png)_50%_50%_/_cover] p-0">
            <video 
              className="w-full h-full object-cover rounded-2xl"
              autoPlay 
              muted 
              loop
              playsInline
              src="https://core.optimizers.agency/wp-content/uploads/2025/09/video-4.mp4"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
