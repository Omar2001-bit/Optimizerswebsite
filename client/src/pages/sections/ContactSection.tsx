import React from "react";
import { Button } from "@/components/ui/button";

export const ContactSection = (): JSX.Element => {
  const stripeElements = Array.from({ length: 36 }, (_, index) => index);

  return (
    <section className="relative w-full h-[390px] bg-dark-mode700">
      <div className="flex h-[390px] items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark-mode700">
        {stripeElements.map((index) => (
          <div
            key={index}
            className="relative h-full w-10 backdrop-blur-[17.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17.5px)_brightness(100%)] bg-[linear-gradient(270deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.1)_100%)]"
          />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-8 absolute top-[72px] left-1/2 transform -translate-x-1/2 rounded-xl backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
        <h2 className="w-fit mt-[-1.00px] font-display-02-semi-bold font-[number:var(--display-02-semi-bold-font-weight)] text-white text-[length:var(--display-02-semi-bold-font-size)] text-center tracking-[var(--display-02-semi-bold-letter-spacing)] leading-[var(--display-02-semi-bold-line-height)] whitespace-nowrap [font-style:var(--display-02-semi-bold-font-style)]">
          Be Our Next Success Story
        </h2>

        <p className="w-[806px] font-subheading-regular font-[number:var(--subheading-regular-font-weight)] text-white text-[length:var(--subheading-regular-font-size)] text-center tracking-[var(--subheading-regular-letter-spacing)] leading-[var(--subheading-regular-line-height)] [font-style:var(--subheading-regular-font-style)]">
          Real GCC brands. Real results.
          <br /> See how we&apos;ve helped e-commerce stores like yours boost
          conversions, lower costs, and unlock hidden revenue.
        </p>

        <Button className="flex items-center justify-center gap-2 px-5 py-3.5 bg-secondary-500 rounded h-auto hover:bg-secondary-400 relative top-[60px]">
          <span className="w-fit mt-[-1.00px] font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-neutral-900 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)]">
            Let&apos;s Write Your Success Story
          </span>
        </Button>
      </div>
    </section>
  );
};
