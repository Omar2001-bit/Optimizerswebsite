import React from "react";
import { Button } from "@/components/ui/button";

export const ContactSection = (): JSX.Element => {
  const stripeElements = Array.from({ length: 36 }, (_, index) => index);

  return (
    <section id="section-contact" className="relative w-full min-h-[390px] bg-dark-mode700 py-[100px] md:py-[200px]">
      <div id="contact-background-stripes" className="flex h-[390px] items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark-mode700">
        {stripeElements.map((index) => (
          <div
            key={index}
            id={`contact-stripe-${index}`}
            className="relative h-full w-10 backdrop-blur-[17.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17.5px)_brightness(100%)] bg-[linear-gradient(270deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.1)_100%)]"
          />
        ))}
      </div>

      <div id="contact-content" className="flex flex-col items-center justify-center gap-8 absolute top-[72px] left-1/2 transform -translate-x-1/2 rounded-xl">
        <h2 id="contact-title" className="w-fit mt-[-1.00px] text-white text-[60px] font-semibold text-center tracking-[0px] leading-[1.2] whitespace-nowrap">
          Be Our Next Success Story
        </h2>

        <p id="contact-description" className="w-[806px] text-white text-[20px] font-normal text-center tracking-[0px] leading-[1.5]">
          Real GCC brands. Real results.
          <br /> See how we&apos;ve helped e-commerce stores like yours boost
          conversions, lower costs, and unlock hidden revenue.
        </p>

        <Button 
          id="contact-cta-button" 
          className="flex items-center justify-center gap-2 px-5 py-3.5 bg-secondary-500 rounded h-auto hover:bg-secondary-500"
          onClick={() => {
            document.getElementById('testimonials-booking-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          <span id="contact-cta-button-text" className="w-fit mt-[-1.00px] text-neutral-900 text-[18px] font-semibold tracking-[0px] leading-[1.2] whitespace-nowrap">
            Let&apos;s Write Your Success Story
          </span>
        </Button>
      </div>
    </section>
  );
};
