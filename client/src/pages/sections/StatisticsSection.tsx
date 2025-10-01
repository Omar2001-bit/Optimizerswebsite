"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export const StatisticsSection = (): JSX.Element => {
  return (
    <>

      <section className="flex flex-col items-start gap-2 px-0 py-[200px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-full h-[546px] bg-[#131612]">
          <div className="max-w-[1440px] mx-auto relative h-full">
            <img
              className="absolute top-[102px] left-[596px] w-[844px] h-[348px]"
              alt="Sicky bar"
              src="/figmaAssets/sicky-bar.png"
            />

            <div className="flex flex-col w-[665px] items-start justify-center gap-8 absolute top-20 left-[60px] rounded-xl">
              <h2 className="relative self-stretch mt-[-1.00px] text-white text-[48px] font-semibold tracking-[-1.92px] leading-[56px]">
                Let&apos;s Turn More Visitors Into Buyers
              </h2>

              <p className="relative self-stretch text-white text-[20px] font-normal tracking-[0px] leading-6">
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
                <span className="relative w-fit mt-[-1.00px] text-neutral-900 text-[18px] font-semibold tracking-[0px] leading-[21.6px] whitespace-nowrap">
                  Book My Free Strategy Session
                </span>
              </Button>

              <p className="relative self-stretch text-white text-[20px] font-semibold tracking-[0px] leading-6">
                100% free. No obligation. Actionable insights guaranteed.
              </p>
            </div>

            {/* Video container */}
            <div className="absolute top-[calc(50.00%_-_229px)] left-[825px] w-[515px] h-[458px] flex justify-center items-center overflow-hidden rounded-[24px] border-[3px] border-[#2d5f3e]">
              <video
                className="w-full h-full object-cover rounded-[20px]"
                autoPlay
                muted
                loop
                playsInline
                webkit-playsinline="true"
                preload="auto"
              >
                <source src="https://core.optimizers.agency/wp-content/uploads/2025/09/video-4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
